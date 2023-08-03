import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
           <button onClick={()=>handleAddToCart(product)} className='AddToCart'>
            Add to Cart
            <FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;