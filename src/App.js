import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="game-board">game-board</div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
