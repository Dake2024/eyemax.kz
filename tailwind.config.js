/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                gilroy: ['Gilroy', 'sans-serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
            },
            screens: {
                "mdd": { max: "768px" },
            },
        },
    },
    plugins: [],
}
