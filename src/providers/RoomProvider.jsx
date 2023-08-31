import React, { createContext, useEffect, useState } from 'react';

export const RoomProviderContext = createContext(null);

const RoomProvider = ({ children }) => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9988/resorts')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);
    const roomsInfo = {
        rooms,
        setRooms,
    }
    return (
        <RoomProviderContext.Provider value={roomsInfo}>
            {children}
        </RoomProviderContext.Provider>
    );
};

export default RoomProvider;