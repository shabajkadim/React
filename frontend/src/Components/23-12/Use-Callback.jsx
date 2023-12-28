import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () =>{

    const[counter,setCounter]=useState(0);
    const[todos,setTodos]=useState([]);

    // function AddTodo(){
    //     setTodos((t)=>[...t, "New Todo"])
    // }

    const AddTodo = useCallback (()=>{
        setTodos((t)=>[...t,"New Todo"])
    },[todos])

    const Increment=()=>{
        setCounter((value)=>value+1);
    }
    return (
        <div>
            <div>
                <h1>Counter  : {counter}</h1><br/>
                <button onClick={Increment}>+</button>
            </div>
            <Todos todos={todos} AddTodo={AddTodo}/>
        </div>
    )
}
export default UseCallback;