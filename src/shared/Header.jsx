import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Header = () => {
    return (
        <header className='my-container'>
            <div className='space-x-2'>
                <button className='py-2 px-3 inline-block bg-sky-300'>Lake</button>
                <button className='py-2 px-3 inline-block bg-sky-300'>Pools</button>
                <button className='py-2 px-3 inline-block bg-sky-300'>Tropical</button>
                <button className='py-2 px-3 inline-block bg-sky-300'>Beach</button>
            </div>
        </header>
    );
};

export default Header;