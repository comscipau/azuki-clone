/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        beanzbg: "url('/src/assets/beanzbgwhite.png')",
        sec1img: "url('/src/assets/1.png')",
        sec2img: "url('/src/assets/2.png')",
        sec3img: "url('/src/assets/3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
