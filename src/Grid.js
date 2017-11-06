import React from 'react';
import Block from './Block';
import './Grid.css';

const Grid = ({ colors, handleClick, setStyle }) => {
  const createGrid = colors.map((color,index) => (
    <Block
      key={colors[index].id}
      index={index}
      color={colors[index].color}
      blockState={color.blockState}
      handleClick={() => handleClick(color)}
    />
  ));
  return (
    <div
      className="grid-container"
    >
      {createGrid}
    </div>
  );
};

export default Grid;
