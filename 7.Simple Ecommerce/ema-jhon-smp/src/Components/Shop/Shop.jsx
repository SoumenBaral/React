import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,SetProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>SetProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        console.log('Product added ',product.name);
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
            </div>
        </div>
    );
};

export default Shop;