import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoomProviderContext } from '../providers/RoomProvider';

const Nav = () => {

    const [searchQuery, setSearchQueary] = useState('');
    const {setRooms} = useContext(RoomProviderContext);
    const handleSearch = () =>{
        fetch(`http://localhost:9988/resorts-collection?q=${searchQuery}`)
        .then( res => res.json())
        .then( data => setRooms(data))
    }
    return (
        <nav className='p-4'>
            <div className='my-container grid grid-cols-3 justify-between items-center'>
                <div>
                    <Link to="/"><img src="/logo.PNG" alt="" /></Link>
                </div>
                <div className='flex justify-between items-center col-span-2'>
                    <div className='flex gap-3'>
                        <div>
                            <input type="text" value={searchQuery} onChange={(e)=> setSearchQueary(e.target.value)} name="" placeholder='Search Location' className='p-2 border rounded-full' id="" />
                        </div>
                        <button onClick={handleSearch} className='py-2 px-3 rounded-sm bg-red-500'>Search</button>
                    </div>
                    <div>
                        <Link to="/add-room"><button className='py-2 px-3 hover:text-sky-500'>Add Your Room</button></Link>
                        <button className='py-2 px-3 rounded-sm bg-red-500'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;