import React from 'react';
import './Nav.css';

const Nav = ({ title, resetGame }) => {
  return (
    <header className="nav-header">
      <h1 className="nav-title">{title}</h1>
      <h2>
        <a onClick={resetGame} style={{ cursor: 'pointer' }}>
          New Game
        </a>
      </h2>
    </header>
  );
};

export default Nav;
