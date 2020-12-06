import PropTypes from "prop-types"
import React from "react"

// components
// import Navbar from "./Nav"

const Header = () => <header>{/* <Navbar /> */}</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Al-amin Yusuf`,
}

export default Header
