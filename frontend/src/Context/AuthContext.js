//useContext

import { createContext, useEffect, useReducer } from "react"

export const MyContext = createContext();

const InitialState={ user:null, name:'Shahabaj'}

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

    async function getCurrenUserData(){
        try{
            // const response= await axios.post('http//localhost:8000/get-current-user',{token})
            const response = {data: {success:true , user:{name:"Shahabaj" , Email:"Shahabaj18@gmail.com"} } }
            if(response.data.success){
                dispatch({type:"LOGIN" , payload:response.data.user})
            }
        }catch(error){
            console.log(error.response.data.message)
        }
    }
    useEffect(()=>{
        const token= JSON.parse(localStorage.getItem('my-token'))
        if(token){
            getCurrenUserData();
        }
    },[])
    return(
        <MyContext.Provider value={{state,dispatch}}>{children}</MyContext.Provider>
    )
}
export default AuthContext;