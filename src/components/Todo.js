import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
// import Notification from "./Notification";
const uuid = require("uuid/v1");

export default class Todo extends Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      input: "",
      todos: JSON.parse(localStorage.getItem("Todos")) || [
        { id: uuid(), isCompleted: false, text: "We are here.." },
        { id: uuid(), isCompleted: false, text: "So you don't feel lonely :)" }
      ]
    };
  }

  componentDidMount() {
    // localStorage.setItem("Todos", JSON.stringify(this.state.todos));
    // const todos = JSON.parse(localStorage.getItem("Todos")) || [];
    console.log(this.state.todos);
  }

  // Controll Inputs
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // Add todos to list
  handleAdd = e => {
    e.preventDefault();
    if (this.state.input) {
      let todoTwo = JSON.parse(localStorage.getItem("Todos")) || [];
      todoTwo.push({ id: uuid(), isCompleted: false, text: this.state.input });
      localStorage.setItem("Todos", JSON.stringify(todoTwo));
      this.setState({
        input: "",
        todos: todoTwo,
        notificationText: "Todo Added"
      });
    }
  };

  // Delete Todos
  handleDelete = value => {
    let todos = JSON.parse(localStorage.getItem("Todos")) || [];
    let newTodos = todos.filter(a => a.id !== value.id);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
      notificationText: "Todo Deleted"
    });
  };

  // Completed Todos
  handleComplete = value => {
    let newTodos = JSON.parse(localStorage.getItem("Todos")) || [];
    newTodos.forEach(e => {
      if (e.id === value.id) {
        e.isCompleted = !e.isCompleted;
      }
    });
    localStorage.setItem("Todos", JSON.stringify(newTodos));
    this.setState({ todos: newTodos, notificationText: "Todo Completed" });
  };

  render() {
    // Maping through Todos
    const todo = this.state.todos.map(todo => (
      <TodoItem
        todo={todo}
        state={this.state}
        handleComplete={this.handleComplete}
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <div className="app">
        <h1>TodoList</h1>
        <small>
          made with <a href="www.reactjs.org">react</a>
        </small>
        <div className="todoList">
          <p className="infoText">
            This app doesn't save your todos anywhere, It'll be gone once you
            close this window.
          </p>
          <ul>{todo}</ul>
        </div>
        <AddTodo
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          state={this.state}
        />

        <div className="footer">
          <small>
            made with <i className="fas fa-heart"></i> by
            <a href="https://www.github.com/muhsin7majeed"> Muhsin</a>
          </small>
        </div>
        {/* <Notification state={this.state} /> */}
      </div>
    );
  }
}
