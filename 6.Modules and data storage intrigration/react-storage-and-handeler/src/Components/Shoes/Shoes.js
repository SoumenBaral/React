import React from 'react';
import { multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const Total = multiply(20,30)
    return (
        <div>
            <h4>I have a Shoes Company</h4>
            <p>Total: {Total}</p>
        </div>
    );
};

export default Shoes;