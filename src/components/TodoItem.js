import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class TodoItem extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginBottom: -10 }}
        to={{ opacity: 1, marginBottom: 0 }}
      >
        {props => (
          <div className="App" style={props}>
            <li
              className="todoItem"
              style={{
                textDecoration: this.props.todo.isCompleted
                  ? "line-through"
                  : "none"
              }}
            >
              <button
                className="btnComp"
                onClick={() => {
                  this.props.handleComplete(this.props.todo);
                }}
              >
                <i className="fas fa-check  "></i>
              </button>

              <span className="todoText">{this.props.todo.text}</span>
              <button
                className="btnDel"
                onClick={() => {
                  this.props.handleDelete(this.props.todo);
                }}
              >
                <i className="fas fa-trash  "></i>
              </button>
            </li>
          </div>
        )}
      </Spring>
    );
  }
}
