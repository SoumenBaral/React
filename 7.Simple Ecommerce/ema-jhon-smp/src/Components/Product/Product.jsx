import React from 'react';
import './product.css'
const Product = ({product}) => {
    const{name,img} = product;
    console.log(product);
    return (
        <div className='product-container'>
            <img src={img } alt="" />
           <h6>{name}</h6>
        </div>
    );
};

export default Product;