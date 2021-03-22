import { useState, useEffect } from 'react'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

export default function TodoMain() {
  const [todos, settodos] = useState([]) as any;
  const addNewTodo = (newTodo: any) => {
    settodos([...todos, { id: 32423, title: newTodo, completed: false }])
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((InitialTodo) => settodos(InitialTodo));
  }, [])
  return (
    <>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} />
    </>
  )
}