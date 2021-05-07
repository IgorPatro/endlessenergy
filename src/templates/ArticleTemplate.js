import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

import SEO from "components/SEO"
import Layout from "layout/Layout"

const articleContentStyles = (theme) => css`
  padding: 100px 7%;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${theme.mediaQueries.tablet} {
    padding: 150px 10% 100px;
    font-size: 2.7rem;
  }

  ${theme.mediaQueries.bigTablet} {
    padding: 150px 10% 100px;
    font-size: 2.8rem;
  }

  ${theme.mediaQueries.desktop} {
    padding: 150px 15%;
    font-size: 2.9rem;
    width: 80vw;
    gap: 50px;
  }

  ${theme.mediaQueries.bigDesktop} {
    font-size: 3rem;
  }

  ${theme.mediaQueries.huge} {
    padding: 200px 20% 250px;
    font-size: 3.2rem;
    width: 75vw;
  }

  .article-info {
    font-size: inherit;

    h1 {
      font-size: 1.3em;
    }

    p {
      font-size: 0.6em;
    }
  }

  .article-content {
    font-size: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.3em;

    h1 {
      font-size: 0.9em;
    }

    h2 {
      font-size: 0.8em;
    }

    h3 {
      font-size: 0.7em;
    }

    p {
      font-size: 0.6em;
    }
  }

  a {
    display: block;
    color: white;
    background-color: ${theme.colors.primary};
    font-size: 0.6em;
    width: max-content;
    text-decoration: none;
    padding: 8px 35px;
    transition: color 0.3s, background 0.3s;

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.dark};
    }
  }
`

const ArticleTemplate = ({ data }) => {
  return (
    <>
      <SEO pageName={data.markdownRemark.frontmatter.title} />
      <Layout>
        <article css={articleContentStyles}>
          <div className="article-info">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.frontmatter.date}</p>
          </div>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <Link to="/">powrót do domu</Link>
        </article>
      </Layout>
    </>
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
