import React from 'react';

const PartnerBox = (props) => {
  const { name } = props;
  return (
    <div className="PartnerContainer">
      <div className="PartnerContainerInner">
        <div className="PartnerText">{name}</div>
      </div>
    </div>
  )
}

export default PartnerBox;
