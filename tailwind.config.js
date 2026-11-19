/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#e7b397',
          'primary-light': '#fcede4',
          'primary-dark': '#ba7c59',
          button: '#ecc9b1',
          'button-hover': '#dfb295',
          // High contrast text colors (WCAG 2.2 AAA compliant)
          dark: '#240d02',
          darker: '#160700',
          espresso: '#361502',
          cream: '#fdfbf9',
          nude: '#f8ece5',
          rose: '#faf0ea',
          'rose-light': '#fdf8f5',
          sand: '#ece3db',
          gold: '#b8813a',
          'gold-light': '#fae8cb',
          sale: '#dc2626',
          text: '#1c1512',
          'text-muted': '#524540',
        }
      },
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
        english: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(36, 13, 2, 0.05), 0 2px 8px -2px rgba(36, 13, 2, 0.03)',
        card: '0 10px 30px -5px rgba(36, 13, 2, 0.08)',
        elevated: '0 20px 45px -10px rgba(36, 13, 2, 0.12)',
        glow: '0 0 35px -5px rgba(231, 179, 151, 0.45)',
        gold: '0 8px 25px -4px rgba(184, 129, 58, 0.3)',
      },
      minHeight: {
        touch: '48px',
      },
      minWidth: {
        touch: '48px',
      },
    },
  },
  plugins: [],
}
