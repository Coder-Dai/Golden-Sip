import React from "react";
import logo from "../../assets/logo.png";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Golden Sip's Logo"></img>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
