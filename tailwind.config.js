/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#394867",
          200: "#2A3A4D",
          300: "#1B2B33",
        },
        secondary: {
          100: "#F2F2F2",
          200: "#E5E5E5",
          300: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
