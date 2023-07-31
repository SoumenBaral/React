import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries (){
  const[Countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return(
    <div>
      <h1>Visiting Every Country in the World</h1>
      <p>All Countries : {Countries.length}</p>
      {
        Countries.map(country=><Country name={country.name.common} key={country.cca3} population ={country.population}></Country>)
      }
    </div>
  )
}
export default App;
