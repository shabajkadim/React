import { useState } from "react";
import {useNavigate} from 'react-router-dom'



const RegisterCom =()=>{
    const router = useNavigate();

    const[userData ,setUserData]=useState({ name:"", email:"", password:"", confirmpassword:"" })
    console.log(userData,"- userData")


    function handleSumit(e){
        e.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword){
            if(userData.password === userData.confirmpassword){
                try{
                    const response={data:{success:true,massage:"Ragistation complete"}}
                    if(response.data.success===true){
                        alert(response.data.massage)
                        setUserData({name:"",email:"" , password:"", confirmpassword:""})
                        router('/login2')
                    }
                }catch(error){
                    console.log(error)
                    alert(error.response.data.massage)
                }

            }else{
                alert("password and confirmoassword not match")
            }
        }else{
            alert("All feilds are required")
        }
       

    }

    function handleChange(e){
        // console.log(e.target.value , e.target.name)
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <h1>Register-Form</h1>
            <form onSubmit={handleSumit}>
                <label>Name :-</label>
                <input type='text' required onChange={handleChange} name='name' value={userData.name} /><br/><br/>
                <label>Email:-</label>
                <input type="email" required onChange={handleChange} name='email' value={userData.email}/><br/><br/>
                <label>Password:-</label>
                <input type="password" required onChange={handleChange} name='password' value={userData.password} /><br/><br/>
                <label>Confirm Password:-</label>
                <input type="password" required onChange={handleChange} name='confirmpassword' value={userData.confirmpassword} /><br/><br/>
                <input type='submit' Value='Register'/>

            </form>
        </div>
    )

   
}
export default RegisterCom;