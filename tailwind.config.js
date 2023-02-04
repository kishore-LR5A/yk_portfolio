/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        dark_navy: "#020c1b",
        light_navy: "#112240",
        lightest_navy: "#233554",
        navy_shadow: "rgba(2, 12, 27, 0.7)",
        dark_slate: "#495670",
        slate: "#8892b0",
        light_slate: "#a8b2d1",
        lightest_slate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        green_tint: "rgba(100, 255, 218, 0.1)",
        pink: "#f57dff",
        blue: "#57cbff",
      },
      fontFamily: {
        sf_mono: ["SfMono", "sans"],
        calibri: ["Calibri", "sans-serif"],
        calibri_bold: ["CalibriBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
