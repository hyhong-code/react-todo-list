import React, { Component } from "react";

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addNewItem(this.state.item);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">New Todo</label>
        <input
          id="item"
          name="item"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button type="submit">ADD TODO</button>
      </form>
    );
  }
}

export default NewToDoForm;
