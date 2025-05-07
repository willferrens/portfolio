export default function Title() {
    return (
        <section id="hero" class="relative h-screen flex items-center justify-center bg-black text-white">
            <div class="absolute inset-0 bg-[url('../public/umdcs.jpg')] bg-cover bg-center opacity-50 z-0"></div>

            <div class="relative z-10">
                <h1 class="text-5xl font-bold">Welcome to My Portfolio</h1>
                <div class="mt-10 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />     
                    </svg>
                </div>
            </div>
        </section>
    );
}
