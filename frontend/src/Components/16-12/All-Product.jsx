import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from 'axios'
import './../../Styles/product-data.css'

const AllProduct = ()=>{

    const[product,setProduct]=useState([]);
   async function getData(){
        try{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProduct(response.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        // toast.success("Component rendered on Browser...")
        getData();
    },[])
    return(
        <div className="body">

           <h1 className="title">All-Product</h1>

           <div className="maindiv">
            {product.map((itom)=>(
                <div className="products-data">
                    <div><img className="images" src={itom.image}/></div>
                    <div><h5>{itom.title}</h5></div>
                    <div><strong>{itom.price} $</strong><span>Buy</span></div>
                    <div><p className="productinfo">{itom.description}</p></div>
                </div>
            ))}
           </div>
        </div>
    )
}
export default AllProduct