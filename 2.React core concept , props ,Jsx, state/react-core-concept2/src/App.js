import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  console.log(users);
  return (
    <div className="App">
      {/* {
        Products.map(product=><Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <h1>Count :  {count} </h1>
      <button onClick={IncreaseCount}>Increase  </button>
      <button onClick={DecreaseCount}>Decrease  </button> */}
      {
       users.map(user=><User name={user.name} email={user.email} key={user.id}></User>)
      
      }
     

    </div>
  );
}

function User ({name, email}){
    return(
      <div>
        <h1>Name: {name}</h1>
        <p>Email : {email}</p>

      </div>
    )
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
