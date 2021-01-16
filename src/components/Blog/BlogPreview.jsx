import React from 'react';
import BlogMoreButton from './BlogMoreButton';
import { useStaticQuery, graphql } from 'gatsby';

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  `)


  return (
    <div className="BlogPreviewContainer">
      {data.allMarkdownRemark.nodes.map((blog) => {
        return (
          <div className="BlogPreviewBox">
            <div> {blog.frontmatter.date}</div>
            <div> {blog.frontmatter.title}</div>
            <BlogMoreButton
              url={blog.frontmatter.slug}
            />
          </div>
        )
      })}
    </div>
  )
}

export default BlogPreview;

