import { createContext, useState } from "react";

 export const AuthContext1=createContext()

 export const AuthContextProvider=({children})=>{
   const obj={
      title:"",
      status:false,
    
    }
    const [todos,setTodos]=useState(obj)

    const addTodo = (newdata) => {
        setTodos(newdata)
      };
   return <AuthContext1.Provider value={{todos,addTodo}}>{children}</AuthContext1.Provider>
}
