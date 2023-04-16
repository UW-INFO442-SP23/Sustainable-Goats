import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Map from './components/Map';

function App(){

    return (
        <div className='page-container'>
            <div className='fill-content'>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Map />
                        </>
                    } />
                </Routes>
            </div>
        </div>
    )
}
