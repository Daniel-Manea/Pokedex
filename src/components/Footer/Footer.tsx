import { ReactNode } from "react"
import { Flex, HStack, Text, Container, Image, Divider } from "@chakra-ui/react"
import Link from "next/link"
import Logo from "@assets/icons/Logo.png"
import { useRouter } from "next/router"
import { ArrowUpIcon } from "@chakra-ui/icons"
const Links = [

  {
    name: "Home",
    href: "/",
  },
]

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <Link
    href={href} >
    {children}
  </Link >

)

export const Footer = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const isActive = (href: string) => {
    return (
      currentRoute === href
    )
  }
  return (
    <>
      <Container variant={"footer"} h={"auto"}>
        <Flex>
          <HStack flexDirection={"column"}>
                        <Image src={Logo.src} w={"20%"}/>
            <HStack
              as={"nav"}
              spacing={{ md: 8, sm: 2 }}
              display={"flex"}
              padding={{ md: "2rem", sm: "0" }}>
              {Links.map((link, i) => (
                <Container key={i} color={isActive(link.href) ? "red.600" : "white"} variant={"footerlink"} w={"50px"} h={"50px"}>
                  <NavLink href={link.href} ><ArrowUpIcon w={"50px"} h={"50px"} _hover={{ width: "55px", height: "55px" }}/></NavLink>
                </Container>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Container>
      <Divider color={"white"} pt="2rem" />
        <Container display={"flex"} justifyContent={"space-evenly"} pt={"2rem"} pb={"2rem"}>
          <Text fontWeight={"black"} fontFamily={"outfit"} color={"white"}>POKEDEX.GG</Text>
          <Text fontWeight={"black"} color={"white"} fontFamily="outfit">POKÉMON</Text>
        </Container>
      </>
  )
}
