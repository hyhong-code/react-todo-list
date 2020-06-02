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
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addNewItem(item) {
    this.setState((ps) => ({ todos: [...ps.todos, { item, id: uuidv4() }] }));
  }

  removeItem(removeId) {
    const newTodoList = this.state.todos.filter(({ id }) => id !== removeId);
    this.setState({ todos: newTodoList });
  }

  editItem(editId, updatedItem) {
    const newToDoList = this.state.todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, item: updatedItem };
      }
      return todo;
    });
    this.setState({ todos: newToDoList });
  }

  generateTodos() {
    return this.state.todos.map((todo) => (
      <ToDo
        key={todo.id}
        todo={todo}
        removeItem={this.removeItem}
        editItem={this.editItem}
      />
    ));
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>{this.generateTodos()}</ul>
        <NewToDoForm addNewItem={this.addNewItem} />
      </div>
    );
  }
}

export default ToDoList;
