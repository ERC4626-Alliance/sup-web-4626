/* eslint-disable prettier/prettier */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                worksans: ["Work Sans", "sans"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};