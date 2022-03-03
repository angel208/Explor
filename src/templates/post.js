import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styles from "./post.module.css"

export default function post({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  //TODO: what is dangeouslysethtml?
  //TODO: add images?
  //TODO: add postlist
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={styles.postContainer}>
        <div className={styles.postGrid}>
          <Img
            className={styles.postFeaturedImage}
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
          <div className={styles.postBody}>
            <h1 className={styles.postTitle}>{frontmatter.title}</h1>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
`
