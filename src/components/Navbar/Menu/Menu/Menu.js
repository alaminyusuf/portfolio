import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Pdf from "../../../../assets/Al-amin_Yusuf.pdf"

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <a href="/">Home</a>
    <a href={Pdf} download>
      Resume
    </a>
    <a href="/contact">Contact</a>
    <a href="/my-projects">My Work</a>
  </StyledMenu>
)

Menu.prototype = {
  open: PropTypes.bool.isRequired,
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f4f4f4;
  height: 100%;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  width: ${({ open }) => (open ? "100%" : "0")};
  transform: translateY(100%);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  a {
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 400;
    color: #414141;
    text-align: center;
    text-decoration: none;
    display: ${({ open }) => (open ? "block" : "none")};
    transition: color 0.3s linear;
    width: ;
    margin: 0 auto;
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`

export default Menu
