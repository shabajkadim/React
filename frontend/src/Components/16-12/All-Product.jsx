import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from 'axios'
import './../../Styles/product-data.css'
import { useNavigate } from "react-router-dom"




const AllProducts = ()=>{

    const[product,setProduct]=useState([]);
    const router = useNavigate();



   async function getData(){
        try{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProduct(response.data)
        }catch(error){
            console.log(error)
        }
    }

    function Routing(id){
        
        router(`/single-product/${id}`);
        
    }

    useEffect(()=>{
        // toast.success("Component rendered on Browser...")
        getData();
    },[])

    return(
        <div className="body">

           <h1 className="title">All-Product</h1>

           <div className="maindiv">
            {product.map((product)=>(
                <div onClick={()=>Routing(product.id)} className="products-data">
                    <div><img className="images" src={product.image}/></div>
                    <div><h5>{product.title}</h5></div>
                    <div><strong>${product.price} </strong><span>Buy</span></div>
                    <div><p className="productinfo">{product.description}</p></div>
                </div>
            ))}
           </div>
        </div>
    )
}


export default AllProducts


