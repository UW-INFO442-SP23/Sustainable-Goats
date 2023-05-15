import React from "react";
import { useState } from "react";
import logo from "../img/tree-logo.png"
import name from "../img/parktopia.png"
import "./mobilenav.css";

export default function MobileNavbar() {
 const [isExpanded, setIsExpanded] = useState(false);


 const toggleNavbar = () => {
   setIsExpanded(!isExpanded);
 };


 return (
  
   <nav>
     <div className="container-fluid row">
       <a className="navbar-brand col-12" href="/">
         <span><img className='app-logo' src={logo} alt='tree logo'></img>
         <img className='app-name' src={name} alt='website name'></img>
         </span>
       </a>

         {/* <ul className="navbar-nav ms-auto"> */}
        <div class="col-12">
            <ul class="d-flex row">
                <li className="col-12 nav-item">
                <a className="nav-link" href="/">
                    Map
                </a>
                </li>
                <li className="col-12 nav-item">
                <a className="nav-link" href="information">
                    Resources
                </a>
                </li>   
            </ul>
         </div>
        </div>
   </nav>
 );
}



