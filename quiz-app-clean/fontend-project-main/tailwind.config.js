export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",   // green
        secondary: "#0EA5E9", // blue
        accent: "#F97316",    // orange
      },

      keyframes: {
        iconJump: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-18px)" },
          "40%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0)" },
        },

        iconPulse: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "20%": { transform: "scale(1.06) rotate(-6deg)" },
          "40%": { transform: "scale(1) rotate(0deg)" },
          "60%": { transform: "scale(1.04) rotate(6deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },

      animation: {
        iconJump: "iconJump 1.6s cubic-bezier(.2,.9,.2,1) infinite",
        iconPulse: "iconPulse 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

