// Page Sections
import Title from "./sections/Title";
import Info from "./sections/Info";
import Projects from "./sections/Projects";
// Page Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
    return (
        <div class="relative">
            <Sidebar />
                <Title />
                <Info />
                <Projects />
            <Footer />
        </div>
    );
}

export default App;
