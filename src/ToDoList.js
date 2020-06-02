import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuidv4 } from "uuid";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ item: "learn react", id: uuidv4() }],
    };
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(item) {
    this.setState((ps) => ({ todos: [...ps.todos, { item, id: uuidv4() }] }));
  }

  generateTodos() {
    return this.state.todos.map((todo) => (
      <ToDo key={todo.id} item={todo.item} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.generateTodos()}
        <NewToDoForm addNewItem={this.addNewItem} />
      </div>
    );
  }
}

export default ToDoList;
