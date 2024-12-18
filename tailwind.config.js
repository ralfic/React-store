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
        'banner-fon': "url('/bg-banner.jpg')",
        'banner-fon-join': "url('/image-banner-headphones.png')",
        'banner-fon-shope': "url('/bg-white.jpg')",
      },
      maxWidth: {
        wrapper: '1120px',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
