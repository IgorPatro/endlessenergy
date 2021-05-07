/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { ThemeProvider, css } from "@emotion/react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import theme from "layout/theme"
import OrderForm from "components/OrderForm"

const orderStyles = css`
  padding: 7%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .image-and-link {
    display: flex;
    flex-direction: column;
    gap: 15px;

    a {
      display: inline-block;
      width: max-content;
      background-color: ${theme.colors.primary};
      color: white;
      text-decoration: none;
      padding: 8px 25px;
      align-self: flex-end;
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
    <ThemeProvider theme={theme}>
      <section css={orderStyles}>
        <OrderForm />
        <div className="image-and-link">
          <Img fluid={file.childImageSharp.fluid} />
          <Link to="/">powrót do domu</Link>
        </div>
      </section>
    </ThemeProvider>
  )
}

export default OrderPage
