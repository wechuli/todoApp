import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoList extends Component {
  state = {
    todos: []
  };

  getPosts = async () => {
    const data = await fetch("http://127.0.0.1:8000/api/");
    const jsonData = await data.json();
    this.setState({
      todos: jsonData
    });
  };

  componentDidMount() {
    this.intervalID = setInterval(this.getPosts, 7000);
  }
  componentWillUnmount() {
    console.log("I have unmounted");
    clearInterval(this.intervalID);
  }
  render() {
    console.log("I have rendered");
    return (
      <article className="todolist">
        {this.state.todos.map(todo => {
          return (
            <Link key={todo.id} to={`/todo/${todo.id}`}>
              
            </Link>
          );
        })}
      </article>
    );
  }
}

export default TodoList;
