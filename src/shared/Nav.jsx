import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='p-4'>
            <div className='my-container grid grid-cols-3 justify-between items-center'>
                <div>
                    <Link to="/"><img src="/logo.PNG" alt="" /></Link>
                </div>
                <div className='flex justify-between items-center col-span-2'>
                    <div className='flex gap-3'>
                        <div>
                            <input type="text" name="" placeholder='Search Location' className='p-2 border rounded-full' id="" />
                        </div>
                        <button className='py-2 px-3 rounded-sm bg-red-500'>Search</button>
                    </div>
                    <div>
                        <button className='py-2 px-3 rounded-sm bg-red-500'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;