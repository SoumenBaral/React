import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Products = [
    {name:'lenovo',price:55000},
    {name:'Hp ',price:125000},
    {name:'Apple Watch',price:5000},
    {name:'Mobile',price:25000},
    {name:'fan',price:1100},
    {name:'charger',price:500},
    {name:'water Bottol ',price:100},
    {name:'gasLight',price:10},
    
]
function App() {
  const [count, setCount]=useState(0);
  const IncreaseCount =()=>setCount(count+1);
  const DecreaseCount =()=>setCount(count-1);
  return (
    <div className="App">
      {/* {
        Products.map(product=><Product name={product.name} price={product.price}></Product>)
      } */}
      <h1>Count :  {count} </h1>
      <button onClick={IncreaseCount}>Increase  </button>
      <button onClick={DecreaseCount}>Decrease  </button>


    </div>
  );
}
// function Product ({name, price}){
//   return(
//     <div className='product'>
//        <h1>Name : {name}</h1>
//        <p>Price : {price} </p>
//     </div>
//   )
// }
export default App;
