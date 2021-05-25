import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  margin: 2em 0;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    width: 80%;
  }
`

const Salutation = styled.div`
  font-size: 16px;
  padding: 1em 0;
`

const Header = styled.h1`
  font-family: "Reggae One", cursive;
  font-weight: 400;
  font-size: 3rem;
`
const Summary = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.8;

  @media (min-width: 768px) {
    letter-spacing: 1.5px;
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <Salutation>Hi, I'm</Salutation>
      <Header>Al-amin Yusuf</Header>
      <Summary>
        Flexible result-oriented JavaScript developer with 3 years of
        experience. I have over 2 years of experience working with react/node,
        giving IT firms solutions that help their business. I love building web
        apps, websites and APIs. I love using my skills in a way that makes the
        internet accessible for everyone
      </Summary>
    </Wrapper>
  )
}

export default Hero
