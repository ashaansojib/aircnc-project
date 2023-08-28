import React from 'react';
import { Link } from 'react-router-dom';

const SingleRoom = ({ room }) => {
    const { name, image, location, date, rating, price } = room;
    return (
        <Link to='/'>
            <div className='p-2'>
                <div className='overflow-hidden rounded-lg'>
                    <img src={image} alt="" />
                </div>
                <div className='flex justify-between items-center py-2'>
                    <h2 className='text-xl font-medium'>{name}</h2>
                    <span>{rating}</span>
                </div>
                <div className='text-gray-700'>
                    <p>{location}</p>
                    <p>{date}</p>
                </div>
                <p>${price} - Per Night</p>
            </div>
        </Link>
    );
};

export default SingleRoom;