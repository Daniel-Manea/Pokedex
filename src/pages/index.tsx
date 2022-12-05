import {
  Navbar,
  Header,
  Homepage,
  Footer
} from "@components/index"

import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}

export default Home
