/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'black-pearl': '#0A0F1C',
        'pearl-bush': '#E5E7EB',
        'blue-chill': '#22D3EE',
        'surfie-green': '#67E8F9',
        'friar-gray': '#94A3B8',
        'bg-card': '#121826',
        'bg-soft': '#0F172A',
      },
    },
  },
  plugins: [],
}

