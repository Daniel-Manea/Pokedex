import type { SystemStyleObject } from "@chakra-ui/theme-tools"

import Banner from "@assets/icons/Banner.jpg"

export const Container: SystemStyleObject = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    navbar: {
      maxW: "container.full",
      bg: "yellow.500",
      display: "flex",
      flexDirection: { sm: "column" },
      alignItems: {
        md: "center",
        sm: "flex-start",
      },
      justifyContent: { md: "space-evenly" },
    },
    navlink: {
      px: 4,
      py: 1,
      fontSize: { sm: "h4", md: "h2" },
      fontWeight: "bold",
      fontFamily: "outfit",
      textAlign: "left",
      color: "white",
      _hover: {
        textDecoration: "none",
        color: "red.500",
      },
    },
    home_header_main: {
      backgroundImage: Banner.src,
      backgroundSize: "cover",
      backgroundPosition: "10% 30%",
      backgroundRepeat: "no-repeat",
      zIndex: "-1",
      padding: 0,
      maxW: "100%",
      h: "350px",
    },
    header_opaque_overlay: {
      background: "linear-gradient(0deg, rgba(28, 37, 65, .7), rgba(28, 37, 65, .8))",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      maxW: "inherit",
      h: "inherit",
    },
    footer: {
      bg: "yellow.500", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem", justifyContent: "center",
    },
    footerlink: {
      px: 4,
      py: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      fontSize: { md: "h4", sm: "base" },
      fontWeight: "bold",
      fontFamily: "outfit",
      textAlign: "center",
      width: { md: "6rem", sm: "5rem" },
      _hover: {
        textDecoration: "none",
        color: "red.500",
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
}
