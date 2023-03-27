import React, { useState } from "react";
import "./menu.css";
import {AiOutlineCaretUp} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import vegS from './veg-s.json'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div className="menu-container">
        <div className="menu-content">
          <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='menu-btn'>
            Veg-Starter
            {!isOpen ? (
              <AiOutlineCaretDown />)
              :
              (<AiOutlineCaretUp />
            )}
          </button>

        {isOpen && (
          <div className="menu-title">
            {vegS.map((item, i) => (
              <div key={i} className='menu-list'>
                <p className="menu-name">{item.name}</p>
                <p className="menu-desc">{item.desc}</p>
              </div>  
            ))}
          </div>  
        )}
        </div>
      </div>
    </section>
  );
};

export default Menu;