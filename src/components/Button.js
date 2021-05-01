import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import theme from "layout/theme"

const StyledButton = styled.button`
  color: ${({ color }) => theme.colors[color]};
  background-color: ${theme.colors.primary};
  text-decoration: none;
  padding: 0.6em 1.5em;
  display: inline-block;
  font-size: 1.5rem;
  width: max-content;
`

const Button = ({ children, color, link }) => {
  if (!link) {
    return <StyledButton color={color}>{children}</StyledButton>
  }
  return (
    <StyledButton as="a" href={link} color={color}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  link: PropTypes.string,
}

Button.defaultProps = {
  color: "secondary",
  link: "",
}

export default Button
