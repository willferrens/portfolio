export default function Navbar({ activeSection, expanded }) {    
    return (
        <header
            id="navbar" className={`fixed top-0 left-0 w-screen backdrop-blur z-10 transition-all duration-300 ${ expanded ? 'bg-gray-900 py-4' : 'bg-transparent py-2' }`}
        >
            <nav className="flex items-center justify-between px-4 mx-auto text-white">
                <h1 className="text-xl font-bold lg:text-2xl lg:ml-10">{activeSection}</h1>
                <div className="space-x-4 lg:mr-10">
                    <a href="#info" className="hover:underline">Info</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </nav>
        </header>
    );
};
