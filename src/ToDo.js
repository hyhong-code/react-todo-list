import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      edit: this.props.todo.item,
    };
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleRemoveClick() {
    this.props.removeItem(this.props.todo.id);
  }

  handleEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editItem(this.props.todo.id, this.state.edit);
    this.setState({ isEditing: !this.state.isEditing });
  }

  generateForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="edit"
          id="edit"
          onChange={this.handleChange}
          value={this.state.edit}
        />
        <button type="submit">Update</button>
      </form>
    );
  }

  handleComplete() {
    this.props.toggleComplete(this.props.todo.id);
  }

  generateTodo() {
    return (
      <div>
        <button onClick={this.handleEditClick}>Edit</button>
        <button onClick={this.handleRemoveClick}>X</button>
        <h3
          className={this.props.completed ? "completed" : ""}
          onClick={this.handleComplete}
        >
          {this.props.todo.item}
        </h3>
      </div>
    );
  }

  render() {
    return (
      <li>
        {this.state.isEditing ? this.generateForm() : this.generateTodo()}
      </li>
    );
  }
}

export default ToDo;
