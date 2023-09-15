/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: { max: "500px" },
        tab: { max: "950px" },
        medium: { max: "768px" },
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        playFair: '"Playfair Display", serif',
      },
      colors: {
        primary: "#79ADDC",
        blurPrimary: "rgba(121, 174, 220, 0.10);",
        lightPrimary: "#ebf3fa",
        blur: "rgba(9 ,9, 9 , 0.71)",
        secondary: "#40444d",
      },
      backgroundImage: {
        "home-hero": "url('/assets/images/hero.jpeg')",
        "about-hero": "url('/assets/images/hero-about.png')",
        "faqs-hero": "url('/assets/images/hero-faqs.jpg')",
      },
    },
  },
  plugins: [],
};
