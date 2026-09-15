/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#F5F0FF',100:'#E9E0FF',500:'#7C3AED',600:'#6D28D9',700:'#5B21B6' },
        gold: { DEFAULT:'#C9A227', light:'#E7CE6B', dark:'#9A7B14' },
        cream: '#F8F7F5',
        ink: '#1C1C22' 
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
