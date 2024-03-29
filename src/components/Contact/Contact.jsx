import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./contact.css";
import { motion } from "framer-motion";

export const Contact = ({ isMenuOpen }) => {
  return (
    <section id="contact">
      {!isMenuOpen && (
        <div className="contact-container">
          <div className="cards-container">
            <div className="takeout-card">
              <h1>Take out?</h1>
              <p>
                Order now from{" "}
                <motion.a
                  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.just-eat.co.uk/restaurants-golden-sip-ha2/menu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Just Eat.
                </motion.a>
              </p>
            </div>
            <div className="dinein-card">
              <h1>Dine in?</h1>
              <p>
                <a href="tel:0208 4266 300">Call now</a> to get booked in under
                a minute.
              </p>
            </div>
          </div>

          <div className="contact-footer-container">
            <div className="top-container">
              <div className="mini-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5559995292365!2d-0.36373928368483305!3d51.55804011481946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761327130dc68b%3A0x449482f0cae4b2db!2sGolden%20Sip!5e0!3m2!1sen!2suk!4v1680015091086!5m2!1sen!2suk"
                  width="250"
                  height="200"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="gs-mini-map"
                ></iframe>
              </div>

              <div className="details-container">
                <h2 className="details-title-address">Address</h2>
                <p>496-500 Northolt Rd,</p>
                <p>Harrow</p>
                <p>HA2 8HA</p>
                <p>0208 4266 300</p>
              </div>
              <div className="details-title">
                <h2>Opening Times</h2>
                <p className="opening-times">Mon-Sun: 11am-11pm</p>

                <h2>We deliver to:</h2>
                <p>UB5, UB6, UB7, UB8</p>
              </div>
            </div>
            <div className="bottom-container">
              <h2 className="details-title">Follow us on:</h2>
              <a
                href="https://www.instagram.com/golden_sip/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="react-icon-ig" />
              </a>
              <a
                href="https://www.facebook.com/GoldenSipChoolho"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="react-icon-fb" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
