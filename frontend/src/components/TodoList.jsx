import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TodoList extends Component {
  state = {
    todos: []
  };


  getPosts= async ()=>{
    const data = await fetch("http://127.0.0.1:8000/api/");
    const jsonData = await data.json();
    this.setState({
        todos:jsonData
    })
  }

  async componentDidMount() {
      setInterval(this.getPosts,3000);
    
  }
  componentWillUnmount(){
      console.log('I have unmounted');
      clearInterval(this.getPosts);
  }
  render() {
      console.log('I have rendered');
    return (
      <article className="todolist">
      {
          this.state.todos.map((todo)=>{
              return(
                  <NavLink key={todo.id} to={`/todo/${todo.id}`}>
                <div className="card" >
                <p> <b>Post Id: </b>{todo.id}</p>
                <p> <b>Post title: </b>{todo.title}</p>
                <p> <b>Highlights: </b>{todo.body.slice(0,15)}</p>
              </div>
                  </NavLink>
             
              )
          })
      }
       
        
      </article>
    );
  }
}

export default TodoList;
