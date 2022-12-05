const themeColors = {
  dark: "#22272C",
  cold: "#2A4158",
  "blue-gray": "#597387",
  gray: "#8C9EA3",
  sand: "#958A56",
  white: "#ffffff",
}

export const colors = {
  // Theme Colors
  ...themeColors,

  gradients: {
    main: {
      fallback: "#7d0ecf",
      gradient: "linear-gradient(45deg, #7d0ecf 15%, #09aeff 80%)",
    },
  },
}
