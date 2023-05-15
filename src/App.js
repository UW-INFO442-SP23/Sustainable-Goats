import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Map from './components/map/Map';
import Test from './components/map/Test';
// import Filter from './components/filters';
import Information from './components/information';
import MarkersCard from './components/markersCard';
import Navbar from './components/navbar';

function App(){

    return (

       <Router>
           <Navbar />
           <Routes>
               <Route path={"/"} element={ <Map/> } />
               <Route path={"/test"} element={<Test/> }/>
               {/* <Route path={"/filters"} element={<Filter/> }/> */}
               <Route path={"/information"} element={<Information/> }/>
               <Route path={"/card"} element={<MarkersCard/>} />
               <Route path={"/navbar"} element={<Navbar/>} />
           </Routes>
           {/* <Filter/> */}
       </Router>

    )
}

export default App;