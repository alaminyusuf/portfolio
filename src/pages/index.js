import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Cta from "../components/Cta"

const Links = styled.div`
  margin-bottom: 2em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Links>
      <Cta link="my-projects" text="my projects" />
      <Cta link="contact" text="contact me" />
    </Links>
  </Layout>
)

export default IndexPage
