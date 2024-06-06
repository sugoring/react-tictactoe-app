import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">game-info</div>
        </div>
      </div>
    );
  }
}

export default App;
