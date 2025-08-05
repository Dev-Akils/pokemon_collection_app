/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
       fontSize: {
        // App Title (“Pokemon Collection App”)
        'apptitle': '1.5rem',         // 24px (text-2xl)
        // Subtitle (“Discover, collect, and organize…”)
        'subtitle': '1rem',            // 16px (text-base)
        // Buttons (“Discover Pokemon”, “My Collection”)
        'button': '0.875rem',          // 14px (text-sm)
        // Card Pokémon Names (“Charizard”…)
        'card-name': '1.125rem',       // 18px (text-lg)
        // Badge Text (“FIRE”, “WATER”…)
        'badge': '0.75rem',            // 12px (text-xs)
        // Stats Labels (“HP”, “Attack”)
        'stats-label': '0.75rem',      // 12px (text-xs)
        // Stats Numbers
        'stats-number': '0.875rem',    // 14px (text-sm)
        // Loading Text
        'loading': '0.875rem',         // 14px (text-sm)
      },
     
      colors: {
         // color for our app
        Button_Purple_Purple: "#6D28D9",
        Button_Blue_Blue: "#6C85E5",
        Fire_Badge_Red: "#EF4444",
        Water_Badge_Blue: "#3B82F6",
        Grass_Badge_Green: "#10B981",
        Electric_Badge_Yellow: "#FACC15",
        Psychic_Badge_Pink_Purple: "#EC4899",

        Add_Icon_Green: "#10B981",
        Remove_Icon_Red: "#EF4444",



      },
     
      backgroundImage: {
        'dragon-badge': 'linear-gradient(to right, #10B981, #8B5CF6)',


        'badge-background': 'linear-gradient(to right, #7C3AED, #6D28D9)',

      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

    },
keyframes: {
        customspin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        spin: 'customspin 0.6s linear infinite',
      },

  },
  plugins: [],
}

