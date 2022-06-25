import React from 'react';
import './FloatingDiv.css';

const FloatingDiv = ({ image, text }) => {
  const [firstLine, secondLine] = text;
  return (
    <div className='FloatingDiv'>
      <img src={image} alt='' />
      <span>
        {firstLine}
        <br />
        {secondLine}
      </span>
    </div>
  );
};

export default FloatingDiv;
