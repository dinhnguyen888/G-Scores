/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Rubik", "system-ui", "sans-serif"],
            },
            colors: {
                light: {
                    page: "#f8fafc",
                    card: "#ffffff",
                    text: "#1e293b",
                    border: "#e2e8f0",
                },
                dark: {
                    page: "#0f172a",
                    card: "#1e293b",
                    text: "#f8fafc",
                    border: "#334155",
                },
                primary: {
                    50: "#eff6ff",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                },
                success: {
                    50: "#f0fdf4",
                    500: "#22c55e",
                    600: "#16a34a",
                },
                warning: {
                    50: "#fefce8",
                    500: "#eab308",
                    600: "#ca8a04",
                },
                error: {
                    50: "#fef2f2",
                    500: "#ef4444",
                    600: "#dc2626",
                },
            },
        },
    },
    plugins: [],
};
