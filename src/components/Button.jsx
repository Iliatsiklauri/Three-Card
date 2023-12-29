import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <div className="learn-more">
      <p style={{ color: props.color }}>Learn More</p>
    </div>
  );
};

export default Button;
