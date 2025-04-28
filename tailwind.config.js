/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5e9f3',
          100: '#ead3e7',
          200: '#d5a7cf',
          300: '#c07bb7',
          400: '#ab4f9f',
          500: '#862376',
          600: '#6e165b', // Main primary
          700: '#591349',
          800: '#440e38',
          900: '#2f0a26',
          950: '#1a0415',
        },
        secondary: {
          50: '#fcf7f6',
          100: '#f8efed',
          200: '#f1dfdb',
          300: '#e9cfca',
          400: '#e2bfb8',
          500: '#dbaaa1',
          600: '#cba79f', // Main secondary
          700: '#b89287',
          800: '#917268',
          900: '#6a5249',
          950: '#352924',
        },
        success: {
          100: '#dcf5e7',
          500: '#10b981',
          900: '#064e36',
        },
        warning: {
          100: '#fef3c7',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};