import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { increment,decremnet,reset} from "./action";

const ReduxCounter=()=>{
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>dispatch(increment())}>INCREMENT</button>
            <button onClick={()=>dispatch(decremnet())}>DECREMENT</button>
            <button onClick={()=>dispatch(reset())}>RESET</button>

        </div>
    )
}
export default ReduxCounter;