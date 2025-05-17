import { forwardRef } from "react";
import { motion } from "framer-motion";
import info from "../info.json";

const Info = forwardRef((props, ref) => (
    <section id="info" ref={ref} className="relative min-h-[75vh] bg-gray-300 py-5 flex items-center justify-center">
        <div className="container mx-auto w-6xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                viewport={{ amount: 0.25, once: false }} className="flex flex-col md:flex-row items-center justify-center gap-8"
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
                    viewport={{ once: false }} className="min-w-xl mx-auto grid grid-row md:grid-cols-2 gap-8"
                >
                    <div>
                        <motion.h2 className="text-4xl font-bold mb-8 text-gray-800 relative">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                        </motion.h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
                                viewport={{ once: false }} transition={{ default: { duration: 0.6 }, scale: { duration: 0.2 }}}
                            >
                                Hello! I'm Will, originally from Towson, MD, and thanks for visiting my portfolio! I started 
                                coding in middle school through basic Web Projects and Discord Chatbots, and, since then, 
                                have grown my love for problem solving through programming within my personal and academic pursuits.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
                                viewport={{ once: false }} transition={{ duration: 0.6 }} 
                            >
                                My technical interests span across [your specific interests, e.g., web development, 
                                artificial intelligence, cybersecurity]. I'm particularly excited about [specific 
                                technologies or frameworks you enjoy working with], and I'm always eager to learn 
                                and explore new technologies.
                            </motion.p>
                        </div>
                    </div>
                    <div>
                        <motion.h2 className="text-3xl font-bold mb-8 text-gray-800 relative">
                            Technical Skills
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                        </motion.h2>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center text-gray-700 dark:text-gray-200">
                            {
                                info.skills.map((skill, idx) => (
                                    <motion.div 
                                        key={idx} initial={{ opacity: 0, y: (idx % 2 === 0 ? 20 : -20 )}} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.2 }}
                                        transition={{ default: 0.6, scale: 0.2 }} viewport={{ once: false }} className="flex flex-col items-center"
                                    >
                                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.devicon}`} alt={`${skill.title}`} className="w-12 h-12" />
                                        <span className="mt-2 text-sm">{skill.name}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                        <motion.h2 className="text-3xl font-bold mt-4 mb-8 text-gray-800 relative">
                            Socials
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                        </motion.h2>
                        <div className="text-white text-sm">
                            {
                                info.socials.map((social, idx) => (
                                    <button
                                        key={idx} type="button" onclick={`window.open('${social.link}', '_blank)`}
                                        className={`bg-[${social.color}] hover:bg-[${social.color}]/90 focus:outline-none font-medium rounded-lg shadow-md px-5 py-3 inline-flex items-center mr-2 mb-2 gap-2`}
                                    >
                                        {social.name}
                                        <i className={social.devicon}></i>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
));

export default Info;
