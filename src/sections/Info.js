import { forwardRef } from "react";

const Info = forwardRef((props, ref) => (
    <section id="info" ref={ref} className="relative h-[75vh] bg-gray-300">
        <img src="/pfp.jpg" alt="WF Profile" className="w-48 rounded-full" />
        <h2>About Me</h2>
        <p></p>
    </section>
));

export default Info;
