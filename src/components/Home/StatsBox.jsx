import React from 'react';


const StatBox = (props) => {
  const { stat, label } = props;
  return (
    <div className="StatBoxContainer">
      <div className="StatBoxStat">{stat}</div>
      <div className="StatBoxLabel">{label}</div>
    </div>
  )
}

export default StatBox;