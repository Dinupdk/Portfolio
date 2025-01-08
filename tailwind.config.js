/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "customShadow": "0px 4px 12px rgba(0, 0, 0, 0.1)",
        "projectShadow":"0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      },
    },
  },
  plugins: [],
};
