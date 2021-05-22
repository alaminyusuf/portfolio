import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Nav from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Nav />
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
