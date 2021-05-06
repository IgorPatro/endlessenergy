import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const projectStyles = (theme) => css`
  color: white;
  position: relative;
  width: 100%;
  min-height: 300px;
  cursor: pointer;

  .img-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: 0;
    background-position: center;
  }

  .project-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: rgba(${theme.colors.primaryRGB}, 0.9);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 10px;
    font-size: 2rem;
    opacity: 0;
    transition: opacity 0.5s;

    span {
      font-size: 0.7em;
    }

    h4 {
      font-size: inherit;
    }
  }

  &:hover {
    .project-info {
      opacity: 1;
    }
  }
`

const Project = ({ place, installationSize, image }) => {
  return (
    <div css={projectStyles}>
      <div
        className="img-background"
        css={css`
          background-image: url(${image});
        `}
      />
      <div className="project-info">
        <span>{installationSize}</span>
        <h4>{place}</h4>
      </div>
    </div>
  )
}

Project.propTypes = {
  place: PropTypes.string.isRequired,
  installationSize: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Project
