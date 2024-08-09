/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding: "15px",
    },
  
    
    extend: {
      colors:{
        primary: "#1c1c22",
        accent:{
          DEAULT: "#00ff99",
          hover: "#00e187"
        },
      },
      borderColor:{
        bcl: "#00ff99"
      }
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

