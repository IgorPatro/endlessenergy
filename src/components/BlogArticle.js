import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const blogArticleStyles = css`
  color: black;
`

const BlogArticle = ({ title, date, image }) => {
  return (
    <div css={blogArticleStyles}>
      <img src={image} alt="" />
      <span>{date}</span>
      <h4>{title}</h4>
    </div>
  )
}

BlogArticle.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.PropTypes.string.isRequired,
}

export default BlogArticle
