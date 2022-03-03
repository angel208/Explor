import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./posts.css"
import { Link } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              slug
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
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
    <div id="destinations-section" className="posts-container">
      <h1>View our Destinations</h1>
      <div className="posts-grid">
        {data.allMarkdownRemark.edges.map(edge => (
          <Link className="posts-item" to={edge.node.frontmatter.slug}>
            <div className="post-summary">
              <h2>{edge.node.frontmatter.title}</h2>
            </div>
            <Img
              fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Posts
