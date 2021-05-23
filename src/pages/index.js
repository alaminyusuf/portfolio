import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Cta from "../components/Cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Cta />
  </Layout>
)

export default IndexPage
