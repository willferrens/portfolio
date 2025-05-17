import { forwardRef } from 'react';
import { motion } from "framer-motion";
import { projects } from '../info.json';

const Projects = forwardRef((props, ref) => (
    <section id="projects" ref={ref} className="relative pt-8 pb-8 items-center justify-center min-h-[85vh] bg-gray-300">
        { 
            projects.map((proj, idx) => (
                <motion.div
                    initial={{ opacity: 0, x: (idx % 2 !== 0 ? -30 : 30) }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }}
                    transition={{ default: { duration: (0.25 * idx) + 0.4 }, scale: { duration: 0.2 }}} viewport={{ amount: 0.5, once: false }}
                    key={idx} className="mx-auto mb-8 p-6 w-3/4 shadow-lg rounded-lg bg-white"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3 space-y-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">{proj.title}</h3>
                                <span className="text-sm text-gray-600">{proj.date}</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2  bordergap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duratation: 0.5, delay: (idx * 0.2) + 0.2 }}
                                >
                                    <h4 className="font-semibold mb-2 text-gray-700">Overview</h4>
                                    <p className="text-gray-600">{proj.overview}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: (idx * 0.2) + 0.2 }}
                                >
                                    <h4 className="font-semibold mb-2 text-gray-700">Technologies</h4>
                                    <p className="text-gray-600">{proj.technologies}</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex flex-col space-y-4">
                                <motion.img
                                    src={proj.image} alt={proj.title} loading="lazy"
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
                                />
                                <div className="flex gap-4 justify-center">
                                    {proj.link && (
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {proj.demo && (
                                        <a
                                            href={proj.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
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
