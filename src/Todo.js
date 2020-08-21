import React, { Component } from "react";
// import ReactDOM from "react-dom";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.inputVal = this.inputVal.bind(this);
  }
  inputVal(e) {
    this.setState({ value: e.target.value });
  }
  addItem(e) {
    e.preventDefault();
    const todoList = document.querySelector(".todo-list");
    const items = todoList.children;
    const addNewItem = document.createElement("li");
    addNewItem.classList.add("td-item");
    addNewItem.innerText = this.state.value;
    todoList.appendChild(addNewItem);
    let resetInput = document.querySelector(".add-td");
    resetInput.value = "";
    this.deleteItem();
  }
  deleteItem() {
    const deleteItem = document.querySelector(".td-item");
    deleteItem.addEventListener("click", (e) => e.target.remove());
  }

  render() {
    return (
      <div className="TodoList">
        <header className="App-header">
          <h1>Todo App</h1>
          <form>
            <input
              type="text"
              className="add-td"
              name="add-td"
              placeholder="Enter Value"
              onChange={this.inputVal}
              value={this.state.value}
            />
            <button id="submit-td" onClick={this.addItem}>
              Add Todo
            </button>
          </form>
          <h2>Todo List:</h2>
          <ul className="todo-list"></ul>
        </header>
      </div>
    );
  }
}

export default TodoList;
