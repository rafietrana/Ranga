import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Header/Footer';

const Root = () => {
    return (
        <div className='h-screen'>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;