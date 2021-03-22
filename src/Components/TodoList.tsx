import React from 'react'
function TodoList(props: any) {
 return (
  <div className="form-list">
   {props.todos.map((d: any, index: any) =>
    <>
     <label htmlFor={index} key={index}> <input type="checkbox" name={index} checked={d.completed} /> {d.title} </label>
    </>
   )}
  </div>
 )
}

export default TodoList