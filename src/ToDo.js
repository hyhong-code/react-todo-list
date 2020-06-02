import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.item}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default ToDo;
