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
    return (
        <div className='Shop-container'>
            <div className="products-Container">
                {
                    products.map(product=><Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="Cart-Container">
                <h3>Cart is coming Here </h3>
            </div>
        </div>
    );
};

export default Shop;