/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                "mdd": { max: "768px" },
            },
        },
    },
    plugins: [],
}
