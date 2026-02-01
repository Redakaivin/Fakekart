import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

function ProductCard({ product }) {
    const { cart, setcart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function addToCart(product) {
        if (user == null) {
            alert("please login first");
            navigate('/register');
            return;
        }

        let newcart = [...cart, product];
        setcart(newcart);
        console.log(cart);
    }

    return (
        <div className='product'>
            <img src={product.image} className='productimg' alt={product.title} />
            <h3>{product.title}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <Link to={`/detail/${product.id}`}>Read More....</Link>
            <button onClick={() => { addToCart(product) }}> ADD TO CART </button>
        </div>
    );
}

export default ProductCard;
