import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './../../Styles/back-product.css'
import { useNavigate } from 'react-router-dom'

const ReadProductData = () => {
const [products,setProducts]=useState([])
console.log(products,"product")
const router=useNavigate()

 async function getProduct(){
  try{
    const response =await axios.get('http://localhost:8000/api/v1/product/read-product' )
    if(response?.data.success){
      setProducts(response.data.products)
    }    
  }catch(error){
    console.log(error)
  }
  }

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>
      <h1>All-Product</h1>
      {products?.length? <div className='parenatdiv'>
        {products?.map((product)=>(
          <div className='chailddiv' onClick={()=>router(`/single-product/${product._id}`)} > 
            <img className='image' src={product.image} /> 
            <h2>{product.title}</h2>
            <h3>${product.price}  </h3>
            <h3>{product.category}</h3>
            <h3> {product.quantity}</h3>
          </div>
          
        ))}
      </div> : <div>Loading...</div>}
      
    </div>
  )
}

export default ReadProductData
