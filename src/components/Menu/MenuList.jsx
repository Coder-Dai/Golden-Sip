import React, { useState } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./menuList.css";

const MenuList = ({ label, food, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-content">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
        {label}
        {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </button>

      {isOpen && (
        <div className="menu-list-container">
          <div className="menu-title"></div>
          <div className="menu-list">
          {info ? <p>{info}</p> : null}
            {food.map((item, i) => (
              <div key={i} className="menu-item">
                <p className="menu-name">{item.name}</p>
                <p className="menu-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList;
