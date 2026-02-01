import React, { useState, useEffect } from 'react'
import './Products.css'
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'

function Products() {
    let [products, setproducts] = useState([])

    // Below we added spinner 
    let [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((res) => {
            res.json().then((result) => {
                setproducts(result);
                setLoading(false);
                // this is the condition if products are loaded or not
            })
        })
    }, [])

    return (
        <div className='product-container'>
            {isLoading && <Loading />}
            {/* and above the spinner condiiton gets checked */}
            {
                products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default Products
