import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/Map';
import Test from './components/Test';

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