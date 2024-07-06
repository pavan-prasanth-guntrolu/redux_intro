/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto Mono, monospace",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
