import React from 'react';
import './product.css'
const Product = ({product,handleAddToCart}) => {
    const{name,img,price,seller,ratings} = product;
    
    
    return (
        <div className='product-container'>
            <img src={img } alt="" />
           <div className='product-info'>
                <h6 className='Cart-name'>{name}</h6>
                <p className='product-price'>Price: ${price} </p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
           </div>
           <button onClick={()=>handleAddToCart(product)} className='AddToCart'>Add to Cart</button>
        </div>
    );
};

export default Product;