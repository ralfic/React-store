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
    },
  },
  plugins: [],
};
