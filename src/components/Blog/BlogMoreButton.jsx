
import React from 'react';
import { Link } from "gatsby";

const BlogMoreButton = (props) => {
  const { url } = props;

  return (
    <React.Fragment>
      <Link to={url}>
        <button
          className="BlogMoreButton"
          type="button"
        >
          Read More
      </button>
      </Link>
    </React.Fragment>
  )
}

export default BlogMoreButton;