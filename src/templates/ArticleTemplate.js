import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

import Layout from "layout/Layout"

const articleContentStyles = css`
  padding: 10%;
`

const ArticleTemplate = ({ data }) => {
  return (
    <Layout>
      <article css={articleContentStyles}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </article>
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.string || PropTypes.object).isRequired,
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default ArticleTemplate
