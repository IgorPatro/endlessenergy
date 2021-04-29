/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import { css } from "@emotion/react"

const landingHeaderStyles = (theme) => css`
  position: absolute;
  bottom: 40px;
  left: 10px;
  width: 85%;
  z-index: 5;
  max-width: 500px;
  color: white;
  font-size: 3.2rem;

  ${theme.mediaQueries.phone} {
    bottom: 50px;
    left: 20px;
    font-size: 3.3rem;
  }

  ${theme.mediaQueries.tablet} {
    font-size: 3.9rem;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 4.2rem;
    max-width: 700px;
  }

  ${theme.mediaQueries.desktop} {
    bottom: 60px;
    left: 60px;
    font-size: 4.5rem;
  }

  ${theme.mediaQueries.huge} {
    bottom: 80px;
    left: 80px;
  }

  h1 {
    font-size: inherit;
  }

  h3 {
    font-size: 0.55em;
    font-weight: ${theme.fontWeight.regular};
  }

  strong {
    color: ${theme.colors.primary};
  }

  a {
    color: white;
    background-color: ${theme.colors.primary};
    text-decoration: none;
    padding: 0.5em 1em;
    display: inline-block;
    margin-top: 10px;
    font-size: 0.5em;
  }
`

const LandingHeader = () => {
  return (
    <div css={landingHeaderStyles}>
      <h1>
        TWÓJ NAJLEPSZY <strong>DORADCA</strong>.
      </h1>
      <h3>
        Wybierzemy panele <strong>fotowoltaiczne</strong> dla{" "}
        <strong>Ciebie</strong> i Twojej <strong>rodziny</strong>.
      </h3>
      <a href="#contact">Napisz do nas</a>
    </div>
  )
}

export default LandingHeader
