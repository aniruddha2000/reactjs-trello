import React, { Component } from 'react';
import './App.css';
import SingleTodo from "./singleTodo";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      currentTodo: "",
    }
  }

  onInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  onClick = () => {
    if (this.state.currentTodo !== "") {
      let todosCopy = this.state.todos.slice()
      todosCopy.push(this.state.currentTodo)
      this.setState({
        todos: todosCopy,
        currentTodo: "",
      })
    }
  }

  deleteTodo = (i) => {
    let todoCopy = this.state.todos.slice()
    todoCopy.splice(i, 1)
    this.setState({
      todos: todoCopy,
    })
  }

  render() {
    let showTodo = this.state.todos.map((e, i) => {
      return (
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)} />
      )
    })
    return (
      <div>
        <input type="text" placeholder="Enter todo" value={this.state.currentTodo}
          onChange={this.onInputChange} />
        <button onClick={this.onClick}>Enter todo</button>
        <h3>{this.state.todos.length === 0 ? "No todos yet!" : <ul>{showTodo}</ul>}</h3>
      </div>
    )
  }
}

export default App;
