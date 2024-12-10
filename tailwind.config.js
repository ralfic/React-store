/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'banner-fon': "url('./public/bg-banner.jpg')",
      },
      maxWidth: {
        wrapper: '1120px',
      },
    },
  },
  plugins: [],
};
