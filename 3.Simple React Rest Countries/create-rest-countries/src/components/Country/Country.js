import React from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(img);
    return (
        <div className='country'>
            <img src={country.flags.png} alt="" />
            <h3>Name: {country.name.common} </h3>
            <h5>population: {country.population}</h5>
            
        </div>
    );
};

export default Country;
