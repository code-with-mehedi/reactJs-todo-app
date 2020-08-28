import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  // update state
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  // add Item function
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: "",
    });
  }

  // Delete Item
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  // Edit Item
  editItem(id) {
    const list = [...this.state.list];
    const editTodo = list.filter((item) => item.id === id);
    console.log(editTodo);
  }
  render() {
    return (
      <div className="TodoList">
        <header className="App-header">
          <h1>Todo App</h1>

          <input
            type="text"
            className="add-td"
            name="add-td"
            placeholder="Enter Value"
            onChange={(e) => this.updateInput("newItem", e.target.value)}
            value={this.state.newItem}
          />
          <button id="submit-td" onClick={() => this.addItem()}>
            Add Task
          </button>

          <h2>Todo List:</h2>
          <ul className="todo-list">
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.editItem(item.id)}>Edit</button>
                  <button onClick={() => this.deleteItem(item.id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default TodoList;
