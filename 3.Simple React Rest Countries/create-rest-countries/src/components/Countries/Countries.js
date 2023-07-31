import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
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
        Countries.map(country=><Country img={country.flags.png} name={country.name.common} key={country.cca3} population ={country.population}></Country>)
      }
    </div>
  )
};

export default Countries;