/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import { css } from "@emotion/react"

import logo from "assets/images/logo.png"
import { contactList } from "data/contact"
import { socialMedia } from "data/socialMedia"

const footerStyles = (theme) => css`
  padding: 5%;
  background-color: ${theme.colors.dark};
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  img {
    height: 40px;
  }

  .footer-data {
    font-size: inherit;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      font-size: inherit;
    }
  }

  .footer-privacy {
    display: flex;
    flex-direction: column;
    font-size: 0.85em;
    color: ${theme.colors.grey};
    border-top: 1px solid ${theme.colors.grey};
    padding: 5px 0 0 0;
    margin: 10px 0 0 0;

    span {
      line-height: 1.3em;
    }
  }
`

const contactListStyles = css`
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  li {
    display: flex;
    align-items: center;
    gap: 5px;

    a {
      color: white;
      text-decoration: none;
    }

    .icon {
      width: 20px;
      height: 20px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`

const socialsListStyles = css`
  list-style: none;
  display: flex;
  gap: 5px;

  li {
    align-items: center;
    gap: 5px;

    a {
      display: block;
      width: 25px;
      height: 25px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      color: white;
      text-decoration: none;
    }
  }
`

const Footer = () => {
  return (
    <footer css={footerStyles}>
      <div className="footer-data">
        <div className="footer-contact">
          <img src={logo} alt="logo" />
          <ul css={contactListStyles}>
            {contactList.map(({ name, content, icon }) => (
              <li key={name}>
                <div
                  className="icon"
                  css={css`
                    background-image: url(${icon});
                  `}
                />
                <p dangerouslySetInnerHTML={{ __html: content }} />
              </li>
            ))}
          </ul>
        </div>
        <ul className="footer-socials" css={socialsListStyles}>
          {socialMedia.map(({ name, link, icon }) => {
            return (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  css={css`
                    background-image: url(${icon});
                  `}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="footer-privacy">
        <span>© Endless Energy. Wszelkie prawa zastrzeżone</span>
        <span>Created by SkyAgency360</span>
      </div>
    </footer>
  )
}

export default Footer
