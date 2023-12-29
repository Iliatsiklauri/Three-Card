import React from 'react';
import Button from './Button';
import './card.css';
const Card = ({ color, src, title, text }) => {
  const boxStyle = {
    background: color,
    width: '307px',
    height: '500px',
  };
  return (
    <div style={boxStyle} className="boxWrapper">
      <img src={src} alt="image" />
      <h1>{title}</h1>
      <p className="content">{text}</p>
      <Button color={color} />
    </div>
  );
};

export default Card;
