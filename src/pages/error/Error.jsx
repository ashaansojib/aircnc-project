import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center py-2 my-container'>
            <p className='pb-4'>You are Mad Now?!</p>
            <Link to="/" className='py-2 px-3 bg-red-500 text-white'>Home</Link>
        </div>
    );
};

export default Error;