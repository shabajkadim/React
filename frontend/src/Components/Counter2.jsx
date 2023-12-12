import { useState } from "react";


function Counter2 (){

    const[value, setValue]=useState(10);
    
    const[info , setInfo]=useState(true);

    function Change() {
        setInfo ((prevalue)=>!prevalue);
    }

    function Increment(){
        if(value < 20 ){
        setValue((firstvalue)=>firstvalue + 1) 
        }
    }
    function Decrement(){
        if(value > 0){
        setValue((firstvalue)=>firstvalue-1)
        }
    }
    function Reset(){
        setValue(0)
    }

    return(
        <div>
            <h1>Conter2- {value}</h1>
            <button onClick={Increment}>+</button><br/>
            <button onClick={Decrement}>-</button><br/>
            <button onClick={Reset}>Reset</button><br/>
            {info ? <button onClick={Change}>Register</button> : <button onClick={Change}>Login</button>}
        </div>
    )
}
export default Counter2;