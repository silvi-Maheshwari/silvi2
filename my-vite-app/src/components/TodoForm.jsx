import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'

import {  AuthContext1 } from '../content/AuthContext'

const TodoForm = () => {
const{todos,addTodo}=useContext(AuthContext1)


    
const handlechange=(e)=>{
let value=e.target.type==="checkbox"?e.target.checked:e.target.value;
const newstate={...todos,[e.target.name]:value}
console.log(value)
addTodo(newstate)
}

const handleSubmit=(e)=>{
e.preventDefault();
axios.post("http://localhost:3000/todos",todos).then((res)=>{
  console.log(res.data)
}).catch((err)=>{
  console.log(err)
})
}
  return (
    <div>
       <form onSubmit={handleSubmit} >
    <input type='text' placeholder='Enter value' value={todos.title} name='title' onChange={handlechange} />
    <label>completed</label>
    <input type='checked' placeholder='Enter ' value={todos.status}  name='status' onChange={handlechange}/>
    <select name="assignedTo" value={todos.assignedTo} onChange={handlechange}>
          <option value="">Assign</option>
          <option value="silvi">silvi</option>
          <option value="supriya">supriya</option>
          <option value="pankaj">pankaj</option>
        </select>

    <button type='Submit'>Add</button>
    </form>
       
        </div>
  )
}

export default TodoForm

