import React from "react";
import { Link } from "react-router-dom";

import "../NavBar/Header.css";

function Header() {
  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");

  // hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // });

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <div className="header_logo"></div>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/taxi" className="nav-link">
              VOTRE TAXI
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/services" className="nav-link">
              LES SERVICES
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link contact">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}
      </nav>
    </header>

    // <div className="header_container">
    //   <div className="header">
    //     <Link to="/">
    //       {" "}
    //       <div className="header_logo"></div>
    //     </Link>
    //     <nav className="header_nav">
    //       <Link to="/taxi" className="header_nav_detail">
    //         VOTRE TAXI
    //       </Link>
    //       <Link to="/services" className="header_nav_detail">
    //         LES SERVICES
    //       </Link>
    //       <Link to="/contact" className="header_nav_detail contact">
    //         CONTACT
    //       </Link>

    //       <div className="hamburger">
    //         <span className="bar"></span>
    //         <span className="bar"></span>
    //         <span className="bar"></span>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Header;
