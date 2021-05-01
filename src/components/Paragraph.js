import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import theme from "layout/theme"

const StyledParagraph = styled.p`
  color: ${({ color }) => theme.colors[color]};
`

const Paragraph = ({ children, color }) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

Paragraph.defaultProps = {
  color: "secondary",
}

export default Paragraph
