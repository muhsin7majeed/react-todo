import React, { Component } from "react";

export default class AddTodo extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <form onSubmit={this.props.handleAdd} className="todoForm">
        <input
          placeholder={`what's on your mind?`}
          type="text"
          value={this.props.state.input}
          onChange={this.props.handleChange}
        ></input>
        <button className="btnAdd">Add</button>
      </form>
    );
  }
}
