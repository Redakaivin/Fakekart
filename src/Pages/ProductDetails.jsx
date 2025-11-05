import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
function ProductDetails() {
    let param=useParams();

     let navigate =  useNavigate();
    console.log(param);

    let [product,setproduct]=useState({})

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${param.id}`).then((data)=>{
            data.json().then((res)=>{
                setproduct(res)
            })
        })
    },[])


  return (
    <div>
      <h1>Product Detail</h1>
      <img src={product.image}></img>
      <h1>{product.title}</h1>
      <h4>{product.description}</h4>
      <h3>{product.price}</h3>
 
 
    <button onClick={()=>(navigate('/product'))} > Back  </button>
    </div>
  )
}

export default ProductDetails
