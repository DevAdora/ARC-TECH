/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Adjust paths according to your project structure
    './styles/*.css',
  
  ],
  theme: {
    extend: {},
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
    }
  },
  variants: [],
  plugins: [],
};
