import React, {  useEffect, useState } from 'react'

import axios from 'axios'
import TodoItem from './TodoItem'


const TodoList = () => {

const[data,setdata]=useState([])
const[pages,Setpages]=useState(1)
const[total,setotal]=useState(0)

const getData=(page2)=>{
  axios.get(`http://localhost:3000/todos?_page=${page2}&_per_page=4`).then((res)=>{
    console.log(res.data)
    setdata(res.data.data)
 
    console.log(res.data.pages)
    setotal(res.data.pages)
    
  }).catch((err)=>{
    console.log(err)
  })
}
useEffect(()=>{
  getData(pages);
},[pages])
console.log(pages)



const handClick=(v)=>{
Setpages(v)
}
  return (
    <>
    <div>
{data.map((el)=>
<TodoItem key={el.id}   title={el.title}  stauts={el.stauts} />
)}

    </div>
    <h1>Page:{pages}</h1>
   
    {
      Array(5).fill(0).map((el,i)=>{
        return(
          <button onClick={()=>handClick(i+1)}>{i+1}</button>
        )
      })
    }
    </>
  )
}

export default TodoList

