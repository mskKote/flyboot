const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "600px",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        montserrat: ["var(--font-montserrat)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
