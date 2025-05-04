/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Assuming school colors based on common educational themes
        // Adjust these based on actual school branding
        primary: {
          DEFAULT: "#1a4b8e", // Deep blue - represents trust, wisdom
          light: "#2a6cb8",
          dark: "#0d2a54",
        },
        secondary: {
          DEFAULT: "#d4a137", // Gold - represents achievement, excellence
          light: "#e3ba62",
          dark: "#b88521",
        },
        accent: {
          DEFAULT: "#2e9c5f", // Green - represents growth, learning
          light: "#42b478",
          dark: "#1d7a45",
        },
        neutral: {
          lightest: "#ffffff",
          light: "#f5f5f5",
          DEFAULT: "#e0e0e0",
          dark: "#9e9e9e",
          darkest: "#212121",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
        display: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        medium:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        hard: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/src/assets/images/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
