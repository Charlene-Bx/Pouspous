const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./pages/index.vue", "./slices/**/*.vue"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#171717",
      white: "#fafaf9",
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.lime,
      blue: colors.cyan,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  // corePlugins: [
  //   // Safe list what we use - complete list here: https://tailwindcss.com/docs/configuration#core-plugins
  //   "display",
  //   "overflow",
  //   "margin",
  //   "padding",
  //   "backgroundColor",
  //   "height",
  //   "width",
  //   "gap",
  //   "gridTemplateColumns",
  //   "gridTemplateRows",
  //   "gridRow",
  //   "gridRowEnd",
  //   "gridRowStart",
  //   "gridcolumn",
  //   "gridcolumnEnd",
  //   "gridcolumnStart",
  //   "flex",
  //   "justify-content",
  //   "justifyItems",
  //   "justifySelf",
  //   "alignContent",
  //   "alignItems",
  //   "objectFit",
  //   "objectPosition",
  // ],
}
