import { ReactNode } from "react"
import { Box, Flex, HStack, IconButton, useDisclosure, Container, Image, Input } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import Logo from "@assets/icons/Logo.png"

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

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const currentRoute = router.pathname
  const isActive = (href: string) => {
    return (
      currentRoute === href
    )
  }

  return (
    <>
      <Container variant={"navbar"} h={isOpen ? "auto" : "155px"}>
        <Flex>
          <IconButton
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            color={"white"}
            h={120}
            icon={isOpen ? <CloseIcon marginTop={"40px"} marginLeft={"5rem"} width={"30px"} /> : <HamburgerIcon marginTop={"40px"} marginLeft={"5rem"} width={"30px"} height={"30px"} />}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack>
            <Box w={"154px"} height="100%" position={"absolute"} left={{ md: "122px", sm: "50%" }} marginLeft={{ sm: "-50px !important", md: "0" }} display={"block"} top={"25%"}><Image src={Logo.src} /></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              padding={"5rem"}
            >
              {Links.map((link, i) => (
                <Container key={i} color={isActive(link.href) ? "red.500" : "white"} variant={{ md: "navlink" }}>
                  <NavLink href={link.href}>{link.name}</NavLink>
                </Container>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen
          ? (
            <Container as={"nav"} pb={10}>
              {Links.map((link, i) => (
                <Container variant={"navlink"} key={i} color={isActive(link.href) ? "red.500" : "white"}>
                  <NavLink href={link.href} key={i}>{link.name}</NavLink>
                </Container>
              ))}
            </Container>)
          : null}
      </Container >
    </>
  )
}
