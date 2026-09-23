/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Palette relevée sur le logo : brun tabac du fond, brun foncé de l'ombre portée
        cream: '#F6EFE6',
        sand: '#EADBC8',
        tan: '#A87D55',
        // Brun plus soutenu pour les aplats avec texte blanc (contraste AA)
        clay: '#8A6240',
        bark: '#5A3E2B',
        ink: '#2E2019',
        muted: '#7D6755',
      },
      backgroundImage: {
        // Frise "niho mano" (dents de requin) : triangles alternés, motif polynésien classique
        'niho':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10'%3E%3Cpath d='M0 0h16L8 10z' fill='%23A87D55'/%3E%3Cpath d='M4 0h8L8 5z' fill='%23F6EFE6'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card': '0 30px 90px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(168,125,85,0.25)',
        'cta': '0 14px 30px -12px rgba(138,98,64,0.75)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease both',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
