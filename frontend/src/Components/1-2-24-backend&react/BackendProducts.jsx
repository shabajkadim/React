import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const BackendProducts = () => {
    const [allProductData, setAllProductData] = useState([]);
    const [loading, setloading] = useState(true)

    async function GettingData(){
        try {
            const response = await axios.get('http://localhost:8000/api/v1/product/get-product');
            setAllProductData(response.data);
            console.log(allProductData);   // here console will giv empty values because state takes time to update . for that i have created new useeffect if it changes then it will log it 
            setloading(false)
        } catch (error) {
            toast.error(error.response.data.error)
        }
       
    }

    useEffect(()=>{
        setloading(true)
        GettingData()
    }, [])

    useEffect(() => {
      
        console.log(allProductData);
    }, [allProductData])
    
  return (
    <div className='backendImpDiv'>
        {loading? <div className='loading'>Loading</div>: 
        
        
        <div className='MainContainer'>
            {allProductData.map((data, index)=>(
                <div className='ContainerDiv' key={index}>
                                        <div className='BackImgDiv'>
                    <img className='BackImg' src={data.image} alt={data.name} />
                    </div>
                    <div>
                    <p className='BackPara'><span>Name :</span> {data.name}</p>
                    </div>
                    <div>
                    <p className='BackPara'><span>Price :</span> ₹{data.price}</p>
                    </div>
                    <div>
                    <p className='BackPara'><span>Category :</span> {data.category}</p>
                    </div>
                    <div>
                    <p className='BackPara'><span>Quantity :</span> {data.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
        
        }
    </div>
  )
}

export default BackendProducts



