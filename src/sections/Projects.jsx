import { forwardRef } from 'react';
import { motion } from "framer-motion";
import info from "../info.json";

const Projects = forwardRef((props, ref) => (
    <section id="projects" ref={ref} className="relative pt-8 pb-8 items-center justify-center min-h-[85vh] bg-gray-300">
        {
            info.projects.map((proj, idx) => (
                <motion.div
                    initial={{ opacity: 0, x: (idx % 2 !== 0 ? -50 : 50) }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }} viewport={{ amount: 1/3, once: false }}
                    key={idx} className="mx-auto mb-8 w-3/4 shadow-lg rounded-lg bg-white"
                >
                    <div className="flex flex-row">
                        <div className="w-2/3 p-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-2xl font-bold text-gray-800">{proj.title}</h3>
                                <span className="text-sm text-gray-600">{proj.date}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ duratation: 0.4, delay: 0.2 }}
                                >
                                    <h4 className="font-semibold mb-2 text-gray-700">Overview</h4>
                                    <p className="text-gray-600">{proj.overview}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.25 }}
                                >
                                    {proj.technologies && (
                                        <h4 className="font-semibold mb-2 text-gray-700">Technologies</h4>
                                    )}
                                    {proj.technologies && proj.technologies.map((tech, idx) => (
                                        <div className="inline-flex gap-2 font-md mr-2">
                                            {tech.name}
                                            <img
                                                loading="lazy" alt={tech.name} className="w-6 h-6"
                                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.devicon}`}
                                            />
                                            {idx !== proj.technologies.length - 1 && ( 
                                                <p className="font-medium text-gray-600">/</p>
                                            )}
                                        </div>
                                    ))}
                                    {proj.purpose && (
                                        <div>
                                            <h4 className="font-semibold my-2 text-gray-700">Purpose</h4>
                                            <p className="text-gray-600">{proj.purpose}</p>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                        <div className="w-1/3 flex flex-col items-center">
                            <img
                                src={proj.image} alt={proj.title} loading="lazy" decoding="async"
                                className="h-full object-cover"
                            />
                            <div className="flex w-full items-center text-center text-white justify-center">
                                {proj.link && (
                                    <a
                                        href={proj.link} target="_blank" rel="noreferrer"
                                        className={`${proj.link && proj.demo ? "w-1/2" : "w-full rounded-br-md"} px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors`}
                                    >
                                        GitHub
                                    </a>
                                )}
                                {proj.demo && (
                                    <a
                                        href={proj.demo} target="_blank" rel="noreferrer"
                                        className={`${proj.link && proj.demo ? "w-1/2" : "w-full"} px-4 py-2 rounded-br-md bg-gray-800 hover:bg-gray-700 transition-colors`}
                                    >
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))
        }
    </section>
));

export default Projects;
