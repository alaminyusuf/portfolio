module.exports = {
  purge: [],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      backgroundImage: theme => ({
        "hero-pattern": "url('/images/gatsby-icon.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
}
