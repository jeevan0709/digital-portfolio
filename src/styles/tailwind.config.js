/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          crimson: "#E63946",
          cream: "#FFF8F0",
          charcoal: "#1D1D1D",
          peach: "#F4A261",
        },
      },
    },
    plugins: [],
  };
  