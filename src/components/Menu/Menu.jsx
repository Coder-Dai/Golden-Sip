import React from "react";
import "./menu.css";
import VegStarter from "./VegStarter";
import vegS from './veg-s.json'
import nonVegS from './nonveg-s.json'

const Menu = () => {

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div className="menu-container">
          <VegStarter label='Veg-Starter' food={vegS}/>
          <VegStarter label='Non-Veg-Starter' food={nonVegS}/>
          <VegStarter label='Seafood-Starter' food={vegS}/>
      </div>
    </section>
  );
};

export default Menu;
