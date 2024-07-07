/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideOut: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
    animation: {
      slideIn: "slideIn 0.5s ease-in-out",
      slideOut: "slideOut 0.5s ease-in-out",
    },
  },
  plugins: [require("daisyui")],
};
