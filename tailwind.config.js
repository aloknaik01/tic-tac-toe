/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPink: "#FF1E9B",
        neonBlue: "#00F6FF",
        neonGreen: "#00FF85",
        neonPurple: "#8A2BE2",
        darkBg: "#121212",
        lightBg: "#F9FAFB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 10px #00F6FF, 0 0 20px #00F6FF",
      },
      boxShadow: {
        glow: "0 0 10px #00F6FF, 0 0 20px #00F6FF",
      },
    },
  },
  plugins: [],
};
