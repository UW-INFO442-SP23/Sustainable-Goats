import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Map from './components/map/Map';
import Test from './components/map/Test';
import filters from './components/filters';
import information from './components/information';
import markersCard from './components/markersCard';
import navbar from './components/navbar';

function App(){

    return (

       <Router>
           <Routes>
               <Route path={"/"} element={ <Map/> } />
               <Route path={"/test"} element={<Test/> }/>
           </Routes>
       </Router>

    )
}

export default App;