import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products,SetProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>SetProducts(data))
    },[])
    console.log(products);
    return (
        <div className='Shop-container'>
            <div className="product-Container">
                <h2>Products is coming here : {products.length}</h2>
            </div>
            <div className="Cart-Container">
                <h3>Cart is coming Here </h3>
            </div>
        </div>
    );
};

export default Shop;