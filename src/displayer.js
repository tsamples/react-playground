import React from "react";
import { Component } from "react";

class Displayer extends Component {
  render() {
    return <span>{this.props.count}</span>;
  }
}

export default Displayer;
