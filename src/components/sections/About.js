import React from "react"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Section from "components/Section"
import Header from "components/Header"
import Paragraph from "components/Paragraph"
import Button from "components/Button"

const mainWrapperStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  gap: 25px;

  ${theme.mediaQueries.desktop} {
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }
`

const aboutContentStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${theme.mediaQueries.desktop} {
    width: 45%;
    gap: 20px;
  }

  ${theme.mediaQueries.huge} {
    width: 40%;
  }
`

const aboutImageStyles = (theme) => css`
  width: 100%;

  ${theme.mediaQueries.desktop} {
    width: 40%;
  }

  ${theme.mediaQueries.huge} {
    width: 30%;
  }
`

const About = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(name: { eq: "about" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section>
      <div css={mainWrapperStyles}>
        <div css={aboutContentStyles}>
          <Header
            subheading="W DOBRYM TEGO ZNACZENIU"
            heading="Zmienimy <strong>twój dom</strong> w elektrownie"
            justify="start"
          />
          <Paragraph>
            Fotowoltaika to jeden z najlepszych sposobów na produkcję energii.
            Dzięki niej jesteśmy w stanie zadbać o środowisko, a także o stan
            naszego konta czy też grubość portfela. Aby jednak panele słoneczne
            posłużyły właścicielowi długo, bardzo ważny jest wybór firmy, która
            wykona ich montaż. Endless Energy to przedsiębiorstwo, którego
            personel składa się z wyspecjalizowanych fachowców.
          </Paragraph>
          <Button color="white" link="#contact">
            Napisz do nas
          </Button>
        </div>
        <div css={aboutImageStyles}>
          <Img fluid={file.childImageSharp.fluid} />
        </div>
      </div>
    </Section>
  )
}

export default About
