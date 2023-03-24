import React from "react";
import ImageSlider from "./ImageSlider";
import "./about.css";

export const About = ({ isMenuOpen }) => {
  const starters = [
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/57/53/f7/sukuti-chatpate-buff.jpg",
      title: "chatpate",
    },
  ];

  const mains = [
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/56/f8/c7/local-food-we-heaved.jpg",
      title: "thakali",
    },
    {
      url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "momo",
    },
  ];

  const drinks = [
    {
      url: "https://images.unsplash.com/photo-1586797252911-37b57308ebee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "pint",
    },

    {
      url: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "drink",
    },

    {
      url: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      title: "drink",
    },
  ];

  return (
    <div>
      {!isMenuOpen && (
        <div className="about-section-container">
          <ImageSlider slides={starters} />
          <h2 className="picture-text">Mukh-Rasaune Starters</h2>

          <ImageSlider slides={mains} />
          <h2 className="picture-text">Aghaune Mains</h2>

          <ImageSlider slides={drinks} />
          <h2 className="picture-text">Mataune Drinks</h2>

          <div className="about-footer-container">
          <h1 className="about-footer-title">Serving Himalayan cuisine since 1990</h1>
          <p className="about-footer-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      )}
    </div>
  );
};
