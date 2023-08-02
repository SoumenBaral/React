import React from 'react';
import './Cosmetic.css'
const Cosmetic = ({cosmetic}) => {
const {name,price,id} = cosmetic;
const AddToCart=(id)=>{
    console.log(id);
}
    return (
        <div className='product'>
            <h3>Buy This : {name}</h3>
            <p>Only for :  {price}</p>
            <button onClick={()=>AddToCart(id)}>Add to Cart </button>
        </div>
    );
};

export default Cosmetic;