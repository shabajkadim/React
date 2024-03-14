import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Registerpage = () => {
    const [userData , setUserData]=useState({name:"" , email:"" , password:"", confirmPassword:""})
    console.log(userData)
    const router=useNavigate()


   async function handleSubmit(e){
    e.preventDefault();

    if(userData.name && userData.email && userData.password && userData.confirmPassword){
        try{
            const response= await axios.post('http://localhost:8000/api/v1/auth/register',{userData} )
            toast.success(response.data.message)
            setUserData({name:"" , email:"" , password:"", confirmPassword:""})
            router('/login4page')
        }catch(error){
            console.log(error)
            return alert(error)
            // return res.send(error)
        }
    }else{
        toast.error("All feild are required")
    }
       
    }

    function handleChange(e){
       setUserData({...userData, [e.target.name]:e.target.value}) 
    }

  return (
    <div>
      <h1>Register-Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :-</label><br/>
        <input type='text' required onChange={handleChange} name='name' value={userData.name} /><br/>
        <label>Email :-</label> <br/>
        <input type='email' required onChange={handleChange} name='email' value={userData.email} /> <br/>
        <label >Password :-</label> <br/>
        <input type='password' required onChange={handleChange} name='password' value={userData.password} /> <br/>
        <label>ConfirmPassword</label><br/>
        <input type='password' required onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br/>
        <input type='submit' value="Register" /> <br/> 
      </form>
    </div>
  )
}

export default Registerpage
