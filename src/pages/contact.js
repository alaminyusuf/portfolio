import React from "react"
import { Link } from "gatsby"
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
  @media (max-width: 563px) {
    font-size: 2.5rem;
  }
`

const Content = styled.div`
  jusfify-content: center;
  display: flex;
  flex-direction: column;
`

const Email = styled(Link)`
  text-align: center;
  margin: 2em auto;
  padding: 1em 5em;
  font-size: 14px;
  border: dotted 1px #414141;
  outline: none;
  text-transform: uppercase;
  font-wieght: 400;
  font-family: "Montserrat", sans-serif;
  color: #414141;
  text-decoration: none;

  @media (max-width: 340px) {
    padding: 0.5em;
    font-size: 11px;
  }
`

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Wrapper>
        <Header>Contact Me</Header>
        <Content>
          <Email href="mailto:alaminyusf131@gmail.com">send mail</Email>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default contact
