import { forwardRef } from "react";
import { motion } from "framer-motion";

const Hero = forwardRef((props, ref) => (
    <section ref={ref} className="relative h-screen m flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-[url('../public/umdcs.jpg')] bg-cover bg-center opacity-30 z-0"></div>
        
        <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} 
            viewport={{ once: true }} className="z-10 text-center text-white"
        >
            <motion.h1
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                viewport={{ once: true }} className="text-2xl md:text-4xl  font-bold"
            >
                Welcome! I'm Will Ferrens
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }} className="mt-4 px-4 md:px-0 text-lg md:text-2xl text-white max-w-3xl"
            >
                An <span className="font-semibold">Undergraduate Student</span> at the
                University of Maryland, College Park aspiring to be a{' '}
                <span className="font-semibold">Software Developer</span>. 
            </motion.p>
        </motion.div>
    </section>
));

export default Hero;
