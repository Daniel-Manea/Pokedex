import type { SystemStyleObject } from "@chakra-ui/theme-tools"

export const Text: SystemStyleObject = {
  // style object for base or default style
  baseStyle: {
    fontSize: "15px", marginBottom: ".5rem", fontWeight: "normal", color: "white", fontFamily: "outfit",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: { fontSize: "h1" },
    h2: { fontSize: "h2" },
    h3: { fontSize: "h3" },
    h4: { fontSize: "h4" },
    h5: { fontSize: "h5" },
    headerTitle: {
      fontSize: "h2", fontWeight: "black", color: "white", paddingLeft: "4rem",
    },
    headerSubtitle: {
      fontSize: "h4", fontWeight: "extrabold", color: "white", paddingLeft: "4rem",
    },
    contentText: {
      fontSize: "base", fontWeight: "extralight", color: "white", lineHeight: "relaxed", textAlign: "left", paddingRight: { md: "2rem", sm: "0rem" }, paddingBottom: { md: "3rem", sm: "2rem" },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: { },
}
