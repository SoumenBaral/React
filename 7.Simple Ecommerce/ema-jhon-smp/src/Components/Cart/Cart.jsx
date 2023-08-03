import React from 'react';
import './Cart.css'
const Cart = ({carts}) => {
    let price =0;
    let TotalShipping = 0;
    for(let cart of carts){
        price+=parseInt(cart.price);
        TotalShipping +=cart.shipping;
    }
    const totalTax =price*7/100;
    const allTotal = price+TotalShipping+totalTax;
    return (
        <div className='carts'>
            <h4 className='Order'>Order Summary</h4>
            <p>selected Item: {carts.length}</p>
            <p>Total Price: ${price}</p>
            <p>Shipping: ${TotalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h5 className='gand'>Grand Total: ${allTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;