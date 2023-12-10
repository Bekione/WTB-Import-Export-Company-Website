/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary': '#2C3333',
        'clr-secondary': '#A5C9CA', 
        'clr-header': '#2c3333f8',       
      },
      height: {
        'main-header': '105px',
        'top-header': '52px',
        sidebar: '350px',
        footer: 'calc(100vh - var(--main-header))',
      },
      boxShadow: {
        'header': '0 3px 5px rgba(57, 63, 72, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      zIndex: {
        top: 9999999
      }
    },
  },
  plugins: [],
}
