module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030915",
        foreground: "#fafafa",
        card: "#091123",
        "card-foreground": "#fafafa",
        primary: {
          DEFAULT: "#c492ff",
          foreground: "#171717",
        },
        secondary: {
          DEFAULT: "#0a1633",
          foreground: "#fafafa",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#a1a1a1",
        },
        accent: {
          DEFAULT: "#0a1633",
          foreground: "#fafafa",
        },
        border: "#111a2d",
        ring: "#737373",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "22px",
        "4xl": "26px",
      },
      animation: {
        "scroll-up": "scrollUp 20s linear infinite",
        "scroll-down": "scrollDown 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
