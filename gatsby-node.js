const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const article = path.resolve(`./src/templates/ArticleTemplate.js`)

  const result = await graphql(`
    query allArticlesSlugsQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`)
    return
  }

  const articles = result.data.allMarkdownRemark.edges

  if (articles.length > 0) {
    articles.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: article,
        context: {
          id: node.id,
        },
      })
      console.log(`Page with slug: ${node.frontmatter.slug} has been created`)
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
