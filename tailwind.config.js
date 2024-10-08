/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false,
  content: [
    './*.html', 
    './styles/*.css',
    './script/*.js',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-color': 'var(--gray-color)',
        'warm-gray-color': 'var(--warm-gray-color)',
        'warm-green-color': 'var(--warm-green-color)',
        'pinkish-gray-color': 'var(--pinkish-gray-color)',
        'pinkish-white-color': 'var(--pinkish-white-color)',
      },
      colors: {
        'gray-color': 'var(--gray-color)',
        'warm-gray-color': 'var(--warm-gray-color)',
        'warm-green-color': 'var(--warm-green-color)',
        'pinkish-gray-color': 'var(--pinkish-gray-color)',
        'pinkish-white-color': 'var(--pinkish-white-color)',
      },
    },
  },
  variants: [],
  plugins: [],
};
