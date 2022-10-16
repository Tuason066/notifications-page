/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: 'Plus Jakarta Sans',
      },
      colors: {
        primary: {
          100: 'hsl(1, 90%, 64%)',
          200: 'hsl(219, 85%, 26%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(210, 60%, 98%)',
          300: 'hsl(211, 68%, 94%)',
          350: 'hsl(205, 33%, 90%)',
          400: 'hsl(219, 14%, 63%)',
          500: 'hsl(219, 12%, 42%)',
          600: 'hsl(224, 21%, 14%)',
        },
      },
    },
  },
  plugins: [],
};
