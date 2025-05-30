import { forwardRef } from 'react';
import { motion } from "framer-motion";
import info from "../info.json";

const Projects = forwardRef((props, ref) => (
    <section ref={ref} className="relative pt-8 pb-8 items-center justify-center min-h-[85vh] bg-gray-300">
        {
            info.projects.map((proj, idx) => (
                <motion.div
                    initial={{ opacity: 0, x: (idx % 2 !== 0 ? -50 : 50) }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }} viewport={{ amount: 1/5, once: true }}
                    key={idx} className="mx-4 mb-8 bg-white rounded-lg shadow-lg lg:mx-auto lg:w-5/6 lg:max-w-6xl"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-4 lg:w-2/3 lg:p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-gray-800 lg:text-xl">{proj.title}</h3>
                                <span className="text-xs text-gray-600 lg:text-md">{proj.date}</span>
                            </div>

                            <div className="grid gap-2 grid-row lg:grid-cols-2 lg:gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ duratation: 0.4, delay: 0.2 }}
                                >
                                    {proj.overview && (
                                        <div>
                                            <h4 className="mb-2 font-bold text-gray-700">Overview</h4>
                                            <p className="text-gray-600">{proj.overview}</p>
                                        </div>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.25 }}
                                >
                                    {proj.technologies && (
                                        <h4 className="mb-2 font-bold text-gray-700">Technologies</h4>
                                    )}
                                    {proj.technologies && proj.technologies.map((tech, idx) => (
                                        <div key={idx} className="inline-flex gap-2 lg:mr-2">
                                            {tech.name}
                                            <img
                                                loading="lazy" alt={tech.name} className="w-6 h-6"
                                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.devicon}`}
                                            />
                                            {idx !== proj.technologies.length - 1 && ( 
                                                <p className="mr-2 font-medium text-gray-600 lg:mr-0">/</p>
                                            )}
                                        </div>
                                    ))}
                                    {proj.purpose && (
                                        <div>
                                            <h4 className="my-2 font-bold text-gray-700">Purpose</h4>
                                            <p className="text-gray-600">{proj.purpose}</p>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:w-1/3">
                            <motion.img
                                src={proj.image} alt={proj.title} loading="lazy" decoding="async"
                                className={`w-full lg:h-full object-fill ${proj.link || proj.demo ? "lg:rounded-tr-lg" : "rounded-b-lg lg:rounded-none lg:rounded-r-lg"}`}
                            />
                            <div className="flex items-center justify-center w-full text-center text-white">
                                {proj.link && (
                                    <a
                                        href={proj.link} target="_blank" rel="noreferrer"
                                        className={`${proj.link && proj.demo ? "w-1/2 rounded-bl-md lg:rounded-none" : "w-full rounded-b-md lg:rounded-none lg:rounded-br-md"} px-4 py-2 bg-gray-800 hover:opacity-80 transition-colors`}
                                    >
                                        GitHub 
                                    </a>
                                )}
                                {proj.demo && (
                                    <a
                                        href={proj.demo} target="_blank" rel="noreferrer"
                                        className={`${proj.link && proj.demo ? "w-1/2 rounded-br-md" : "w-full rounded-b-md lg:rounded-none lg:rounded-br-md"} px-4 py-2 bg-gray-800 hover:opacity-80 transition-colors`}
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
