import React, { useState ,useEffect, useContext } from 'react'
import './Products.css'
import { Link, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { CartContext } from './CartContext'
import { UserContext } from './UserContext'



function Products() {
    let[products,setproducts]=useState([])
    
  // Below we added spinner 
    let [isLoading, setLoading]= useState(true)
    let{cart,setcart}=  useContext(CartContext);
    let {user}=useContext(UserContext);
    let navigate=useNavigate();
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>{
            res.json().then((result)=>{
                setproducts(result);
                setLoading(false); 
                // this is the condition if products are loaded or not
            })
        })
    },[])

    function addToCart(product){
        if(user==null){
            alert("please login first")
            navigate('/register')
        }
        
        let newcart=[...cart, product];
        setcart(newcart);    
        console.log(cart);
    }

    return (
        <div className='product-container'>
            {isLoading && <Loading/>}
            {/* and above the spinner condiiton gets checked */}
            {
                products.map((product)=>{
                    return(
                        <div className='product' key={product.id}>
                            <img src={product.image} className='productimg'/>
                            <h3>{product.title}</h3>
                            <h3>{product.category}</h3>
                            <h3>{product.price}</h3>
                            <Link to={`/detail/${product.id}`}>Read More....</Link>
                            <button onClick={()=>{addToCart(product)}}> ADD TO CART  </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
