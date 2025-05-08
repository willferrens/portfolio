export default function Navbar({ activeSection, expanded }) {    
    return (
        <header id="navbar" className={`fixed top-0 left-0 w-full backdrop-blur z-10 transition-all duration-300 ${ expanded ? 'bg-gray-900 py-4' : 'bg-transparent py-2' }`}>
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 text-white">
                <h1 className="text-2xl font-bold">{activeSection}</h1>
                <div className="space-x-4">
                    <a href="#info" className="hover:underline">Info</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#info" className="hover:underline">Contact</a>
                </div>
            </nav>
        </header>
    );
};
