import React, { useContext } from 'react';
import { RoomProviderContext } from '../providers/RoomProvider';

const Header = () => {
    const { setRooms } = useContext(RoomProviderContext);


    const handleButtonClick = (location) => {
        // getLocationName(location)
        fetch(`http://localhost:9988/resorts-in/${location}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }

    return (
        <div className='my-container'>
            <div className='space-x-2'>
                <button onClick={() => handleButtonClick("lake")} className='py-2 px-3 inline-block bg-sky-300'>Lake</button>
                <button onClick={() => handleButtonClick("pools")} className='py-2 px-3 inline-block bg-sky-300'>Pools</button>
                <button onClick={() => handleButtonClick("tropical")} className='py-2 px-3 inline-block bg-sky-300'>Tropical</button>
                <button onClick={() => handleButtonClick("beach")} className='py-2 px-3 inline-block bg-sky-300'>Beach</button>
            </div>
        </div>
    );
};

export default Header;