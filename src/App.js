import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Map from './components/map/Map';
import Test from './components/map/Test';
import filters from './components/filters';
import Information from './components/information';
import MarkersCard from './components/MarkersCard';
import Navbar from './components/navbar';

function App(){

    return (

       <Router>
           <Routes>
               <Route path={"/"} element={ <Map/> } />
               <Route path={"/test"} element={<Test/> }/>
               <Route path={"/information"} element={<Information/> }/>
               <Route path={"/card"} element={<MarkersCard/>} />
               <Route path={"/navbar"} element={<Navbar/>} />
           </Routes>
       </Router>

    )
}

export default App;