import React from 'react';
import { add } from '../../utilities/Calculate';

const Cosmetics = () => {
    const result = add(50,30);
    return (
        <div>
            <h1>Welcome to my Cosmetic Store </h1>
            <p>Result : {result}
            </p>
        </div>
    );
};

export default Cosmetics;