import React from "react"
import { css } from "@emotion/react"

const navStyles = css`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px;
`

const Navigation = () => {
  return <nav css={navStyles}>nawigacja</nav>
}

export default Navigation
