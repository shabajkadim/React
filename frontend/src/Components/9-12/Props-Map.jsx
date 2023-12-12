import React from "react";

const PropsMap=( {Name, myAge , changeName,myStudent})=>{
    console.log(Name,"myname",myAge,"Myage",changeName,myStudent)
    return (
        <div>
          <ul>
            {myStudent.map((student)=>(
                <h3>{student}</h3>
            ))}
        </ul>
            <h1>PropMaps</h1>
            <h1>{Name}</h1>
            <button onClick={changeName}>ChnageName</button>
           
        </div>
    )
}
export default PropsMap;