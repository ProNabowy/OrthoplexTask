/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '390px',
      },
      colors: {
        primary: "#fe6929",
        danger: "#F86F6E",
        gray: '#94979E'
      },
    },
  },
  plugins: [],
};
