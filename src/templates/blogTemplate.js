// sources to adding Markdown pages
// https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/
// https://www.gatsbyjs.com/docs/working-with-images-in-markdown/

import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout/layout';
import './blogTemplate.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          {/* <Img fluid={frontmatter.featuredImage.childImageSharp.fixed.src} /> */}
          <img src={frontmatter.featuredImage.childImageSharp.fixed.src} />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>

  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fixed(height: 100) {
              src
            }
          }
        }
      }
    }
  }
`