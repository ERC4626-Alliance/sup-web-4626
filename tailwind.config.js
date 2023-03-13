module.exports = {
  content: [
    "./src/{**/*,*}.{js,jsx,ts,tsx}",
    "./styles/**/*.scss"
  ],
  darkMode: "class",
  theme: {
    typography: (theme) => ({}),
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};