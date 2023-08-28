import React from 'react';

const SingleRoom = ({room}) => {
    const {name} = room;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SingleRoom;