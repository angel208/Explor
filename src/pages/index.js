import React from "react"

import Layout from "../components/layout"
import Posts from "../components/Blog/posts"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Posts />
  </Layout>
)

export default IndexPage
