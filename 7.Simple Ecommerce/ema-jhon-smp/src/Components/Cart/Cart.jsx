import React from 'react';
import './Cart.css'
const Cart = ({carts}) => {
    let TotalPrice =0;
    let TotalShipping = 0;
    let Quantity = 0;
    for(let cart of carts){
        if(cart.quantity===0)
        {
            cart.quantity =1;
        }
        // cart.quantity =cart.quantity||1;
        // can not do it all 

        TotalPrice+=parseInt(cart.price)*cart.quantity;
        TotalShipping +=cart.shipping*cart.quantity;
        Quantity +=cart.quantity;
    }
    const totalTax =TotalPrice*7/100;
    const allTotal = TotalPrice+TotalShipping+totalTax;
    return (
        <div className='carts'>
            <h4 className='Order'>Order Summary</h4>
            <p>selected Item: {Quantity}</p>
            <p>Total Price: ${TotalPrice}</p>
            <p>Shipping: ${TotalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h5 className='gand'>Grand Total: ${allTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;