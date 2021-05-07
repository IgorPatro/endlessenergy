import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const calculatorScoreStyles = (theme) => css`
  background-color: white;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 2.2rem;
  gap: 15px;
  box-sizing: border-box;
  text-align: center;
  transition: color 0.3s, background 0.3s;
  cursor: pointer;

  ${theme.mediaQueries.tablet} {
    font-size: 2.4rem;
  }

  ${theme.mediaQueries.desktop} {
    aspect-ratio: 4/3;
    max-width: 250px;
  }

  svg path {
    fill: ${theme.colors.secondary};
    transition: fill 0.3s;
  }

  h4 {
    font-size: inherit;
    color: ${theme.colors.primary};
    transition: color 0.3s;
  }

  p {
    font-size: 0.7em;
  }

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;

    svg path {
      fill: white;
    }

    h4 {
      color: white;
    }
  }
`

const CalculatorScore = ({ icon: Icon, score, children }) => {
  return (
    <li css={calculatorScoreStyles}>
      <Icon />
      <h4>{score}</h4>
      <p>{children}</p>
    </li>
  )
}

CalculatorScore.propTypes = {
  icon: PropTypes.func.isRequired,
  score: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default CalculatorScore
