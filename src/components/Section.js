import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const sectionStyles = css`
  padding: 10%;
`

const Section = ({ children }) => {
  return <section css={sectionStyles}>{children}</section>
}

Section.propTypes = { children: PropTypes.node.isRequired }

export default Section
