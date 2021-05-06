import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const blogArticleStyles = (theme) => css`
  color: ${theme.colors.secondary};
  text-decoration: none;
  position: relative;

  img {
    width: 100%;
  }

  .article-content {
    width: 100%;
    position: absolute;
    bottom: -10px;
    left: -10px;
    background-color: ${theme.colors.primary};
    padding: 10px;
    font-size: 1.6rem;

    h4 {
      font-weight: ${theme.fontWeight.medium};
      font-size: inherit;
    }

    span {
      font-size: 0.8em;
    }
  }
`

const BlogArticle = ({ title, date, image, url }) => {
  return (
    <Link to={`/${url}`} css={blogArticleStyles}>
      <img src={image} alt="" />
      <div className="article-content">
        <span>{date}</span>
        <h4>{title}</h4>
      </div>
    </Link>
  )
}

BlogArticle.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default BlogArticle
