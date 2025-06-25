/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ All source files
  darkMode: "class", // ✅ Enables class-based dark mode support
  theme: {
    extend: {
      // (Optional) Customize colors, spacing, font sizes, etc.
    },
  },
  plugins: [],
};
