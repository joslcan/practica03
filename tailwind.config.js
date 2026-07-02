/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#CCC7B9",
        mint: "#EAF9D9",
        sand: "#E2D4BA",
        clay: "#AF7A6D",
        wine: "#653239",
      },
    },
  },
  plugins: [],
};
