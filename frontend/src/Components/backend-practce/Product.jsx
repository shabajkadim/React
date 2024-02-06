import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


const Product = () => {
    const [data ,setData]=useState({title:"", image:"", price:"", category:"", quantity:''  })

    async function handleSubmit(e){
        e.preventDefault()
        if(data.title && data.image && data.price && data.category && data.quantity){
            try{
                const response = await axios.post("http://localhost:8000/api/v1/product/add-product",{data})
                    toast.success(response.data.message)
                    setData({title:"", image:"", price:"", category:"", quantity:''  })
                
            }catch(error){
                toast.error(error.response.data.error)
                console.log(error , "error")
            }
        }else{
                toast.error("all filds are require")    
    }
}
     function handleChange(e){
        setData({...data,[e.target.name]:e.target.value})
     }
  return (
    <div>
        <h1>Add-product</h1>
        <form onSubmit={handleSubmit}>
            <label>TITLE :- </label><br/>
            <input type='text'  onChange={handleChange} name='title' value={data.title} /> <br/>
            <label>IMAGE :- </label><br/>
            <input type='url'  onChange={handleChange}  name='image' value={data.image} /> <br/>
            <label>PRICE :- </label><br/>
            <input type='number'  onChange={handleChange}  name='price' value={ data.price} /> <br/>
            <label>CATEGORY :- </label><br/>
            <input type='text'  onChange={handleChange} name='category' value={data.category} /> <br/>
            <label>QUANTITY:- </label><br/>
            <input type='number'   onChange={handleChange}  name='quantity' value={data.quantity} /> <br/>
            <input type='submit' value='Add-Product' />
        </form>
    </div>
  )


}

export default Product
