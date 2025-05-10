import { forwardRef } from "react";
import { motion } from "framer-motion";

const Info = forwardRef((props, ref) => (
    <section id="info" ref={ref} className="relative h-[75vh] bg-gray-300 py-0 flex items-center justify-center">
        <div className="container mx-auto w-6xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                viewport={{ once: false }} className="flex flex-col md:flex-row items-center justify-center gap-8"
            >
                <motion.div className="flex justify-end">
                    <div className="relative group w-64 h-64">
                        <img 
                            src="/pfp.jpg" alt="WF Profile" loading="lazy" 
                            className="w-full h-full rounded-full shadow-xl border-4 border-white" 
                        />
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.5, once: false }} className="max-w-xl"
                >
                    <motion.h2 className="text-5xl font-bold mb-8 text-gray-800 relative">
                        About Me
                        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                    </motion.h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
                            transition={{ default: { duration: 0.6 }, scale: { duration: 0.2 }}} viewport={{ once: false }}
                        >
                            Hello! I'm Will, originally from Towson, MD, and thanks for visiting my portfolio! I started 
                            coding in middle school through basic Web Projects and Discord Chatbots, and, since then, 
                            have grown my love for problem solving through programming within my personal and academic pursuits.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6 }} viewport={{ once: false }}
                        >
                            My technical interests span across [your specific interests, e.g., web development, 
                            artificial intelligence, cybersecurity]. I'm particularly excited about [specific 
                            technologies or frameworks you enjoy working with], and I'm always eager to learn 
                            and explore new technologies.s
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
));

export default Info;
