import React from "react";
import './../../Styles/images.css'



const MapObject=({myStudentData})=>{
    console.log(myStudentData,"player")

    return(
        <div>
           
            {myStudentData.map((studentData)=>(
                <div >
                    <img className="img" src={studentData.image}/>
                    <h1>{studentData.name}</h1>
                    <h1>{studentData.number}</h1>
                </div>
            ))}
             <h1>Map-Object</h1>
        </div>
    )
}
export default MapObject;