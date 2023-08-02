import React from 'react';

const Cosmetic = ({cosmetic}) => {
const {name,price} = cosmetic;
    return (
        <div>
            <h3>Buy This : {name}</h3>
            <p>Only for :  {price}</p>
        </div>
    );
};

export default Cosmetic;