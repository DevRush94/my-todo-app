function TodoList(props: any) {
 return (
  <div className="form-list">
   {props.todos.map((d: any) =>
    <label htmlFor={d.id} key={d.id}>
     <input key={d.id} tabIndex={-1} type="checkbox" id={d.id} checked={d.completed} onChange={() => props.ToggleTodo(d.id)} /> {d.title}
    </label>
   )}
  </div>
 )
}

export default TodoList