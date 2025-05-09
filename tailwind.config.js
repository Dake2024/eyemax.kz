/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            'ms': {'max': '374px'},       // Extra small devices
            'ml': {'min': '375px'},       // Mobile and up
            'mdd': {'max': '767px'},      // Mobile-only (0-767px)
        },
        extend: {}, // No need for `screens` inside `extend` in v4
    },
    plugins: [],
}