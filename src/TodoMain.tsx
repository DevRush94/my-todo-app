import { useState, useEffect } from 'react'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

export default function TodoMain() {
  const [todos, settodos] = useState([]) as any;
  const addNewTodo = (newTodo: any) => {
    settodos([...todos, { id: todos.length + 1, title: newTodo, completed: false }])
  }
  const ToggleTodo = (todoID: any) => {
    console.log('ToggleTodo', todoID);

    const UpdateTodo = todos.map((todo: any) =>
      todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    )
    settodos(UpdateTodo);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((InitialTodo) => settodos(InitialTodo));
  }, [])
  return (
    <>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} ToggleTodo={ToggleTodo} />
    </>
  )
}