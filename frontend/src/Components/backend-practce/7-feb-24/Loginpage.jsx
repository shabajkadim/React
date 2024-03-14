import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login4page = () => {
    const [loginData, setLoginData]=useState({email:"" , password:""})
    console.log(loginData);

    const router =useNavigate()

   async function handleSubmit(e){
    e.preventDefault();
        if(loginData.email && loginData.password){
            try{
                // const response= await axios.post('http://localhost:8000/api/v1/auth/login',{loginData})
                const response={data:{success:true, message:"login successful"}}
                toast.success(response.data.message)
                setLoginData({email:"" , password:""})
                router('/')
            }catch(error){
                console.log(error)
                // res.send(error)
                return alert(error)
            }

        }else{
            return toast.error("All fieleds are required")
        }
    }

    function handleChange(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <h1>Login page </h1>
      <form onSubmit={handleSubmit} >
        <label>Email :-</label><br/>
        <input type='email' required onChange={handleChange}  name='email' value={loginData.email} /><br/>
        <label>Password :-</label> <br/>
        <input type='password' required onChange={handleChange} name='password' value={loginData.password} /><br/>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Login4page
