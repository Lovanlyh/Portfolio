/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#1d4ed8',
          light: '#2563eb',
          dark: '#1e40af',
        },
        'card-background': 'var(--card-background)',
        'hover': 'var(--hover-color)',
        'navbar': 'var(--navbar-bg)',
      },
      boxShadow: {
        'lg': '0 10px 30px -3px rgba(0, 0, 0, 0.2)',
        'xl': '0 15px 35px -3px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}; 