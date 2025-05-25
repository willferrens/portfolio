/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: { /* for custom colors */ },
        },
    },
    plugins: [],
    corePlugins: {
        scrollBehavior: true
    },
    darkMode: 'class',
}

