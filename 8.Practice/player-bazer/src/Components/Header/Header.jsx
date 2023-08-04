import React from 'react';

const Header = () => {
    return (
        <div className='bg-black text-white md:flex justify-between  items-center'>
            <div className='flex justify-center items-center mx-8'>
            <img className='w-[100px]' src="https://i.ibb.co/ZTQ3jR6/logo.jpg" alt="logo" />
            <h3 className='text-3xl text-orange-500'>Player-Bazar</h3>
            </div>
            <div>
                <ul className='text-lg flex justify-center items-center gap-4 mx-10 cursor-pointer'>
                    <li className=' hover:text-blue-800  font-semibold'>Home</li>
                    <li className=' hover:text-blue-800  font-semibold'>About</li>
                    <li className=' hover:text-blue-800  font-semibold'>Manager</li>
                    <li className=' hover:text-blue-800  font-semibold'>Blog</li>
                    <li className=' hover:text-blue-800  font-semibold'>Login</li>

                </ul>
            </div>
        </div>
    );
};

export default Header;