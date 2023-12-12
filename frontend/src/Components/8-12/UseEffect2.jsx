import { useEffect, useState } from "react";

function UseEffect2(){

    const[counter, setCounter]=useState(0);

    const[counter2, setCounter2]=useState(10);



    function Increment(){ 
        if(counter < 10){
        setCounter((prevalue) => prevalue + 1)
        }
    } 
    function Decrement(){
        if(counter > 0){
        setCounter((prevalue)=>prevalue -1)
        }
    }

    function Test(){
        if(counter2 < 50){
        setCounter2((value)=> value + 5 )
        }
    }
    function Decrement2(){
        if(counter2 > 0){
        setCounter2((value)=>value - 5)
        }
    }

    useEffect(()=>{
        alert ("Hii from empty Dependecy-UseEffect") 
    },[]);

   
    return(
        <div>
            <h1>UseEffect2</h1>
            <h1>Counter 1 :-{counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <h1>Counterc 2 :- {counter2}</h1>
            <button onClick={Test}>+</button>
            <button onClick={Decrement2}> -</button>
        </div>
    )
}
export default UseEffect2; 