import React from "react";
import "./home.css";

export const Home = ({ isMenuOpen }) => {
  return (
    <div>
      {!isMenuOpen && (
        <div className="home-container">
          <h1 className="title-text">Authentic Nepalese and Indian Cuisine</h1>
          <button className="order-button-home-page">
            <a href="https://www.just-eat.co.uk/restaurants-golden-sip-ha2/menu">
              Order now
            </a>
          </button>
        </div>
      )}
    </div>
  );
};
