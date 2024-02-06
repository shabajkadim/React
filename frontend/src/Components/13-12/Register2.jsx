import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom'



const RegisterCom =()=>{
    const router = useNavigate();

    const[userData ,setUserData]=useState({ name:"", email:"", password:"", confirmPassword:"" })
    console.log(userData,"- userData")


   async function handleSumit(e){
        e.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword){
            if(userData.password === userData.confirmPassword){
                try{

                    const response = await axios.post('http://localhost:8000/api/v1/auth/register',{userData})

                    // const response={data:{success:true,massage:"Ragistation complete"}}
                    if(response.data.success===true){
                        toast.success(response.data.message)
                        setUserData({name:"",email:"" , password:"", confirmPassword:""})
                        router('/login2')
                    }
                }catch(error){
                    console.log(error)
                    alert(error.response.data.massage)
                }

            }else{
                toast.error("password and confirmoassword not match")
            }
        }else{
            toast.error("All feilds are required")
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
                <input type="password" required onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br/><br/>
                <input type='submit' Value='Register'/>

            </form>
        </div>
    )

   
}
export default RegisterCom;