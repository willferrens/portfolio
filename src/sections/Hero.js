import { forwardRef } from "react"

const Hero = forwardRef((props, ref) => (
    <section id="hero" ref={ref} class="relative h-[65vh] flex items-center justify-center bg-black text-white">
        <div class="absolute inset-0 bg-[url('../public/umdcs.jpg')] bg-cover bg-center opacity-30 z-0"></div>
        
        <div class="relative z-10 text-center">
            <p class="text-5xl leading-[1.15]">
                Welcome! I'm Will Ferrens and I am currently an <br /><span class="font-medium">Undergraduate Student </span>
                at the University of Maryland<br /> at College Park aspiring to be a <span class="font-medium">Software Developer.</span>
            </p>
        </div>
    </section>
));

export default Hero;
