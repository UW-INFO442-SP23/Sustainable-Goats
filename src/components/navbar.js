import "./navbar.css";
import React, { useState, useRef } from 'react';
import logo from "../img/tree-logo.png"
import name from "../img/parktopia.png"
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {



 return (
  
   <nav className="container-fluid navbar fixed-top navbar-expand-lg nav-color">
     <div className="nav-container">
       <a className="navbar-brand" href="/">
         <span><img className='app-logo' src={logo} alt='tree logo'></img>
         <img className='app-name' src={name} alt='website name'></img>
         </span>
       </a>
       <Dropdown>
          <Dropdown.Toggle id="dropdown" menuRole="menu">
            <i class="bi bi-list mobile-menu-icon"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="nav-link-mobile" href="/">
                  Map
            </Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item className="nav-link-mobile" href="information">
                  Resources
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ul class="list">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Map
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="information">
                Resources
              </a>
            </li>   
          </ul>
        </div>
   </nav>
 );
}



