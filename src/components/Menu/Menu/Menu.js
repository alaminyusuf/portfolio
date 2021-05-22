import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <a href="/">Home</a>
    <a href="/contact">Contact</a>
    <a href="/my-work">My Work</a>
    <a href="/order">Resume</a>
  </StyledMenu>
)

Menu.prototype = {
  open: PropTypes.bool.isRequired,
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #414141;
  height: 100%;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  width: ${({ open }) => (open ? "75%" : "0")};
  transform: translateY(-100%);
  transform: ${({ open }) => (open ? "translateY(0)" : "tranlateY(-100%)")};
  @media (max-width: 563px) {
    width: ${({ open }) => (open ? "100%" : "0")};
  }
  a {
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 400;
    color: #fafafa;
    text-align: center;
    text-decoration: none;
    display: ${({ open }) => (open ? "block" : "none")};
    transition: color 0.3s linear;
    @media (max-width: 563px) {
      font-size: 1.2rem;
      text-align: center;
    }
    &:hover {
      color: #515151;
    }
  }
`

export default Menu
