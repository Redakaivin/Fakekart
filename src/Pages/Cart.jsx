import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import { Link } from 'react-router-dom'
function Cart() {

    let {cart,setcart}=useContext(CartContext);

    function remove(product){


             let filterdata = cart.filter((v)=> {

            return (v!=product);

        })

        setcart(filterdata);

        console.log(filterdata);

    }
  return (
    <div>

       {
        cart.map((product)=>{
            return (
                  <div className='product' key={product.id}>
                    <img src={product.image} className='productimg'/>
                    <h3>{product.title}</h3>
                    <h3>{product.category}</h3>
                    <h3>{product.price}</h3>
                    <Link to={`/detail/${product.id}`}>Read More....</Link>
                    <button onClick={()=>remove(product)}> REMOVE </button>
                    
                    </div>
            )
        })
       }
  </div>

  )
}

export default Cart;
