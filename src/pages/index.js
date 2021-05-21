import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
