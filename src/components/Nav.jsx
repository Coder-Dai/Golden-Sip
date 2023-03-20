import React from "react";
import logo from "../assets/logo.png";

export const Nav = () => {
  return (
    <header>
      <img src={logo} alt="Golden Sip's Logo"></img>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};
