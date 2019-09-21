import React from "react";
import { Component } from "react";
import DisplayListItem from "./displaylistitem";
class ObjectList extends Component {
  render() {
    return (
      <ul>
        {this.props.arrOfStrings.map(myname => (
          <DisplayListItem
            key={myname.id}
            myname={myname}
            onChangeName={this.props.onChangeName}
            onDeleteName={this.props.onDeleteName}
          />
        ))}
      </ul>
    );
  }
}

export default ObjectList;
