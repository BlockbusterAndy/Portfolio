/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
    },
    colors:{
      primaryBg: '#0A0A0A',
      cardBg: '#121212',
      primaryText: '#F5F5F5',
      secondaryText: '#A3A3A3',
    }
  },
  plugins: [],
}

