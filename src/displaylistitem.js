import React from "react";
import { Component } from "react";

class DisplayListItem extends Component {
  render() {
    return (
      <li key={this.props.myname.id}>
        <a
          href="#"
          onClick={() => this.props.onChangeName(this.props.myname.name)}
        >
          {this.props.myname.name}
        </a>
        <a href="#" onClick={() => this.props.onDeleteName(this.props.myname)}>
          Delete
        </a>
      </li>
    );
  }
}

export default DisplayListItem;
