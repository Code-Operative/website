
import React from 'react';
import { Link } from "gatsby";

const BlogMoreButton = (props) => {
  const { url } = props;

  return (
    <React.Fragment>
      <button
        className="BlogMoreButton"
        type="button"
      >
        <Link to={url}>
          Read More
        </Link>
      </button>
    </React.Fragment>
  )
}

export default BlogMoreButton;