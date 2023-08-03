import React from 'react';
import './Cart.css'
const Cart = ({carts}) => {
    console.log(carts);
    let price =0;
    for(let cart of carts){
        console.log(cart);
        price+=parseInt(cart.price);
    }
    return (
        <div className='carts'>
            <h4 className='Order'>Order Summary</h4>
            <p>selected Item: {carts.length}</p>
            <p>Total Price: ${price}</p>
            <p>Shipping Charge: $5000</p>
            <p>Tax: $114</p>
            <h5 className='gand'>Grand Total: $1559</h5>
        </div>
    );
};

export default Cart;