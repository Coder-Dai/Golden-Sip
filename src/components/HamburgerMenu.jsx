import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./hamburgerMenu.css";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger-menu">
      <div className="mobile-nav-bar">
        <img
          src={logo}
          className="mobile-golden-sip-logo"
          alt="Golden Sip's Logo"
        ></img>
        <button className="hamburger-icon" onClick={toggleMenu}>
          <span className="hamburger-icon__bar"></span>
          <span className="hamburger-icon__bar"></span>
          <span className="hamburger-icon__bar"></span>
        </button>
      </div>
      {isOpen && (
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a>Order now!</a>
          </li>
          <li>
            <a>Socials!</a>
          </li>
        </ul>
      )}
    </div>
  );
};
