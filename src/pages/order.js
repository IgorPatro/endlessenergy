/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { ThemeProvider, css } from "@emotion/react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "components/SEO"
import theme from "layout/theme"
import OrderForm from "components/OrderForm"

const orderStyles = css`
  padding: 7%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  min-height: 100vh;

  ${theme.mediaQueries.phone} {
    padding: 10%;
  }

  ${theme.mediaQueries.tablet} {
    padding: 10% 15%;
    gap: 100px;
  }

  ${theme.mediaQueries.desktop} {
    padding: 5%;
    flex-direction: row;
    justify-content: space-between;
    gap: 70px;
  }

  ${theme.mediaQueries.bigDesktop} {
    justify-content: center;
    gap: 150px;
  }

  ${theme.mediaQueries.huge} {
    gap: 200px;
  }

  .image-and-link {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 500px;

    ${theme.mediaQueries.desktop} {
      gap: 25px;
    }

    a {
      display: inline-block;
      width: max-content;
      background-color: ${theme.colors.primary};
      color: white;
      text-decoration: none;
      padding: 8px 25px;
      align-self: flex-end;
      transition: color 0.3s, background 0.3s;

      &:hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.dark};
      }
    }
  }
`

const OrderPage = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(name: { eq: "order" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO pageName="Zamówienie" />
      <ThemeProvider theme={theme}>
        <section css={orderStyles}>
          <OrderForm />
          <div className="image-and-link">
            <Img fluid={file.childImageSharp.fluid} />
            <Link to="/">powrót do domu</Link>
          </div>
        </section>
      </ThemeProvider>
    </>
  )
}

export default OrderPage
