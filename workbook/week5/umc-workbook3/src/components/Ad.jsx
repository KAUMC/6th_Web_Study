import React from 'react';
import adImage from "../Untitled.svg";

const Ad = ({ show }) => {
  if (!show) return null;

  return (
    <div className='ad-container'>
      <img src={adImage} alt="Ad Banner" />
    </div>
  );
};

export default Ad;