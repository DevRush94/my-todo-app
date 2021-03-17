import React, { Component } from 'react'

class TodoMain extends Component {
 constructor(props) {
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

