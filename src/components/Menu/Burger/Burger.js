import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.prototype = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

const StyledBurger = styled.button`
  position: relative;
  margin-top: 2.5em;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    background: #414141;
    position: relative;
    transform-origin: 1px;
    :first-child {
      background: ${({ open }) => (open ? "#fafafa" : "#414141")};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translate(0)")};
    }
    :nth-child(3) {
      background: ${({ open }) => (open ? "#fafafa" : "#414141")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
export default Burger
