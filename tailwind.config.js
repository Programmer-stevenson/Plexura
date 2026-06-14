/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Instrument Sans"', 'sans-serif'],
        sans: ['"Instrument Sans"', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        'plexura': {
          'white': '#FFFFFF',
          'ink': '#142433',
          'turquoise': '#2DD4BF',
          'turquoise-deep': '#14B8A6',
          'turquoise-dark': '#0D9488',
          'mint': '#5EEAD4',
          'orange': '#F97316',
          'orange-deep': '#EA580C',
          'orange-light': '#FB923C',
          'charcoal': '#0A0E12',
          'charcoal-light': '#1B222A',
          'gray': '#51606E',
        }
      }
    },
  },
}
