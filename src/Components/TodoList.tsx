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
   <form onSubmit={e => formSubmit(e)}>
    <input type="text" name={value} id={newId} value={value} onChange={handlechange} autoFocus={true} onBlur={e => formSubmit(e)} required />
   </form>
  </>
 }
 return (
  <div className="form-list">
   {props.todos.map((d: any) =>
    <label htmlFor={d.id} key={d.id} className={d.contentEditable === true ? "Editing" : ""}>
     <input key={d.id} tabIndex={-1} type="checkbox" id={d.id} checked={d.completed} onChange={() => props.ToggleTodo(d.id)} />
     <span className="title">{d.title}</span>
     <span className="CloseBtn" onClick={(e) => { e.preventDefault(); props.RemoveTodo(d.id) }}> &nbsp; x</span>
     <span className="CloseBtn" onClick={(e) => { e.preventDefault(); props.EditAble(d.id) }}>&nbsp; E</span>

     {d.contentEditable === true ? EditInput(d.id, d.title) : false}
    </label>
   )}
  </div>
 )
}

export default TodoList