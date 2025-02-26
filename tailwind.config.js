/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: "#FFBE00",
            "primary-light": "#F5CE5B",
            secondary: "#EFEFEF",
            "dark-gray": "#4C4C4C",
            "medium-gray": "#878787",
            "light-gray": "#BDBDBD",
            "soft-gray": "#F5F5F5",
            "neutral-gray": "#8B8B8B",
            "extra-gray": "#909090",
            "soft-white": "#F7F7F7",
            yellow: "#F6AE04",
            "red-light": "#E96F6F",
            "green-medium": "#00a63e",
          },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }