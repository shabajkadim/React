import { useEffect, useState } from "react";


function UseEffect4(){

    let [counter,setCounter]=useState(10);
    var [counter2, setCounter2]=useState(0);

    function Increment(){
        if(counter < 100){
        setCounter((prevalue)=>prevalue + 10)
        }
    }

    function Decrement(){
        if(counter >0){
            setCounter((prevalue)=>prevalue-1)
        }
    }

    function Incremen2(){
        if(counter2 < 100){
            setCounter2((prevalue)=>prevalue+5)
        }
    }

    function Decrement2(){
        if(counter2 > 0){
            setCounter2((value)=>value - 5)
        }
    }

    useEffect (()=>{
        alert("Hii from Use-Effect Multiple Dependecy")
    },[counter,counter2])
    return(
        <div>
            <h1>UseEffect-4</h1>
            <h1>counter :- {counter}</h1>
            <button onClick={Increment}>+</button><br/>
            <button onClick={Decrement}>-</button><br/>
            <h1>Counter2 :-{counter2}</h1>
            <button onClick={Incremen2}>+</button><br/>
            <button onClick={Decrement2}>-</button>
        </div>
    )
}
export default UseEffect4;