import { useEffect, useState } from "react";


function UseEffect(){

    const [counter , setCounter]=useState(0);
    const [counter2 , setCounter2]=useState(100);

    function Increment(){
        setCounter((prevalue)=>prevalue + 1)
    }

    function Increment2(){
        setCounter2((prevalue)=>prevalue + 1)
    }

    function Reset(){
        setCounter(0)
        setCounter2(0)
    }

    useEffect(()=>{
        alert ("Hello frome no-dependecy - use-Effect ")
    });

    return(
        <div>
            <h1>UseEffect</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button><br/>
            <h1>Counter2 : {counter2}</h1><br/>
            <button onClick={Increment2}>+</button><br/><br/>
            <button onClick={Reset}>Reset</button><br/><br/>
        </div>
    )
}
export default UseEffect;