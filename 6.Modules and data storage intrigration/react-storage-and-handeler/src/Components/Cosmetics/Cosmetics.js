import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const result = add(50,30);
    const [cosmetics , setCosmetics] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome to my Cosmetic Store </h1>
            <p>Result : {result}</p>
            {
                cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;