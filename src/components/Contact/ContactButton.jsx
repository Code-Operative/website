import React from 'react';
import { Link } from "gatsby";

const ContactButton = (props) => {
  const { url, text } = props;

  return (
    <React.Fragment>
      <Link to={url}>
        <button
          className="ContactButton"
          type="button"
        >
          {text}
        </button>
      </Link>
    </React.Fragment>
  )
}

export default ContactButton;