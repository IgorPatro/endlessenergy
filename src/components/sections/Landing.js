import React from "react"
import { css } from "@emotion/react"

import video from "assets/video.mp4"
import landingImage from "assets/images/landing.png"
import LandingHeader from "components/LandingHeader"

const landingStyles = (theme) => css`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: black;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    display: none;

    ${theme.mediaQueries.desktop} {
      display: block;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;

    ${theme.mediaQueries.desktop} {
      display: none;
    }
  }
`

const Landing = () => {
  return (
    <div css={landingStyles}>
      <video src={video} autoPlay muted loop />
      <img src={landingImage} alt="fotowoltaika w tle" />
      <LandingHeader />
    </div>
  )
}

export default Landing
