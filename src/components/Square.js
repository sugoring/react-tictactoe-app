import React, { Component } from "react";
import "./Square.css";
export default class Square extends Component {
  // state 생성
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      // state 변경하기
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}
