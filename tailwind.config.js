/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': 'Playfair Display',
      'poppins': 'poppins'
    },
    extend: {
      backgroundImage: {
        'bgservices': "url('assets/background.jpg')",
      }
    },
  },
  plugins: [],
}
