const addToDb =(id)=>{
    let shoppingCart= {};
   const storedCart = localStorage.getItem('Shopping-Cart');
   if(storedCart){
    shoppingCart= JSON.parse(storedCart)
   }
    const Quantity = shoppingCart[id];
    if(Quantity){
       
        const newQuantity =Quantity +1; 
        shoppingCart[id] = newQuantity;
    } 
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem("Shopping-Cart",JSON.stringify(shoppingCart))
}
const RemoveDB =id=>{
    const storedCart = localStorage.getItem('Shopping-Cart');
    if(storedCart){
     const  shoppingCart= JSON.parse(storedCart);
     if(id in shoppingCart){
        delete shoppingCart[id];
        console.log('Deleted from Shopping Cart');
        localStorage.setItem("Shopping-Cart",JSON.stringify(shoppingCart))
     }
    }
}
const removeShoppingCart=()=>{
localStorage.removeItem('Shopping-Cart');
}
export {
    addToDb,
    RemoveDB,
    removeShoppingCart
}