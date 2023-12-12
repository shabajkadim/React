import { useEffect, useState } from "react";

  

function UseEffect3 (){
    const[counter,setCounter]=useState(0);
    const [Counter2 ,setCounter2]=useState(10);

    function Increment(){
        if(counter <20){
        setCounter((prevalue)=>prevalue +1)
        }
    }

    function Decrement (){
        if(counter > 0){
        setCounter((sk)=>sk - 1)
        }
    }

    function Increment2(){
        setCounter2((prevalue)=>prevalue+1)
    }

    function Decrement2(){
        setCounter2((prevalue)=>prevalue-1)
    }

    useEffect(()=>{
        alert ("Hii from single-dependecy - use-Effect ")
    },[counter])

    return(
        <div>
            <h1>UseEffcet-3 </h1>
            <h1>Counter-: {counter}</h1>
            <button onClick={Increment}>+</button><br/>
            <button onClick={Decrement}>-</button>
            <h1>Counter2 - {Counter2}</h1>
            <button onClick={Increment2}>+</button><br/>
            <button onClick={Decrement2}>-</button>
        </div>
    )
}  
export default UseEffect3;