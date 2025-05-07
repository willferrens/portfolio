import { forwardRef } from 'react';
import projects from '../projects.json';

const Projects = forwardRef((props, ref) => (
    <section id="projects" ref={ref} class="relative items-center justify-center h-[75vh] bg-gray-300">
        Projects
        {/* { 
            projects.map((proj, idx) => (
                <div key={idx} className="p-4 w-1/2 shadow rounded bg-white">
                    <img src={proj.image} alt={proj.title} loading="lazy" className="mb-2" />
                    <h3 className="text-xl font-semibold">{proj.title} -- {proj.date}</h3>
                    <p>{proj.description}</p>
                    <a href={proj.link} className="text-blue-500 underline">View on Github</a>
                </div>
            ))
        }; */}
    </section>
));

export default Projects;
