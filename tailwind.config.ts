import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                spotlight: {
                    "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
                    "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
                },
            },
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
            },
        },
    },
    plugins: [],
}
export default config
