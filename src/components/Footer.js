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

  ${theme.mediaQueries.tablet} {
    font-size: 1.8rem;
  }

  ${theme.mediaQueries.bigDesktop} {
    padding: 5% 10%;
  }

  img {
    height: 40px;

    ${theme.mediaQueries.tablet} {
      height: 50px;
    }

    ${theme.mediaQueries.bigDesktop} {
      height: 60px;
    }
  }

  .footer-data {
    font-size: inherit;
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${theme.mediaQueries.desktop} {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      gap: 0;
    }

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

    ${theme.mediaQueries.tablet} {
      flex-direction: row;
      justify-content: space-between;
    }

    ${theme.mediaQueries.desktop} {
      margin: 20px 0 0 0;
    }

    ${theme.mediaQueries.bigDesktop} {
      margin: 30px 0 0 0;
    }

    span {
      line-height: 1.4em;
    }
  }
`

const contactListStyles = (theme) => css`
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  ${theme.mediaQueries.desktop} {
    margin-top: 15px;
    gap: 5px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;

    ${theme.mediaQueries.desktop} {
      gap: 10px;
    }

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

      ${theme.mediaQueries.tablet} {
        width: 25px;
        height: 25px;
      }

      ${theme.mediaQueries.desktop} {
        width: 30px;
        height: 30px;
      }
    }
  }
`

const socialsListStyles = (theme) => css`
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

      ${theme.mediaQueries.tablet} {
        width: 30px;
        height: 30px;
      }
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
