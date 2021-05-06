import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const featureStyles = (theme) => css`
  border: 1px solid ${theme.colors.grey};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.9rem;
  text-align: center;
  transition: color 0.5s, background 0.5s;
  cursor: pointer;

  h4 {
    font-size: inherit;
    font-weight: ${theme.fontWeight.medium};
    margin: 1.2em 0 0.5em;
  }

  p {
    font-size: 0.75em;
    font-weight: ${theme.fontWeight.thin};
  }

  svg path {
    fill: ${theme.colors.primary};
  }

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;

    svg path {
      fill: white;
      transition: fill 0.5s;
    }
  }
`

const Feature = ({ children, title, icon: Icon }) => {
  return (
    <div css={featureStyles}>
      <Icon />
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}

Feature.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
}

export default Feature
