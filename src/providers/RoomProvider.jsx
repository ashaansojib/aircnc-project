import React, { createContext, useEffect, useState } from 'react';

export const RoomProviderContext = createContext(null);

const RoomProvider = ({ children }) => {

    const [rooms, setRooms] = useState([]);
    // const [category, setCategory] = useState("");
    const user = {name: 'sojib'}
    useEffect( ()=> {
        fetch('http://localhost:9988/resorts')
        .then( res => res.json())
        .then( data => setRooms(data))
    },[]);

    const roomsInfo = {
        user,
        rooms
    }
    return (
        <RoomProviderContext.Provider value={roomsInfo}>
            {children}
        </RoomProviderContext.Provider>
    );
};

export default RoomProvider;