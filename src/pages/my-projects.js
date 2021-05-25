import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`

const Header = styled.h2`
  font-family: "Reggae One", cursive;
  font-size: 3rem;
  font-weight: 400;
`

const myProjects = () => {
  return (
    <Layout>
      <SEO title="My Projects" />
      <Wrapper>
        <Header>My Projects</Header>
      </Wrapper>
    </Layout>
  )
}

export default myProjects
