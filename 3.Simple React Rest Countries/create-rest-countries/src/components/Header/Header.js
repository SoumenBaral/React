import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>........Welcome to my React World......</h1>
            <ul className='Menu'>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Team</li>
            </ul>
        </div>
    );
};

export default Header;