import { type } from 'node:os';
import React from 'react';
import UseInputState from './UseInputState'
type cardProp = {
 addNewTodo: any
}
export default function TodoForm({ addNewTodo }: cardProp) {
 const [value, handlechange, reset] = UseInputState("");
 return (
  <>
   Add New Item
   <form onSubmit={e => { e.preventDefault(); addNewTodo(value); reset(); }}>
    <input value={value} onChange={handlechange} />
   </form>
  </>
 )
}
