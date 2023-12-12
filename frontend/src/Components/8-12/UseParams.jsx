import React from "react"
import { useNavigate, useParams } from "react-router-dom";



 const UseParams = () =>{
    const router=useNavigate();
    const {age} =useParams()
    return (
        <div>
            <h1>Use-Params-: {age}</h1>
            <button onClick={()=>router('/Register')}>Click !</button>
        </div>
    )
}
export default UseParams;
