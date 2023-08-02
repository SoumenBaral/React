const addToDb =(id)=>{
    
    const Quantity = localStorage.getItem(id);
    if(Quantity){
        console.log('Already Exist');
        const newQuantity =parseInt(Quantity)+1; 
        localStorage.setItem(id,newQuantity);
    } 
    else{
        console.log('New Item added');
        localStorage.setItem(id,1);
    }
}

export {addToDb}