import React from 'react'



 const Todo = (props)=> {
   console.log(props);
  return (
    <div>
      <div>
                <p>
                  {" "}
                  <b>Post Id: </b>
                  {props.todo.id}
                </p>
                <p>
                  {" "}
                  <b>Post title: </b>
                  {props.todo.title}
                </p>
                <p>
                  {" "}
                  <b>Highlights: </b>
                  {props.body.slice(0, 15)}
                </p>
              </div>
    </div>
  )
}


export default Todo