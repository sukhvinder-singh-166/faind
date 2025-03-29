/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#8A2BE2',
      },
      backgroundImage: {
        'purple-pink-gradient':
          'linear-gradient(95.44deg, #4040F8 0%, #E912DC 95.87%)',
      },
      fontSize: {
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
      },
    },
  },
  plugins: [],
}
