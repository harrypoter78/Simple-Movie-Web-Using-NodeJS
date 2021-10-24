module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      borderColor: ["hover"],
      textColor: ["hover"],
      placeItems: ["hover", "focus"],
    },
  },
  plugins: [],
};
