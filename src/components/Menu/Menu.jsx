import React from "react";
import "./menu.css";
import {AiOutlineCaretUp} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import vegS from './veg-s.json'

const Menu = () => {
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div className="menu-container">
        <div className="menu-content">
          <button>
            Veg-Starter
          </button>
        </div>
        <div className="menu-content">
          <button>Veg-Starter</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
