import "./navbar.css";
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg nav-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span>parktopia</span>
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span
            className={`fa-solid ${isExpanded ? "fa-times" : "fa-bars"} fa-lg`}
            id="navbar-icon"
          ></span>
        </button> */}

        <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
      </div>
    </nav>
  );
}