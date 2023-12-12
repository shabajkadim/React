
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


 const DynamicRouting =() =>{
    var router = useNavigate ();
    const[myAge,setMyAge]=useState(25);
    return(
        <div>
            <h1>Dynamic Routing</h1>
            <button onClick={()=>router(`/Use-Params/${myAge}`)}>Routing</button><br/>
        </div>
    )
}
export default DynamicRouting;