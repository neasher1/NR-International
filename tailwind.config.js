/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        nrInternational: {
          primary: '#415161',
          secondary: '#9e0718',
          accent: "#081229",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}