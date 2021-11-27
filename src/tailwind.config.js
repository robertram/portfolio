module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        background: {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#0C1418",
        },
        background2: {
          light: "#F7F7F7",
          DEFAULT: "#F7F7F7",
          dark: "#111F25",
        },
        link: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        linkHover: "#FE5F55",
        orange: "#FE5F55",
      },
      fontFamily: {
        body: ["Slabo 13px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
