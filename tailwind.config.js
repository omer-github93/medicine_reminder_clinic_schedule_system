/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c4',
          300: '#ffa49c',
          400: '#ff7266',
          500: '#ff5c4d',
          600: '#ea3e30',
          700: '#c52e22',
        },
        navy: {
          850: '#151e2b',
          900: '#0f1722',
          950: '#0a0f16',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf5ee',
          200: '#f5ebe0',
          300: '#f0e0ce',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Noto Sans Arabic', 'Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'card': '0 12px 35px -8px rgba(0, 0, 0, 0.06)',
        'coral': '0 10px 25px -5px rgba(255, 92, 77, 0.35)',
      }
    },
  },
  plugins: [],
}

