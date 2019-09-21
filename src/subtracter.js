import React from "react";
import { Component } from "react";

class Subtracter extends Component {
  componentWillUnmount() {
    //clean up...
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onSubtract("Toby");
          }}
        >
          Subtract
        </button>
      </div>
    );
  }
}
export default Subtracter;
