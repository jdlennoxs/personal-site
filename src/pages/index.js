import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { ArticlePreview } from "../templates/article"

export default ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        <ArticlePreview post={post.node}></ArticlePreview>
      ))}
    </Layout>
  )
}


export const query = graphql`
{
  allMdx(
    sort: { fields: frontmatter___date, order: DESC }  
    limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
}`
