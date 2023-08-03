import React from 'react';
import './product.css'
const Product = ({product}) => {
    const{name,img} = product;
    console.log(product);
    return (
        <div className='product-container'>
            <img src={img } alt="" />
            <h1>I am from product {name}</h1>
        </div>
    );
};

export default Product;