import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { RoomProviderContext } from '../providers/RoomProvider';

const Nav = () => {

    const [searchQuery, setSearchQueary] = useState('');
    const { setRooms } = useContext(RoomProviderContext);
    const handleSearch = () => {
        fetch(`https://aircng-backend.vercel.app/resorts-collection?q=${searchQuery}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }
    return (
        <nav className='p-4'>
            <div className='my-container grid lg:grid-cols-3 justify-between items-center'>
                <div>
                    <Link to="/"><img src="/logo.PNG" alt="" /></Link>
                </div>
                <div className='flex justify-between items-center col-span-2'>
                    <div>
                        <div className='relative'>
                            <input type="text" value={searchQuery} onChange={(e) => setSearchQueary(e.target.value)} name="" placeholder='Search Location' className='p-2 border rounded-full' id="" />
                            <div className='absolute top-[6px] right-2'>
                                <button onClick={handleSearch} className=' p-2 rounded-full bg-[#FF385C] text-white inline-block'><FaSearch /></button>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <Link to="/add-room"><button className='py-2 px-3 hover:text-[#FF385C]'>Add Your Room</button></Link>
                        <button className='py-2 px-3 rounded-sm bg-[#FF385C] text-white'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;