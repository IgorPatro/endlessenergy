import React from "react"

import Layout from "layout/Layout"
import Landing from "components/sections/Landing"
import About from "components/sections/About"
import Projects from "components/sections/Projects"
import Features from "components/sections/Features"
import Blog from "components/sections/Blog"
import Calculator from "components/sections/Calculator"
import Contact from "components/sections/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Features />
      <Blog />
      <Calculator />
      <Contact />
    </Layout>
  )
}

export default IndexPage
