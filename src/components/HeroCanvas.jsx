import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Noise } from "noisejs";
import * as THREE from "three";

const noise = new Noise(Math.random());

function WavyLattice() {
    const meshRef = useRef();
    const originalPositions = useRef();

    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        const time = clock.getElapsedTime();
        const geometry = meshRef.current.geometry;
        const positions = geometry.attributes.position.array;

        if (!geometry.attributes.color) {
            const geometry = meshRef.current.geometry;
            const colors = new Float32Array(geometry.attributes.position.count * 3).fill(1);
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        }
        const colors = geometry.attributes.color.array;

        if (!originalPositions.current) {
            originalPositions.current = new Float32Array(positions.length);
            originalPositions.current.set(positions);
        }

        for (let i = 0; i < positions.length; i += 3) {
            const ox = originalPositions.current[i];
            const oy = originalPositions.current[i + 1];
            
            const mz = noise.perlin3(ox * 0.5, oy * 0.5, time * 0.4) * 1.1;
            positions[i + 2] = mz;

            const t = map(mz, -1, 1, 0, 0.75);

            colors[i] = t;
            colors[i + 1] = 0;
            colors[i + 2] = 0;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
        geometry.computeBoundingSphere();
    });

    return (
        <mesh ref={meshRef} rotation={[-55 * Math.PI / 180, 0, 0]}>
            <planeGeometry args={[60, 40, 25, 15]} />
            <meshStandardMaterial wireframe={true} vertexColors={true} />
        </mesh>
    );
}

function map(value, inMin, inMax, outMin, outMax) {
    if (inMin === inMax) return outMin;

    const normalized = (value - inMin) / (inMax - inMin);
    const clamped = Math.max(-1, Math.min(1, normalized));
    return clamped * (outMax - outMin) + outMin;
}

export default function HeroCanvas() {
    return (
        <Canvas
            style={{ position: "absolute", pointerEvents: "none" }} 
            className="z-0 top-0 left-0 w-full bg-[#111827] h-[100vh] opacity-50 lg:opacity-40 "
        >
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.2} />
            <WavyLattice />
        </Canvas>
    );
}
