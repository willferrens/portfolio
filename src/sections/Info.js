import { forwardRef } from "react";

const Info = forwardRef((props, ref) => (
    <section id="info" ref={ref} class="relative h-[65vh] bg-gray-300">
        Info
    </section>
));

export default Info;
