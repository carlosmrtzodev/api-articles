module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1152px",
    },
    colors: {
      red: "#e41e3f",
      text: "#B0B3B8",
      green: "#00A400",
      container: "#242526",
      component: "#3a3b3c",
      background: "#18191a",
      opacity: "rgba(255, 255, 255, 0.2)",
    },
    extend: {
      minHeight: {
        height: "calc(100vh - 8rem)",
      },
    },
  },
  plugins: [],
};
