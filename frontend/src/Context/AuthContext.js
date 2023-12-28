//useContext

import { createContext, useReducer } from "react"

export const MyContext = createContext();

const InitialState={ user:null, Name:'Shahabaj'}

const Reducer=(state , action)=>{
    switch (action.type){
        case "LOGIN":
            return {...state, user:action.payload}

        case "LOGOUT":
            return {...state, user:null}
            
        default:
            return state    
    }
}
//HOC-Higher Order Conponent:-Mean this component accept  propse as a function.  
const AuthContext =({children})=>{
    const[state,dispatch] = useReducer( Reducer , InitialState)
    return(
        <MyContext.Provider value={{state,dispatch}}>{children}</MyContext.Provider>
    )
}
export default AuthContext;