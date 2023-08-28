import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div className=''>
            <Nav />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;