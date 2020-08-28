import React from "react";
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.text}</span>
        <button onClick={() => TodoActions.deleteTodo(this.props.id)}>
          delete
        </button>
      </li>
    );
  }
}
