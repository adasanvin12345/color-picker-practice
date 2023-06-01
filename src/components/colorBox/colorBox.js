import React from 'react';
import "./colorBox.css";

function ColorBox({ color, handleColorChoosen }) {

  const boxStyle = {
    backgroundColor: color,
  };

  return <div style={boxStyle} className='colorBox' onClick={() => handleColorChoosen(color)}></div>;
}

export default ColorBox;