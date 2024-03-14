import axios from "axios";
import React,  { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../helper/AxiosConfig";



const SingleProduct = () =>{
    const[productData , setProductData]=useState({});
    console.log(productData)

    const {id} =useParams();
    console.log(id, "id")

    async function getSingleProductData(){
        try{
              const response = await api.post('/product/get-single-product',{productId:id});
              // console.log(response.data)
              if(response.data.success){
             setProductData(response.data.product)

              }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(id){
            getSingleProductData()
        }
        },[id])


    return(
        <div >
            <h1 >{productData?.title}</h1>
            <img  src={productData?.image}/> 
            <div><strong>${productData?.price} Buy</strong></div>
            <div><p>{productData?.category}</p></div>
            <div><p>{productData?.quantity}</p> </div>
        </div>
    )
}
export default SingleProduct


