import "./fonts"

export const textSpecs = {
  h1: { fontSize: "5rem", marginBottom: ".5rem" }, // ~ 80px
  h2: { fontSize: "2.375rem", marginBottom: ".5rem" }, // ~ 38px
  h3: { fontSize: "1.5rem", marginBottom: ".5rem" }, // ~ 24px
  h4: { fontSize: "1.25rem", marginBottom: ".5rem" }, // ~ 20px
  base: { fontSize: "1rem", marginBottom: ".5rem" }, // ~ 16px
  h5: { fontSize: "0.75rem", marginBottom: ".5rem" }, // ~ 12px
}

export const typography = {
  fonts: { outfit: "Outfit, sans-serif" },
  fontSizes: {
    h1: textSpecs.h1.fontSize,
    h2: textSpecs.h2.fontSize,
    h3: textSpecs.h3.fontSize,
    h4: textSpecs.h4.fontSize,
    base: textSpecs.base.fontSize,
    h5: textSpecs.h5.fontSize,
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.5,
    normal: 2,
    relaxed: 3,
    loose: 4,
  },
}
