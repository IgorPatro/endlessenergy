/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import { css } from "@emotion/react"

import Button from "components/Button"

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
    font-size: 4.2rem;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 4.6rem;
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
      <Button color="white" link="#contact">
        Napisz do nas
      </Button>
    </div>
  )
}

export default LandingHeader
