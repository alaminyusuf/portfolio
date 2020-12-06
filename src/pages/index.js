import React from "react"
import Navigation from "../components/Nav"
import Image from "../images/keyboard.jpg"

import "../components/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <Navigation />
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
