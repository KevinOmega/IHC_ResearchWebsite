/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Roboto"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        body: ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif']
      },
      colors: {
        primary: {
          blue: '#14376c',
          red: '#fe0016',
        },
        blue: {
          900: '#0d2446',
          700: '#14376c',
          500: '#34598c',
          300: '#dbe2eeff',
          100: '#f2f4f8ff',
        },
        red: {
          900: '#a80010',
          700: '#fe0016',
          500: '#ff475a',
          300: '#ff8a92',
          100: '#ffdde0',
        },
        gray: {
          950: '#111111',
          900: '#2f2f2f',
          800: '#2f2f2f',
          600: '#6b6b6b',
          300: '#d0d0d0',
          100: '#f5f5f5',
        },
        success: {
          DEFAULT: '#2e7d32',
          light: '#d4edda',
        },
        warning: {
          DEFAULT: '#e69500',
          light: '#fff3cd',
        },
        info: {
          DEFAULT: '#0056b3',
          light: '#cfe2ff',
        },
      },
    },
  },
  plugins: [],
};
