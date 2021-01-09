import React from 'react';
import './member.css';

const MemberText = (props) => {
  const { title, description } = props;

  return (
    <div className="memberText">
      <div className="memberText_title">
        {title}
      </div>
      <div>{description}</div>
    </div>
  )
}

export default MemberText;