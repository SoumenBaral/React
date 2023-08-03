import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,SetProducts] =useState([]);
    const [carts,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>SetProducts(data))
    },[])
    useEffect(()=>{
        console.log(products);
        const storedCart = getShoppingCart();
        const saveCart =[];
        // console.log(storedCart);
        for(const id in storedCart){
            const savedProduct = products.find(product=>id === product.id);
           if(savedProduct){
                const Quantity = storedCart[id];
                console.log(savedProduct,Quantity);
                savedProduct.quantity=Quantity;
                saveCart.push(savedProduct);
           }
           
        }
        setCart(saveCart);
    },[products])
    const handleAddToCart=(product)=>{
        const newCart=[...carts,product]
        setCart(newCart);
        addToDb(product.id);
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