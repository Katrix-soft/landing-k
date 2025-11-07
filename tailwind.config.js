/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'black-pearl': '#04141c',
        'pearl-bush': '#e6dfd0',
        'blue-chill': '#0f9195',
        'surfie-green': '#0b7880',
        'friar-gray': '#7c7c7a',
      },
    },
  },
  plugins: [],
};
