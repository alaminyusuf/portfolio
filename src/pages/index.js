import React from "react"
import Navigation from "../components/Nav"
import Image from "../images/keyboard.jpg"

import "../components/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Cards from "../components/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="wrapper">
        <Navigation />
        <Hero />
      </div>
    </div>
    <h1 className="text-2xl md:text-3xl py-5 text-center">My Expertise</h1>
    <Cards />
  </Layout>
)

export default IndexPage
