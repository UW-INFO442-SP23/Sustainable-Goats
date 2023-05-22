import "./navbar.css";
import React, { useState, useRef } from 'react';
import logo from "../img/tree-logo.png"
import name from "../img/parktopia.png"
import Overlay from 'react-bootstrap/Overlay';
// import * as FaIcons from "react-icons/fa";

export default function Navbar() {
 const [isExpanded, setIsExpanded] = useState(false);


 //const toggleNavbar = () => {
 //  setIsExpanded(!isExpanded);

  const [show, setShow] = useState(false);
  const target = useRef(null);


 return (
  
   <nav className="container-fluid navbar fixed-top navbar-expand-lg nav-color">
     <div className="nav-container">
       <a className="navbar-brand" href="/">
         <span><img className='app-logo' src={logo} alt='tree logo'></img>
         <img className='app-name' src={name} alt='website name'></img>
         </span>
       </a>
        <a>
          <i class="bi bi-list mobile-menu-icon" ref={target} onClick={() => setShow(!show)}></i>
        </a>
        <Overlay target={target.current} show={show} placement="right">
          <a className="nav-link" href="/">
                Map
              </a>
        </Overlay>
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
          {/* <button className="mobile-menu-icon">
            {isExpanded ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fa fas-bars"></i>
            )}
          </button> */}
        </div>
   </nav>
 );
}



