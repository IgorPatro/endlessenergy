import React from "react"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"

import Section from "components/Section"
import Header from "components/Header"
import BlogArticle from "components/BlogArticle"

const blogStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  .blog-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section bgcolor="silver">
      <div css={blogStyles}>
        <Header
          subheading="NASZ BLOG"
          heading="Sprawdź o czym ostatnio <strong>pisaliśmy</strong>"
          justify="center"
        />
        <div className="blog-list">
          {allMarkdownRemark.edges.map(({ node }) => {
            return (
              <BlogArticle
                key={node.frontmatter.title}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                image={node.frontmatter.image.childImageSharp.fluid.src}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Blog
