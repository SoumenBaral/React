import React from 'react';

const Country = ({name,population}) => {
    return (
        <div>
            <h3>Name: {name} </h3>
            <h5>population: {population}</h5>
        </div>
    );
};

export default Country;
