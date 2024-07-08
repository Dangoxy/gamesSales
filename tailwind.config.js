/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : ["Poppins", "sans-serif"],
        "merri" : ["Merriweather", "serif"],
        "notoserif": ["Noto Serif", "serif"],        
        "notoserifdisplay": ["Noto Serif Display", "serif"],  
        "notosans" : ["Noto Sans", "sans-serif"],
        "notosansdisplay" : ["Noto Sans Display", "sans-serif"],

      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '100%',
        '150%': '150%',
        '175%': '175%',
        '200%': '200%',
        '16': '4rem',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 0px 6px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      dropShadow:{
        DEFAULT:'2px 4px 2px 2px rgb(255 0 0)',
      },
      boxShadow:{
        different:'0px 0px 6px 1px rgb(128 128 128)'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
          
        },
        appear: {
          '0%': { display: "none", opacity:"0%" },
          "33%":{display:"none", opacity: "0%", maxHeight:"0px"},
          '100%': {display:"flex", opacity: "100%", maxHeight:"400px"},
          
        },

        disappear: {
          '0%': { display: "none", opacity:"0%" },
          "80%":{display:"none", opacity: "0%"},
          '100%': {display:"none", opacity: "0%"},
          
        },
        appear2: {
          '0%': { display: "none", opacity:"0%" },
          "33%":{display:"none", opacity: "0%"},
          '100%': {display:"flex", opacity: "100%"},
          
        },

        disappear2: {
          '0%': { display: "none", opacity:"0%" },
          "80%":{display:"none", opacity: "0%"},
          '100%': {display:"none", opacity: "0%"},
          
        },
        gap: {
          '0%': { gap:"0px" },
          "33%":{gap:"0px"},
          '100%': {gap:"32px"},
        },
        customBounce:{
          '0%': { transform: 'translateY(0px)' },
          '4%': { transform: 'translateY(-10px)' },
          '8%': { transform: 'translateY(0px)' },
          '12%': { transform: 'translateY(-5px)' },
          '16%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        customBounceOp:{
          '0%': { transform: 'translateY(0px)' },
          '4%': { transform: 'translateY(10px)' },
          '8%': { transform: 'translateY(0px)' },
          '12%': { transform: 'translateY(10px)' },
          '16%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        popupAppear:{
          "0%" : {maxWidth: "95%",maxHeight:"0px", padding:"0px 0px" },
          "100%" : {maxWidth: "95%",maxHeight:"400px",padding:"32px 32px"}
        },
        disappear3: {
          '0%': { display: "flex", opacity:"0%" },
          "80%":{display:"flex", opacity: "0%"},
          '100%': {display:"none", opacity: "0%"},
          
        },
        shimmer:{
          '0%': { background:`linear-gradient(45deg,
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75)
                                    )`,backgroundSize: "400% 400%"  },

          '50%': { background:`linear-gradient(45deg,
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75)
                                    )`,backgroundSize: "400% 400%",backgroundPosition:"100% 100%"  },

          '100%': { background:`linear-gradient(45deg,
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75),
                                    rgba(196, 196, 196, 0.5),
                                    rgba(128, 128, 128, 0.75)
                                    )`,backgroundSize: "400% 400%"  },
          
        }
        

      },
      screens: {
        'phone': '500px',
        'sphone': '360px',
      },
      animation: {
        // You can then reference these keyframes by name in the 
        // animation section of your theme configuration
        spin: 'spin 10s linear infinite',
        spinLoading: 'spin 1s ease-in-out infinite',
        // animation shorthand CSS property i.e
        // animation-name | animation-duration | animation-timing-function 
        // animation-iteration-count
        appear: "appear 1.75s ease-in-out",
        gap: "gap 1.75s ease-in-out",
        disappear: "disappear 0.01s linear",

        appear2: "appear2 0.75s ease-in-out",
        disappear2: "disappear2 0.25s linear",

        customBounce: "customBounce 5s ease 5",
        customBounceOp: "customBounceOp 5s ease infinite",
        popupAppear: "popupAppear 1s ease",
        disappear3: "disappear3 0.25s linear",
        shimmer:"shimmer 10s ease infinite"
   }
    },
  },
  plugins: [
    
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

