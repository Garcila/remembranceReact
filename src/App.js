import React, { Component } from 'react';

import Nav from './Nav';
import Grid from './Grid';
import './App.css';

const BlockState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

let colors = [
  { color: 'Yellow', blockState: BlockState.HIDING, id: 0 },
  { color: 'Green', blockState: BlockState.HIDING, id: 1 },
  { color: 'Blue', blockState: BlockState.HIDING, id: 2 },
  { color: 'Orange', blockState: BlockState.HIDING, id: 3 },
  { color: 'Black', blockState: BlockState.HIDING, id: 4 },
  { color: 'Turquoise', blockState: BlockState.HIDING, id: 5 },
  { color: 'Red', blockState: BlockState.HIDING, id: 6 },
  { color: 'Purple', blockState: BlockState.HIDING, id: 7 },
  { color: 'Yellow', blockState: BlockState.HIDING, id: 8 },
  { color: 'Green', blockState: BlockState.HIDING, id: 9 },
  { color: 'Blue', blockState: BlockState.HIDING, id: 10 },
  { color: 'Orange', blockState: BlockState.HIDING, id: 11 },
  { color: 'Black', blockState: BlockState.HIDING, id: 12 },
  { color: 'Turquoise', blockState: BlockState.HIDING, id: 13 },
  { color: 'Red', blockState: BlockState.HIDING, id: 14 },
  { color: 'Purple', blockState: BlockState.HIDING, id: 15 }
];

class App extends Component {
  constructor(props) {
    const shuffle = function(arr) {
      let arrClone = arr.slice(0);
      return arrClone.sort(function() {
        return Math.random() - 0.5;
      });
    };
    super(props);

    this.state = {
      colors: shuffle(colors)
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleClick(color) {
    let comparing = this.state.colors.filter(
      c => c.blockState === BlockState.MATCHING
    );
    if (comparing.length < 2) {
      let colorUncovered = { ...color, blockState: BlockState.MATCHING };
      let cIndex = this.state.colors.findIndex(c => c === color);
      const colors = [...this.state.colors];
      colors.splice(cIndex, 1, colorUncovered);
      this.setState({ colors });
      setTimeout(() => {
        this.comparePair();
      }, 1400);
    }
  }

  comparePair() {
    let comparing = this.state.colors.filter(
      c => c.blockState === BlockState.MATCHING
    );
    const colors = [...this.state.colors];
    if (comparing.length > 1) {
      let compared = comparing.every(
        (color, i, arr) => color.color === arr[0].color
      );
      if (!compared) {
        colors.map(
          c =>
            c.blockState === BlockState.MATCHING
              ? (c.blockState = BlockState.HIDING)
              : ''
        );
        this.setState({ colors });
      }
      if (compared) {
        colors.map(
          c =>
            c.blockState === BlockState.MATCHING
              ? (c.blockState = BlockState.SHOWING)
              : ''
        );
        this.setState({ colors });
      }
    }
  }

  resetGame() {
    const shuffle = function(arr) {
      let arrClone = arr.slice(0);
      return arrClone.sort(function() {
        return Math.random() - 0.5;
      });
    };
    const c = shuffle(colors);
    this.setState({ colors: c });
  }

  render() {
    const { colors } = this.state;
    return (
      <div className="App">
        <Nav title="Remember Remembrance" resetGame={this.resetGame} />
        <Grid handleClick={this.handleClick} colors={colors} />
      </div>
    );
  }
}

export default App;
