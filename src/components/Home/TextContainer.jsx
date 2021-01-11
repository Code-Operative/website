import React from 'react';
import './home.css';

const TextContainer = (props) => {
  const { title, content } = props;
  return (
    <div className="textContainer">
      <div className="title">{title}</div>
      {content.map((paragraph) => {
        return (
          <div className="content">{paragraph}</div>
        )
      })}

    </div>
  )
}

export default TextContainer;