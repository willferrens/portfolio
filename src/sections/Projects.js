import { forwardRef } from 'react';
import { motion } from "framer-motion";
import projects from '../projects.json';

const Projects = forwardRef((props, ref) => (
    <section id="projects" ref={ref} className="relative pt-8 items-center justify-center min-h-[85vh] bg-gray-300">
        { 
            projects.map((proj, idx) => (
                <motion.div
                    initial={{ opacity: 0, x: (idx % 2 === 0 ? -30 : 30) }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }}
                    transition={{ default: { duration: (0.25 * idx) + 0.4 }, scale: { duration: 0.2 }}} viewport={{ amount: 0.75, once: false }}
                    key={idx} className="mx-auto mb-4 p-4 w-1/2 shadow rounded bg-white"
                >
                    <img src={proj.image} alt={proj.title} loading="lazy" className="mb-2" />
                    <h3 className="text-xl font-semibold">
                        {proj.title} -- {proj.date}
                    </h3>
                    <p>{proj.description}</p>
                    <a 
                        href={proj.link} target="_blank"  
                        rel="noreferrer" className="text-blue-500 underline"
                    >
                        View on Github
                    </a>
                </motion.div>
            ))
        };
    </section>
));

export default Projects;
