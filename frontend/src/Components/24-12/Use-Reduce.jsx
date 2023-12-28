import { useReducer } from "react"

//srtep-1
const initialState={count:0, username:"Shahabaj", no:"18"}

//step-2
//dispatch=action={type:"increment"}

const Reduce=(state,action)=>{
    switch(action.type){
        case "Increment":
        return{...state, count:state.count+1}

        case "Decrement":
        return{...state, count:state.count-1}
        
        case "Reset":
        return{...state, count:0} 

        case "Changename":
        return{...state, username:"S_k_18"}    
        
        default:
            return state

    }

}


const UseReduce = ()=>{
    //step-1
    const [state, dispatch]=useReducer(Reduce, initialState)
    console.log(state,"state")
    return (
        <div>
            <h1>{state.count}</h1>
            <h1>{state.username}</h1>
            <button onClick={()=>dispatch({type:"Increment"})}>Increment</button><br/>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button><br/>
            <button onClick={()=>dispatch({type:"Reset"})}>Reset</button><br/>
            <button onClick={()=>dispatch({type:"Changename"})}>Change-Name</button><br/>



        </div>
    )
}
export default UseReduce