import React from "react";
import { Component } from "react";

class Counter extends Component {
  componentWillUnmount() {
    //clean up...
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onSomething}>Increment</button>
      </div>
    );
  }
}
export default Counter;
