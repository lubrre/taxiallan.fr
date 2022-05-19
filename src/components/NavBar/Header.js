import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import "../NavBar/Header.css";

function Header() {

  return (
    <header className="header">
      <div className="telInHeader">
        <FontAwesomeIcon icon={faPhone} className="icon_tel" />
        <p className="header_separator">-</p>
        <p className="header_tel">06 89 66 27 75</p>
      </div>
      <nav className="navbar">
        <Link to="/">
          <div className="header_logo" alt="logo"></div>
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
      </nav>
    </header>
  );
}

export default Header;
