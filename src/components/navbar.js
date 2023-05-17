import "./navbar.css";
import React from "react";
import { useState } from "react";
import logo from "../img/tree-logo.png"
import name from "../img/parktopia.png"
// import * as FaIcons from "react-icons/fa";

export default function Navbar() {
 const [isExpanded, setIsExpanded] = useState(false);


 const toggleNavbar = () => {
   setIsExpanded(!isExpanded);
 };


 return (
  
   <nav className="navbar fixed-top navbar-expand-lg nav-color">
     <div className="container-fluid">
       <a className="navbar-brand" href="/">
         <span><img className='app-logo' src={logo} alt='tree logo'></img>
         <img className='app-name' src={name} alt='website name'></img>
         </span>
       </a>

         {/* <ul className="navbar-nav ms-auto"> */}
        <a href="/menu">
          <i class="bi bi-list mobile-menu-icon"></i>
        </a>
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



