/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#1f2928',
        paper: '#fdfcf9',
        mist: '#f2f4ee',
        sage: '#4c585f',
        moss: '#6f7a70',
        line: 'rgba(31, 41, 40, 0.1)',
      },
      boxShadow: {
        glow: '0 18px 54px rgba(76, 88, 95, 0.1)',
        card: '0 22px 64px rgba(31, 41, 40, 0.08)',
      },
    },
  },
  plugins: [],
};
