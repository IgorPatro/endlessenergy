import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const StyledHeader = styled.div`
  color: ${({ color }) => color};
  align-items: ${({ justify }) => justify};
  text-align: ${({ justify }) => (justify === "center" ? "center" : "left")};
`

const headerStyles = (theme) => css`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0.5em 0;

    strong {
      color: ${theme.colors.primary};
    }
  }

  h5 {
    font-weight: ${theme.fontWeight.medium};
  }

  .ruler {
    width: 220px;
    border-top: 1.5px solid ${theme.colors.primary};
  }
`

const Header = ({ justify, color, heading, subheading }) => {
  return (
    <StyledHeader css={headerStyles} justify={justify} color={color}>
      <h5>{subheading}</h5>
      <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      <div className="ruler" />
    </StyledHeader>
  )
}

Header.propTypes = {
  justify: PropTypes.string,
  color: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
}

Header.defaultProps = {
  justify: "center",
  color: "secondary",
}

export default Header
