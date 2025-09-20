/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // if you're using Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if you still have Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fed700",
      },
    },
  },
  plugins: [],
};
