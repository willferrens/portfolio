import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// Page Sections
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Projects from "./sections/Projects";
// Page Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    // use for expanding navbar on scroll
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const threshold = window.innerHeight * (1/3);
        const handleScroll = () => { setExpanded(window.scrollY > threshold); }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    // use for changing active section of navbar
    const [activeSection, setActiveSection] = useState('Welcome!');

    const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.4 });
    const { ref: infoRef, inView: infoInView } = useInView({ threshold: 0.4 });
    const { ref: projRef, inView: projInView } = useInView({ threshold: 0.4 });

    useEffect(() => {
        if (heroInView) {
            setActiveSection("Welcome!");
        } else if (infoInView) {
            setActiveSection("Personal Info");
        } else if (projInView) {
            setActiveSection("Projects");
        }
    }, [heroInView, infoInView, projInView]);

    return (
        <div class="relative">
            <Navbar 
                activeSection={activeSection} expanded={expanded} 
            />
            <Hero ref={heroRef} />
            <Info ref={infoRef} />
            <Projects ref={projRef} />
            <Footer />
        </div>
    );
}
