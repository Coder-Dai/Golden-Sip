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
          <li onClick={toggleMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#menu">Menu</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#order">Order now!</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#socials">Socials!</a>
          </li>
        </ul>
      )}
    </div>
  );
};
