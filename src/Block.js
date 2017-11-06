import React from 'react';
// import './Block.css';

const Block = ({ color, handleClick, colors, index, blockState }) => {
  const style= 
    (blockState === 0)  
    ? 
      {
      filter: 'contrast(0%)',
      backgroundColor: color,
      height: '8rem',
      width: '8rem',
      borderRadius: '1rem',
      margin: '0.2rem'
      } 
    : 
      {backgroundColor: color,
      height: '8rem',
      width: '8rem',
      borderRadius: '1rem',
      margin: '0.2rem'
      }

  return (
    <div className ='block'
      style={style}
      onClick={()=>handleClick(color)}
    />
  );
};

export default Block;
