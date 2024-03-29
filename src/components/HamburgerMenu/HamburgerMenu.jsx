import React from "react";
import facebookIcon from "../../assets/facebook-icon.svg";
import instaIcon from "../../assets/instagram-icon.png";
import "./hamburgerMenu.css";

export const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="hamburger-menu">
      {isMenuOpen && (
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
          <li>
            <button className="order-button">
              <a href="https://www.just-eat.co.uk/restaurants-golden-sip-ha2/menu">
                Order now
              </a>
            </button>
          </li>
          <li>
            <div className="socials-container">
              <div />
              <div />
              <div />
              <div />
              <div />
              <a href="https://www.facebook.com/GoldenSipChoolho">
                <img
                  src={facebookIcon}
                  className="facebook-icon"
                  alt="facebook icon"
                />
              </a>
              <a href="https://www.instagram.com/golden_sip/">
                <img
                  src={instaIcon}
                  className="instagram-icon"
                  alt="instagram icon"
                />
              </a>
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};
