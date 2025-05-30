export default function Navbar({ activeSection, expanded, onNavClick, refs }) {    
    return (
        <header className={`fixed top-0 left-0 w-screen backdrop-blur z-10 transition-all duration-300 ${ expanded ? 'bg-gray-900 py-4' : 'bg-transparent py-2' }`}>
            <nav className="flex items-center justify-between px-4 mx-auto text-white">
                <h1 className="text-xl font-bold lg:text-2xl lg:ml-10">{activeSection}</h1>
                <div className="space-x-4 lg:mr-10">
                    <button onClick={() => onNavClick(refs.infoRef)} className="hover:underline">Info</button>
                    <button onClick={() => onNavClick(refs.projRef)} className="hover:underline">Projects</button>
                    <button onClick={() => onNavClick(refs.infoRef)} className="hover:underline">Contact</button>
                </div>
            </nav>
        </header>
    );
};
