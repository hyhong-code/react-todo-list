import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick() {
    this.props.removeItem(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.todo.item}</h3>
        <button>Edit</button>
        <button onClick={this.handleRemoveClick}>Delete</button>
      </div>
    );
  }
}

export default ToDo;
