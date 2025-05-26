import { forwardRef } from "react";
import { motion } from "framer-motion";
import HeroCanvas from "../components/HeroCanvas";

const Hero = forwardRef((props, ref) => (
    <section ref={ref} className="relative h-[75vh] flex items-center justify-center bg-black">
        <HeroCanvas />

        <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="z-10 text-center text-white"
        >
            <motion.h1
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                viewport={{ once: true }} className="text-2xl lg:text-4xl font-bold"
            >
                Welcome! I'm Will Ferrens
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }} className="mt-4 text-md lg:text-2xl text-white max-w-[80vw] lg:max-w-2xl"
            >
                An <span className="font-bold">Undergraduate Student</span> at the
                University of Maryland, College Park and aspiring {' '}
                <span className="font-bold">Software Developer</span>.
            </motion.p>
        </motion.div>
    </section>
));

export default Hero;
