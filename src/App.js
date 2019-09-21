import React from "react";
import "./App.css";
import Counter from "./counter";
import { Component } from "react";
import Displayer from "./displayer";
import Subtracter from "./subtracter";
import NameShower from "./nameshower";
import ObjectList from "./list";
class App extends Component {
  state = {
    count: 0,
    name: "",
    arrOfStrings: []
  };
  componentDidMount() {
    /*fetch('/_api/lists/getbyname("Survey Daily")/items', {
      headers: {
        accept: "application/json;odata=verbose"
      }
    }).then(data => {
      this.setState({
        count: data.count,
        name: data.name,
        arrOfStrings: data.strings
      });
    });*/
  }
  addNameToList = () => {
    let lastID = 0;
    if (this.state.arrOfStrings.length > 0) {
      lastID =
        this.state.arrOfStrings[this.state.arrOfStrings.length - 1].id + 1;
    }
    let arr = this.state.arrOfStrings;
    arr.push({ id: lastID, name: this.state.name });
    this.setState({ arrOfStrings: arr });
    this.setState({ name: "" });
  };
  deleteName = nameObject => {
    let arr = this.state.arrOfStrings.filter(function(x) {
      return x.id !== nameObject.id;
    });
    this.setState({ arrOfStrings: arr });
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  subtract = name => {
    this.setState({ count: this.state.count - 1 });
  };
  changeName = name => {
    this.setState({ name: name });
  };
  updateTextState = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.changeName("John");
          }}
        >
          Change to John
        </button>
        <ObjectList
          arrOfStrings={this.state.arrOfStrings}
          onDeleteName={this.deleteName}
          onChangeName={this.changeName}
        ></ObjectList>
        <Counter onSomething={this.increment}></Counter>
        <Displayer count={this.state.count} />
        <Subtracter onSubtract={this.subtract}></Subtracter>
        <NameShower
          onAddName={this.addNameToList}
          onTextChange={this.updateTextState}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
