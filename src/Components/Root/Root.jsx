import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='h-screen'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>

    );
};

export default Root;