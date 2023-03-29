import React from "react";
import logo from "../../assets/logo.png";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <a href='#home'><img src={logo} alt="Golden Sip's Logo" className="desktop-golden-sip-logo" /></a>
      <ul className="nav-links">
        <a className="nav-lists" href='home'><li>Home</li></a>
        <a className="nav-lists" href='about'><li>About us</li></a>
        <a className="nav-lists" href='menu'><li>Menu</li></a>
        <a className="nav-lists" href='contact'><li>Contact</li></a>
      </ul>
    </nav>
  );
};
