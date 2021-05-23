import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "../utils/createGlobalStyle"

import Header from "./header"
import Navbar from "../components/Navbar"

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
      </Container>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
