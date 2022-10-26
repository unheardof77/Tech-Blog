/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/style/tailwind.css"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),],
}
