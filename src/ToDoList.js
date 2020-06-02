import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuidv4 } from "uuid";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ item: "learn react", id: uuidv4(), isCompleted: false }],
    };
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  addNewItem(item) {
    this.setState((ps) => ({
      todos: [...ps.todos, { item, id: uuidv4(), isCompleted: false }],
    }));
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

  toggleComplete(completedId) {
    const newToDoList = this.state.todos.map((todo) => {
      if (todo.id === completedId) {
        return { ...todo, isCompleted: !todo.isCompleted };
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
        completed={todo.isCompleted}
        removeItem={this.removeItem}
        editItem={this.editItem}
        toggleComplete={this.toggleComplete}
      />
    ));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>made with React</span>{" "}
        </h1>{" "}
        <NewToDoForm addNewItem={this.addNewItem} />
        <ul>{this.generateTodos()}</ul>
      </div>
    );
  }
}

export default ToDoList;
