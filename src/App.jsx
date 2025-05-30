import { useRef, useEffect, useState } from 'react';
// Page Sections
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Projects from "./sections/Projects";
// Page Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    // use state to toggle/adjsut navbar values 
    const [expanded, setExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState('Welcome!');
    const offset = 60; // general offset of navbar
    
    // references for each section
    const heroRef = useRef(null);
    const infoRef = useRef(null);
    const projRef = useRef(null);

    // values/references of each sections
    const sections = [
        { value: 'Welcome!', ref: heroRef },
        { value: 'Personal Info', ref: infoRef },
        { value: 'Projects', ref: projRef }
    ];

    const scrollToSection = (section) => {
        section?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // use for expanding navbar on scroll
    useEffect(() => {
        const expandNav = () => {
            if (!heroRef.current) return;

            const bottom = heroRef.current.getBoundingClientRect().bottom;
            setExpanded(bottom <= offset + 5);
        };

        // add events for both onload and onscroll for best use
        window.addEventListener('load', expandNav, { passive: true });
        window.addEventListener('scroll', expandNav, { passive: true });
        return () => {
            window.removeEventListener('load', expandNav);
            window.removeEventListener('scroll', expandNav);
        };
    });

    // use for changing active section of navbar
    useEffect(() => {
        const getSection = () => {
            let curr = null;

            for (let i = 0; i < sections.length; i++) {
                const { value, ref } = sections[i];
                const top = ref.current?.getBoundingClientRect().top;

                if (top !== undefined && top - offset <= 5) {
                    curr = value;
                }
            }

            setActiveSection(curr);
        };

        // add events for both onload and onscroll for best use
        window.addEventListener('load', getSection, { passive: true });
        window.addEventListener('scroll', getSection, { passive: true });
        return () => {
            window.removeEventListener('load', getSection);
            window.removeEventListener('scroll', getSection);
        };
    });

    // overall website
    return (
        <div className="relative">
            <Navbar 
                activeSection={activeSection} 
                expanded={expanded}
                onNavClick={scrollToSection}
                refs={{ infoRef, projRef }}
            />
            <Hero ref={heroRef} />
            <Info ref={infoRef} />
            <Projects ref={projRef}  />
            <Footer />
        </div>
    );
}
