//useContext

import axios from "axios";
import { createContext, useEffect, useReducer } from "react"

export const MyContext = createContext();

//action:{type:"LOGIN",payload:{name:"virat",email:"virat@gmail.com"}}
const InitialState={ user:null, name:'Shahabaj'}

const Reducer=(state , action)=>{
    switch (action.type){
        case "LOGIN":
            return {...state, user:action.payload}

        case "LOGOUT":
            localStorage.removeItem()
            return {...state, user:null}
            
        default:
            return state    
    }
}
//HOC-Higher Order Conponent:-Mean this component accept  propse as a function.  
const AuthContext =({children})=>{
    const[state,dispatch] = useReducer( Reducer , InitialState)

    async function getCurrenUserData(token){
        try{
            const response= await axios.post('http//localhost:8000/api/v1/auth/get-current-user',{token})
            // const response = {data: {success:true , user:{name:"Shahabaj" , email:"Shahabaj18@gmail.com"} } }
            if(response.data.success){
                dispatch({type:"LOGIN" , payload:response.data.user})
            }
        }catch(error){
            dispatch({type:"LOGOUT"})
            localStorage.removeItem('my-token')

            console.log(error.response.data.message)
        }
    }
    useEffect(()=>{
        const token= JSON.parse(localStorage.getItem('my-token'))
        if(token){
            getCurrenUserData(token);
        }
    },[])
    return(
        <MyContext.Provider value={{state,dispatch}}>{children}</MyContext.Provider>
    )
}
export default AuthContext;