import { useContext } from 'react';
import SingleRoom from './SingleRoom';
import { RoomProviderContext } from '../../providers/RoomProvider';
import { PuffLoader } from 'react-spinners';

const Rooms = () => {
    const { rooms } = useContext(RoomProviderContext);
    return (
        <div>
            {
                rooms.length <= 0 ? <div className='w-[300px] mx-auto py-8'><PuffLoader
                    color="#FF385C" /></div> : <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 justify-between items-items my-container p-2'>
                    {
                        rooms.map(room => <SingleRoom
                            key={room._id}
                            room={room} />)
                    }
                </div>
            }
        </div>

    );
};

export default Rooms;