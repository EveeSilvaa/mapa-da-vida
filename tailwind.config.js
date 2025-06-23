/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#F5F5F5', // Fundo claro
          secondary: '#FFFFFF', // Cards claros
          text: '#333333', // Texto escuro
          accent: '#8B5CF6' // Roxo claro
        },
        dark: {
          primary: '#1E1E2E', // Fundo escuro
          secondary: '#2D2D3A', // Cards escuros
          text: '#E2E8F0', // Texto claro
          accent: '#A78BFA' // Roxo mais claro
        }
      }
    },
  },
  plugins: [
    
  ],
}
