import { Text, Container } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function Header() {
  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      translateY: [20, 0],
    })
  }, [controls])
  return (
    <Container variant={"home_header_main"} >
      <Container variant={"header_opaque_overlay"}>
        <motion.div
          animate={controls}
          initial={{ opacity: 0 }}
          transition={{ opacity: { delay: 0.5, duration: 3 } }}>
          <Text variant={"headerTitle"}>
            WELCOME TO POKEDEX.GG
          </Text>
          <Text variant={"headerSubtitle"}>
            The best place to research and find your favorite pokémon
          </Text>
        </motion.div>
      </Container>
    </Container>
  )
}
