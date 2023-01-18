module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      serif: ["Graphik", "serif"],
      sans: ["Libre Franklin", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#1D1714",
        gray: {
          DEFAULT: "#767676",
          light: "#F5F4F4",
          dark: "#696969",
        },
        red: "#863724",
        siena: "#CB6850",
        yellow: {
          DEFAULT: "#E0AA4C",
          light: "#F3EAD8",
        },
      },
      fontSize: {
        xxs: ["12px", "15px"],
        xs: ["14px", "17px"],
        sm: ["16px", "24px"],
        base: ["18px", "26px"],
        lg: ["22px", "32px"],
        xl: ["24px", "29px"],
        "2xl": ["34px", "41px"],
        "3xl": ["36px", "43px"],
        "4xl": ["52px", "63px"],
        "5xl": ["72px", "87px"],
        "6xl": ["100px", "121px"],
      },
      screens: {
        "3xl": "1920px",
      },
      letterSpacing: {
        widest: ".2em",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },
};
