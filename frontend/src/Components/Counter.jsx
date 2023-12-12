import { useState } from "react";


function Counter(){
    const [counter , setCounter] = useState(0);

    const [isLoggedIn , setIsLoggedIn] = useState(false);

    function Change(){
        setIsLoggedIn ((prevalue)=>! prevalue);
    }

     

    function Increment (){
     
        if (counter < 10 ){
        setCounter ((prevalue)=>prevalue+1)
        }

    }

    function Decrement (){
        if(counter > 0){
        setCounter ((prevalue)=>prevalue-1)
        }
    }

    function Test (){
        setCounter ( (prevalue)=>prevalue+5)
    }

    function Detest(){
        setCounter ( (prevalue) => prevalue-5)
    }

    console.log(counter,"-counter")
    return(
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={Increment}>+</button><br/><br/>
            <button onClick={Decrement}>-</button><br/><br/>
            <button onClick={Test}>+</button><br/><br/>
            <button onClick={Detest}>-</button><br/><br/>
            {isLoggedIn ? <button onClick={Change}>Logout</button> : <button onClick={Change} >Login</button>}<br/><br/>
        </div>
    )
}
export default Counter;
