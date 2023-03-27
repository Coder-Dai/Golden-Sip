import React from "react";

export const Contact = ({ isMenuOpen }) => {
  return (
    <div>
      {!isMenuOpen && (
        <div className="contact-container">

          <div className="takeout-card">
            <h1>Take out?</h1>
            <h3>Order now from JustEat.</h3>
          </div>

          <div className="dinein-card">
            <h1>Dine in?</h1>
            <h3>Call now to get booked in under a minute.</h3>
          </div>

          <div className="contact-footer-container">
            <h2>Address</h2>
            <h4>123 Fake Street</h4>
            <h4>UB5 123</h4>
            <h4>Contact: 0123456789</h4>

            <h2>Opening Times</h2>
            <h4>Mon-Sun: 11am-11pm</h4>

            <h2>We deliver to:</h2>
            <h4>UB5, UB6, UB7, UB8</h4>

            <h2>Follow us on:</h2>

          </div>
        </div>
      )}
    </div>
  );
};
