import React from "react";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore.js";
import * as TodoActions from "../actions/TodoActions";

export default class Todolist extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: TodoStore.getAll(),
    };
    this.inputContent = "";
  }

  //we start listening to the store changes
  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  render() {
    const TodoComp = this.state.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });

    return (
      <div>
        <h1> Todo list With Flux</h1>
        <input
          type="text"
          onChange={(evt) => (this.inputContent = evt.target.value)}
        />
        <button onClick={() => TodoActions.createTodo(this.inputContent)}>
          Create!
        </button>
        <ul>{TodoComp}</ul>
      </div>
    );
  }
}
