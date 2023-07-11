/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5a5959",
        yellow: "#FFEAAE",
        dyellow: "#FCCA3F",
        orange: "#F6820C",
      },
    },
  },
  plugins: [],
};
