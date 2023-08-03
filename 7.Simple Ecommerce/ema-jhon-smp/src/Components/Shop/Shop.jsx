import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,SetProducts] =useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>SetProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
    }
    return (
        <div className='Shop-container'>
            <div className="products-Container">
                {
                    products.map(product=><Product 
                        product={product} 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="Cart-Container">
                <h5>Order Summary</h5>
                <p>selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;