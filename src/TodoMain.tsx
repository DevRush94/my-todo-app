import { useState, useEffect } from 'react'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

export default function TodoMain() {
  const [todos, settodos] = useState([]) as any;
  const addNewTodo = (newTodo: any) => {
    settodos([...todos, { id: todos.length > 0 ? todos[todos.length - 1]?.id + 1 : 1, title: newTodo, completed: false, contentEditable: false }])
  }
  const ToggleTodo = (todoID: any) => {
    // console.log('Toggle', todoID);
    const UpdateTodo = todos.map((todo: any) =>
      todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    )
    settodos(UpdateTodo);
  }
  const RemoveTodo = (todoIDs: any) => {
    // console.log('DelTodo', todoIDs);
    const UpdateTodo = todos.filter((todo: any) => todo.id !== todoIDs);
    settodos(UpdateTodo);
  }
  const EditAble = (todoIDs: any) => {
    const UpdateTodo = todos.map((todo: any) =>
      todo.id === todoIDs ? { ...todo, contentEditable: true } : todo
    )
    settodos(UpdateTodo);
  }
  const EditVal = (todoIDs: any, NewVal: any) => {
    const UpdateTodo = todos.map((todo: any) =>
      todo.id === todoIDs ? { ...todo, title: NewVal, contentEditable: false } : todo
    )
    settodos(UpdateTodo);
  }
  const ClearTodo = (e: any) => {
    // console.log('ClearAll');
    settodos([]);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((InitialTodo) => settodos(InitialTodo));
    // console.log("API Fetched");
  }, [])
  return (
    <>
      <TodoForm addNewTodo={addNewTodo} />
      <span className="ClearAllBtn" onClick={(e) => ClearTodo(e)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </span>
      <TodoList todos={todos} ToggleTodo={ToggleTodo} RemoveTodo={RemoveTodo} EditAble={EditAble} EditVal={EditVal} />
    </>
  )
}