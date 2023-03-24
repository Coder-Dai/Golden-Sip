import React from "react";
import "./home.css";

export const Home = ({ isMenuOpen }) => {
  return (
    <div>
      {!isMenuOpen && (
        <div className="home-container">
          <h1 className="title-text">Authentic Nepalese and Indian Cuisine</h1>
        </div>
      )}
    </div>
  );
};
