import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products,SetProducts] =useState([]);
    const [carts,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>SetProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...carts,product]
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
                <Cart carts={carts}></Cart>
               
            </div>
        </div>
    );
};

export default Shop;