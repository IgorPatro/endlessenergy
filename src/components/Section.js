import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import theme from "layout/theme"

const StyledSection = styled.section`
  background-color: ${({ bgcolor }) => theme.colors[bgcolor]};
  padding: 15% 10%;
`

const Section = ({ children, bgcolor, id }) => {
  return (
    <StyledSection id={id} bgcolor={bgcolor}>
      {children}
    </StyledSection>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgcolor: PropTypes.string,
  id: PropTypes.string,
}

Section.defaultProps = {
  bgcolor: "transparent",
  id: null,
}

export default Section
