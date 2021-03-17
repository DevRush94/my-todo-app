import React, { Component } from 'react'

export class TodoMain extends Component {
 constructor(props: any) {
  super(props)
  this.state = {

  }
 }

 render() {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
   .then((response) => response.json())
   .then((json) => console.log(json));
  return (
   <div>

   </div>
  )
 }
}

export default TodoMain
