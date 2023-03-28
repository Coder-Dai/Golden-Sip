import React from "react";
import "./contact.css";

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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5559995292365!2d-0.36373928368483305!3d51.55804011481946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761327130dc68b%3A0x449482f0cae4b2db!2sGolden%20Sip!5e0!3m2!1sen!2suk!4v1680015091086!5m2!1sen!2suk"
              width="350"
              height="250"
              style={{border: "0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="gs-mini-map"
            ></iframe>

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
