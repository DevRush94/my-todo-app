import { useState, useEffect } from 'react';

export default function TodoMain() {
 const [users, setUsers] = useState([]) as any;
 console.table(users);

 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
   .then((response) => response.json())
   .then((data) => setUsers(data));
 }, [])

 return (
  <div>
   {users.map((d: any, index: any) =>
    <div>
     <label htmlFor={index} key={index}> <input type="checkbox" name={index}  checked={d.completed}/> {d.title} </label>
     <br />
     <br />
    </div>
   )}
  </div>
 )
}