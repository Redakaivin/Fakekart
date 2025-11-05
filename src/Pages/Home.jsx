import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className="page-container">

      <section className="hero">
        <h1 className="hero-title">Shop with us</h1>
        <p className="hero-subtitle">
          Discover the best deals on gadgets, fashion and more. Enjoy genuine products, easy returns and unmatched customer support!
        </p>
        <Link to="/product" className="cta-btn">
          Explore Products
        </Link>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-list">
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2018/09/07/23/58/headphone-3661771_1280.jpg" alt="Product 1" />
            <h3>Wireless Headphones</h3>
            <p>$2499</p>
          </div>
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2016/09/10/21/54/watch-1660232_1280.jpg " alt="Product 2" />
            <h3>Smart Watch</h3>
            <p>$1499</p>
          </div>
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2013/05/31/20/36/sports-shoes-115151_1280.jpg" alt="Product 3" />
            <h3>Sports Shoes</h3>
            <p>$1999</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
