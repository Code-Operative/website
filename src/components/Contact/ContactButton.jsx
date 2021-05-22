import React from 'react';
import { Link } from "gatsby";

const ContactButton = (props) => {
  const { url, text, toggleFAQ } = props;

  return (
    <React.Fragment>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          className="ContactButton"
          type="button"
          onClick={() => toggleFAQ()}
          onBlur={() => toggleFAQ()}
        >
          {text}
        </button>
      </a>
    </React.Fragment>
  )
}

export default ContactButton;