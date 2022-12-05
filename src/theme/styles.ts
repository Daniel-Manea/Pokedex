import { Styles } from "@chakra-ui/theme-tools"
import { colors } from "./foundations/colors"
import { typography } from "./foundations/typography"

const styles: Styles = {
  global: {

    html: { fontFamily: typography.fonts.outfit },
    body: { bg: "yellow.500", height: "100px" },
  },
}

export {
  styles,
}
