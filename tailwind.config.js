/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1a7d4f',
          dark: '#125c39',
          light: '#e5f5ed',
        },
        'brand-yellow': {
          DEFAULT: '#FFC93C',
          dark: '#F0AD00',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      maxWidth: {
        app: '480px',
      },
    },
  },
  plugins: [],
}
