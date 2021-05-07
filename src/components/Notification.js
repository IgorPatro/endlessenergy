import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const notificationStyles = (theme) => css`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    max-width: 90%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 2rem;

    ${theme.mediaQueries.tablet} {
      max-width: 600px;
      font-size: 2.2rem;
    }

    ${theme.mediaQueries.desktop} {
      font-size: 2.1rem;
      padding: 30px;
    }

    h6 {
      font-size: inherit;
    }

    p {
      font-size: 0.8em;
    }

    strong {
      color: ${theme.colors.primary};
      font-size: inherit;
    }

    a,
    button {
      display: block;
      text-decoration: none;
      background-color: ${theme.colors.primary};
      color: white;
      width: max-content;
      padding: 8px 35px;
      font-size: 0.8em;
      transition: background 0.3s, color 0.3s;
      border: none;

      &:hover {
        background-color: ${theme.colors.dark};
        color: ${theme.colors.primary};
      }
    }
  }
`

const Notification = ({ title, content, linkData, buttonData }) => {
  return (
    <div css={notificationStyles}>
      <div className="content">
        <h6 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: content }} />
        {buttonData ? (
          <button type="button" onClick={buttonData.onClickFunc}>
            {buttonData.content}
          </button>
        ) : (
          <Link to={linkData.url}>{linkData.content}</Link>
        )}
      </div>
    </div>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkData: PropTypes.objectOf(PropTypes.string),
  buttonData: PropTypes.objectOf(PropTypes.string || PropTypes.func),
}

Notification.defaultProps = {
  linkData: null,
  buttonData: null,
}

export default Notification
