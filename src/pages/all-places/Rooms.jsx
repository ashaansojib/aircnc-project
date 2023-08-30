import { useContext } from 'react';
import SingleRoom from './SingleRoom';
import { RoomProviderContext } from '../../providers/RoomProvider';

const Rooms = () => {
    const {rooms} = useContext(RoomProviderContext);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 justify-between items-items my-container p-2'>
            {
                rooms.map( room => <SingleRoom 
                    key={room._id}
                    room={room} />)
            }
        </div>
    );
};

export default Rooms;