import { forwardRef } from "react";
import { motion } from "framer-motion";
import info from "../info.json";

const Info = forwardRef((props, ref) => (
    <section id="info" ref={ref} className="relative min-h-[65vh] bg-gray-300 py-5 flex items-center justify-center">
        <div className="container mx-auto max-w-[90vw] lg:max-w-4xl xl:max-w-6xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                viewport={{ once: true }} className="flex flex-col lg:flex-row items-center justify-center gap-8"
            >
                <motion.div className="flex justify-end">
                    <div className="relative group w-48 h-48 xl:w-64 xl:h-64">
                        <img 
                            src="/assets/pfp.jpg" alt="WF Profile" loading="lazy"
                            className="w-full h-full rounded-full shadow-xl border-4 border-white" 
                        />
                        
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
                    viewport={{ once: true }} className="flex flex-col lg:grid lg:grid-cols-2 gap-8"
                >
                    <div>
                        <motion.h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 relative">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                        </motion.h2>
                        <div className="space-y-2 text-md text-gray-700 leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6 }}
                            >
                                Welcome to my portfolio! I'm Will, originally from Towson, MD, and I started 
                                coding in middle school through basic Web Projects and Discord Chatbots, and have since  
                                grown my love for problem solving through programming within my personal and academic pursuits.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }} transition={{ duration: 0.6 }} 
                            >
                                I have recently been working on some personal projects to learn Rust and Ruby while also completing
                                my coursework at the University of Maryland, College Park. I am always looking to learn a new language or
                                framework so feel free to reach out! You can find my email listed in the 
                                {' '}<a href="#contact" className="underline">footer</a>{' '}of my website.
                            </motion.p>
                        </div>
                    </div>
                    <div>
                        <motion.h2 className="text-3xl font-bold mb-8 text-gray-800 relative">
                            Technical Skills
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                        </motion.h2>
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-8 justify-center items-center text-gray-700">
                            {
                                info.skills.map((skill, idx) => (
                                    <motion.div 
                                        key={idx} className="flex flex-col items-center hover:cursor-pointer" onClick={() => window.open(`${skill.link}`, '_blank')}
                                        initial={{ opacity: 0, y: (idx % 2 === 0 ? 20 : -20 )}} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.2 }}
                                        transition={{ default: 0.8, scale: 0.2 }} viewport={{ once: true }} 
                                    >
                                        <img 
                                            loading="lazy" alt={`${skill.title}`} className="w-10 h-10" 
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.devicon}`}  
                                        />
                                        <span className="mt-2 text-sm">{skill.name}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                        <motion.h2 className="text-3xl font-bold mt-4 mb-8 text-gray-800 relative">
                            Socials
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
                        </motion.h2>
                        <div className="flex flex-row justify-center lg:justify-start text-white text-sm">
                            {
                                info.socials.map((social, idx) => (
                                    <button
                                        key={idx} type="button" onClick={() => window.open(`${social.link}`, '_blank')} style={{ backgroundColor: social.color }}
                                        className={`hover:opacity-90 rounded-lg shadow-md px-3 py-3 inline-flex items-center mr-2 gap-2 transition-colors`}
                                    >
                                        {social.name} <i className={social.devicon}></i>
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
