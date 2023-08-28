import React, { useEffect, useState } from 'react';
import SingleRoom from './SingleRoom';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect( ()=> {
        fetch('/Places.json')
        .then( res => res.json())
        .then( data => setRooms(data))
    },[])
    return (
        <div className='grid grid-cols-4 gap-3 justify-between items-items my-container p-2'>
            {
                rooms.map( room => <SingleRoom 
                    key={room._id}
                    room={room} />)
            }
        </div>
    );
};

export default Rooms;