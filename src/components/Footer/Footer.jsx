import React from "react";
import "./footer.css";

export const Footer = ({ isMenuOpen }) => {
  return (
    <div>
      {!isMenuOpen && (
        <section className="footer-container">
          <p className="footer-text">Copyright 2023 All rights reserved</p>
        </section>
      )}
    </div>
  );
};
