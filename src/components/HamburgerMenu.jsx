import React, { useState } from "react";
import "./hamburgerMenu.css";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <span className="hamburger-icon__bar"></span>
        <span className="hamburger-icon__bar"></span>
        <span className="hamburger-icon__bar"></span>
      </button>
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
        </ul>
      )}
    </div>
  );
};
