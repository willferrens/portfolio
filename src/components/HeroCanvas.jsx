import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Noise } from "noisejs";
import * as THREE from "three";

const noise = new Noise(Math.random());

function WavyLattice() {
    const meshRef = useRef();
    const originalPositions = useRef();

    useEffect(() => {
        const geometry = meshRef.current.geometry;
        const colors = new Float32Array(geometry.attributes.position.count * 3).fill(1);
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }, []);

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

            const z = noise.perlin3(ox * 0.5, oy * 0.5, time * 0.4) * 1.1;
            positions[i + 2] = z;

            const t = map(z, -1, 1, 0, 1);

            colors[i] = t;
            colors[i + 1] = 0;
            colors[i + 2] = 2 - t;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
        geometry.computeBoundingSphere();
    });

    return (
        <mesh ref={meshRef} rotation={[-55 * Math.PI / 180, 0, 0]}>
            <planeGeometry args={[60, 40, 25, 15]} />
            <meshBasicMaterial wireframe={true} vertexColors={true} />
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
            style={{
                position: "absolute", zIndex: 0,
                width: "100%", height: "100vh",
                top: 0, left: 0, pointerEvents: "none",
                opacity: "30%", backgroundColor: "#111827"
            }} className="canvas-background"
        >
            <WavyLattice />
        </Canvas>
    );
}
