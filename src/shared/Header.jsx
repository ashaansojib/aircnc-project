import React, { useContext, useState } from 'react';
import { RoomProviderContext } from '../providers/RoomProvider';

const Header = () => {
    const { setRooms, rooms } = useContext(RoomProviderContext);
    const [priceFilter, setPriceFilter] = useState(0);

    const handleButtonClick = (location) => {
        // getLocationName(location)
        fetch(`http://localhost:9988/resorts-in/${location}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }
    const handleFiltering = () => {
        fetch(`http://localhost:9988/price-range?price=${priceFilter}`)
        .then( res => res.json())
        .then( data => setRooms(data))
      };
    return (
        <div className='my-container'>
            <div className='md:flex justify-between items-center'>
                <div className='space-x-2'>
                    <button onClick={() => handleButtonClick("lake")} className='py-2 px-3 inline-block bg-[#FF385C] text-white'>Lake</button>
                    <button onClick={() => handleButtonClick("pools")} className='py-2 px-3 inline-block bg-[#FF385C] text-white'>Pools</button>
                    <button onClick={() => handleButtonClick("tropical")} className='py-2 px-3 inline-block bg-[#FF385C] text-white'>Tropical</button>
                    <button onClick={() => handleButtonClick("beach")} className='py-2 px-3 inline-block bg-[#FF385C] text-white'>Beach</button>
                </div>
                <div>
                    <button onClick={() => window.my_modal_3.showModal()} className='py-2 px-3 inline-block border rounded-md'>Filter</button>
                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            {/* modal body content */}
                            <div className='py-4'>
                                <div className='p-2'>
                                    <h2 className='text-2xl font-semibold'>Price Range</h2>
                                    <p className='py-2 text-gray-500'>The average nightly price is ${priceFilter}</p>
                                    <input
                                        type="range"
                                        onChange={(e) => setPriceFilter(parseInt(e.target.value))}
                                        value={priceFilter}
                                        min={0}
                                        max={200}
                                        step={50}
                                        className='w-full inline-block'
                                    />
                                </div>
                                <div className='flex justify-end pt-3'>
                                    <button onClick={handleFiltering} className='btn bg-[#FF385C] text-white hover:text-black'>Show {rooms.length} stays</button>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Header;