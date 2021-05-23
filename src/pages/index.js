import React from "react"
import styled from "styled-components"

import { GlobalStyle } from "../utils/createGlobalStyle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Nav from "../components/Navbar"
import Cta from "../components/Cta"

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />
    <Container>
      <Nav />
      <Hero />
      <Cta />
    </Container>
  </Layout>
)

export default IndexPage
