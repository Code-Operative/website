import React from 'react';
import BlogMoreButton from './BlogMoreButton';
import './blog.css';


const BlogHeader = () => {
  return (
    <div className="BlogHeaderContainer">
      <div className="BlogHeader">
        Blog Header
      </div>
      <BlogMoreButton />

    </div>
  )
}

export default BlogHeader;