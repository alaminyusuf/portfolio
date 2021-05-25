import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  padding: 0.8em;
  font-size: 14px;
  margin: 0.5em;
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

const Cta = ({ link, text }) => <Button to={link}>{text}</Button>

export default Cta
