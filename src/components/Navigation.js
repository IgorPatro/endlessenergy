/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import logo from "assets/images/logo.png"
import { socialMedia } from "data/socialMedia"

const navStyles = (theme) => css`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${theme.mediaQueries.tablet} {
    padding: 20px;
  }

  img {
    height: 35px;

    ${theme.mediaQueries.tablet} {
      height: 45px;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 5px;
  }
`

const listItemStyles = (theme) => css`
  width: 25px;
  height: 25px;

  ${theme.mediaQueries.tablet} {
    width: 30px;
    height: 30px;
  }

  a {
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`

const Navigation = () => {
  return (
    <nav css={navStyles}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="social-media">
        {socialMedia.map(({ name, link, icon }) => {
          return (
            <li css={listItemStyles} key={name}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                css={css`
                  background-image: url(${icon});
                  filter: grayscale();
                `}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
