import React, { useState } from 'react';
import './contact.css';

const FAQ = (props) => {
  const { content } = props;
  const [showBox, setShowBox] = useState(true)

  const handleBlur = () => {
    setShowBox(v => !v);
    console.log('close box');
  }

  return (
    <div className="FAQ__Container">
      <div className="FAQ__Container--inner">
        <div className="FAQ__Container--content">
          <div className="FAQ--content--title"> FAQs </div>
          {showBox && content.map((content) => {
            return (
              <div className="FAQ__Container--content--box" onBlur={handleBlur}> {content} </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQ;