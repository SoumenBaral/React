import React from 'react';
import './Country.css'
const Country = ({name,population,img}) => {
    console.log(img);
    return (
        <div className='country'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h5>population: {population}</h5>
            
        </div>
    );
};

export default Country;
