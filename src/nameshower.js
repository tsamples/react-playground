import React from "react";
import { Component } from "react";

class NameShower extends Component {
  render() {
    return (
      <React.Fragment>
        <span>{this.props.name}</span>
        <br />
        <input
          type="text"
          onChange={this.props.onTextChange}
          value={this.props.name}
        />
        <button onClick={this.props.onAddName}>Add Name To List</button>
      </React.Fragment>
    );
  }
}

export default NameShower;
