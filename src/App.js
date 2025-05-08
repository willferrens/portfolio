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
        { value: 'Projects', ref: projRef },
    ];

    // use for expanding navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;

            const bottom = heroRef.current.getBoundingClientRect().bottom;
            setExpanded(bottom <= offset + 5);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    });

    // use for changing active section of navbar
    useEffect(() => {
        const handleScroll = () => {
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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    })

    // overall website
    return (
        <div class="relative">
            <Navbar 
                activeSection={activeSection} 
                expanded={expanded} 
            />
            <Hero ref={heroRef} />
            <Info ref={infoRef} />
            <Projects ref={projRef} />
            <Footer />
        </div>
    );
}
