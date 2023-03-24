import React from "react";
import "./home.css";

export const Home = ({ isMenuOpen }) => {
  return (
    <div>
      {!isMenuOpen && (
        <div className="home-container">
          <h1>Welcome to GOLDEN SIP!</h1>
          <h2>Authentic Nepalese and Indian Cuisine</h2>
          <h3>Serving Himalayan cuisine since 19 fountain</h3>
        </div>
      )}
    </div>
  );
};
