import React from "react";
import logo from "../assets/logo.png";
import "./hamburgerNav.css";

export const HamburgerNav = ({ toggleMenu }) => {
  return (
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
  );
};
