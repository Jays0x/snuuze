/* eslint-disable prettier/prettier */
// tailwind.config.js

module.exports = {
  content: [],
  // eslint-disable-next-line no-dupe-keys
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      colors: {
      'primary': '#B48DC6',
      'secondary': '#090909',
      'overlay': '#181818',
      'comp-color': "#121212",
      'white': '#fff'
      },
      extend: {},
    },
    plugins: [],
  }