const add =(first ,Second)=>{
    return first + Second;
}

const multiply =(first,Second)=>first*Second;
const getTotalPrice=products=>{
    const reducer = (previous,current )=>previous +current.price;
    const total = products.reduce(reducer,0);
    return total;
}
export {
    add,
    multiply,
    getTotalPrice as getTotal
} 