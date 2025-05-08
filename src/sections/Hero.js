import { forwardRef } from "react"

const Hero = forwardRef((props, ref) => (
    <section ref={ref} className="relative h-[65vh] flex items-center justify-center  bg-black">
        <div className="absolute inset-0 bg-[url('../public/umdcs.jpg')] bg-cover bg-center opacity-30 z-0"></div>
        
        <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold">
                Welcome! I'm Will Ferrens
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white max-w-3xl">
                An <span className="font-semibold">Undergraduate Student</span> at the
                University of Maryland, College Park aspiring to be a{' '}
                <span className="font-semibold">Software Developer</span>.
            </p>
        </div>
    </section>
));

export default Hero;
