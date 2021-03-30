import { useState, useEffect } from 'react'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

export default function TodoMain() {
  const [todos, settodos] = useState([]) as any;
  const addNewTodo = (newTodo: any) => {
    settodos([...todos, { id: todos[todos.length - 1].id + 1, title: newTodo, completed: false }])
  }
  const ToggleTodo = (todoID: any) => {
    console.log('Toggle', todoID);
    const UpdateTodo = todos.map((todo: any) =>
      todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    )
    settodos(UpdateTodo);
  }
  const RemoveTodo = (todoIDs: any) => {
    console.log('DelTodo', todoIDs);
    const UpdateTodo = todos.filter((todo: any) => todo.id !== todoIDs);
    settodos(UpdateTodo);
  }
  const ClearTodo = (e: any) => {
    console.log('ClearAll');
    settodos([]);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((InitialTodo) => settodos(InitialTodo));
    console.log("API Fetched");
  }, [])
  return (
    <>
      <TodoForm addNewTodo={addNewTodo} />
      <span onClick={(e) => ClearTodo(e)}>ClearAll</span>
      <TodoList todos={todos} ToggleTodo={ToggleTodo} RemoveTodo={RemoveTodo} />
    </>
  )
}