/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1488C9',
          light: '#3BA0DB',
          dark: '#0D6FA8',
        },
        accent: {
          DEFAULT: '#F9C832',
          light: '#FBDB72',
          dark: '#E0AE1A',
        },
        softblue: '#EEF7FD',
        coral: '#FF6B6B',
        mint: '#4ECDC4',
        peach: '#FFB347',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        display: ['Baloo 2', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
