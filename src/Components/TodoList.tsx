import UseInputState from './UseInputState'

function TodoList(props: any) {
 function EditInput(newId: any, newValue: any) {
  let [value, handlechange, reset] = UseInputState("");
  if (value === "") {
   value = newValue;
  }
  function formSubmit(e: any) {
   e.preventDefault(); props.EditVal(newId, value); reset();
  }
  // value === "" ? value = newValue : "";
  return <>
   <form className="EditForm" onSubmit={e => formSubmit(e)}>
    <input type="text" name={value} id={newId} value={value} onChange={handlechange} autoFocus={true} onBlur={e => formSubmit(e)} required />
   </form>
  </>
 }
 return (
  <div className="form-list">
   {props.todos.map((d: any) =>
    <label htmlFor={d.id} key={d.id} className={d.contentEditable === true ? "Editing" : ""}>
     <input key={d.id} tabIndex={-1} type="checkbox" id={d.id} checked={d.completed} onChange={() => props.ToggleTodo(d.id)} />
     {d.contentEditable === true ? EditInput(d.id, d.title) : false}
     <span className="title">{d.title}</span>

     <span className="CloseBtn" onClick={(e) => { e.preventDefault(); props.EditAble(d.id) }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
     </span>

     <span className="CloseBtn" onClick={(e) => { e.preventDefault(); props.RemoveTodo(d.id) }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
     </span>

    </label>
   )}
  </div>
 )
}

export default TodoList