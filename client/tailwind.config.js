/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3b4e63",
        "custom-gray": "#575757",
        "custom-blue-light": "#475d74",
        "dark-gray": "#2d2d2d",
        "custom-orange": "#f4a261",
        "custom-green": "#2a9d8f",
        "custom-red": "#e76f51",
      },
    },
  },
  plugins: [],
};
