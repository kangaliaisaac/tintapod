/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md,html}",
    "./layouts/**/*.html"
  ],
  theme: {
    fontFamily: {
      body: ["loos-extrawide", "sans-serif"],
    },
    extend: {
      colors: {
        "tintapod-gray": "#C7C8C8",
        "tintapod-teal": "#43757C",
        "tintapod-black": "#231F20",
        "tintapod-amber": "#FFCA22",
        "tintapod-navy": "#21456C"
      }
    },
  },
  plugins: [],
}
