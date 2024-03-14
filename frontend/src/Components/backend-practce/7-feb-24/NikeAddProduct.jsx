import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Router } from 'react-router-dom';

const NikeAddProduct = () => {
    const [addProduct,setAddProduct]=useState({title:"" , image:"" , price:"" , category:"" , quantity:""});
    const router=Router()

    async function handleSubmit(e){
        e.preventDefault();
        if(addProduct.title && addProduct.image && addProduct.price && addProduct.category && addProduct.quantity){
            try{
                const response=await axios.post('http://localhost:8000/api/v1/product/add-product',{addProduct})
                // const response={data:{success:true, message:"Product added successful"}}
                toast.success(response.data.message)
                setAddProduct({title:"", image:"" , price:"" , category :"", quantity:""})
                router('/')
            }catch(error){
                console.log(error)
                return alert(error)
            }
        }else{
            return toast.error("all feild are required")
        }
    }

    function handleChange(e){
        setAddProduct({...addProduct,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <h1>Product-Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Title :-</label> <br/>
        <input type='text' required onChange={handleChange} name='title' value={addProduct.title} /> <br/>
        <label>Image :-</label> <br/>
        <input type='url'  required onChange={handleChange} name='image ' value={addProduct.image} /> <br/>
        <label>Price :-</label> <br/>
        <input type='number' required onChange={handleChange} name='Price' value={addProduct.price} /><br/>
        <label>Category :-</label><br/>
        <input type='text' required onChange={handleChange} name='category' value={addProduct.category} /> <br/>
        <label>Quantity :-</label> <br/>
        <input type='number' required onChange={handleChange} name='quantity' value={addProduct.quantity} /> <br/>
        <input type='submit' value='Add-Product' />
      </form>
    </div>
  )
}

export default NikeAddProduct
