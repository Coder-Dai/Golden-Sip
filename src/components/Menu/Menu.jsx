import React, { useState } from "react";
import "./menu.css";
import MenuList from "./MenuList";
import vegS from "./veg-s.json";
import nonVegS from "./nonveg-s.json";
import seaFoodS from "./seafood-s.json";
import vegMains from "./veg-m.json";
import nonVegMains from "./nonveg-m.json";
import seaFoodMains from "./seafood-m.json";
import bread from "./bread.json";
import rAndB from "./r&b.json";
import momoAndChowmein from "./momo-&-chowmein.json";
import nepaleseVegDish from "./nepalese-veg-dish.json";
import nepaleseSnacks from "./nepalese-snacks.json";
import sekuwaAndChhoila from "./sekuwa-&-chhoila.json";
import nepaleseNonVeg from "./nepalese-non-veg.json";
import setMeal from "./set-meal.json";
import banqVegS from "./Banquet/veg-s.json";
import banqNonVegS from "./Banquet/nonveg-s.json";
import banqVegMains from "./Banquet/veg-m.json";
import banqNonVegMains from "./Banquet/nonveg-m.json";
import banqRice from "./Banquet/rice.json";
import banqBread from "./Banquet/bread.json";
import banqSalad from "./Banquet/salad.json";
import banqDessert from "./Banquet/dessert.json";

const Menu = ({ isMenuOpen }) => {
  const [isNormalMenuOpen, setIsNormalMenuOpen] = useState(true);

  return (
    <>
      {!isMenuOpen && (
        <section id="menu">
          {isNormalMenuOpen ? <h1>Menu</h1> : <h1>Banquet Menu</h1>}

          <div className="menu-container">
            <div className="menu-toggle-btn-styling-container">
              <button
                className="menu-toggle-btn"
                onClick={() => setIsNormalMenuOpen(!isNormalMenuOpen)}
              >
                {isNormalMenuOpen ? <p>Banquet</p> : <p>Menu</p>}
              </button>
            </div>
            {isNormalMenuOpen && (
              <div className="menu-list-container">
                <MenuList label="Vegetarian Starters" food={vegS} />
                <MenuList label="Non-Veg Starters" food={nonVegS} />
                <MenuList label="Sea Food Starters" food={seaFoodS} />
                <MenuList label="Vegetarian Mains" food={vegMains} />
                <MenuList label="Non-Veg Mains" food={nonVegMains} />
                <MenuList label="Sea Food Mains" food={seaFoodMains} />
                <MenuList label="Bread" food={bread} />
                <MenuList label="Rice & Biryani" food={rAndB} />
                <MenuList label="Momo & Chowmein" food={momoAndChowmein} />
                <MenuList label="Nepalese Veg. Dish" food={nepaleseVegDish} />
                <MenuList label="Nepalese Snacks" food={nepaleseSnacks} />
                <MenuList label="Sekuwa & Chhoila" food={sekuwaAndChhoila} />
                <MenuList label="Nepalese Non-Veg" food={nepaleseNonVeg} />
                <MenuList label="Set Meal" food={setMeal} />
              </div>
            )}
            {!isNormalMenuOpen && (
              <div className="menu-list-container">
                <MenuList
                  label="Vegetarian Starters"
                  info="Pick 2 items from the menu below*"
                  food={banqVegS}
                />
                <MenuList
                  label="Non-Veg Starters"
                  food={banqNonVegS}
                  info="Pick 2 items from the menu below*"
                />
                <MenuList label="Vegetarian Mains" food={banqVegMains} info="Pick 2 items from the menu below*"/>
                <MenuList label="Non-Veg Mains" food={banqNonVegMains} info="Pick 2 items from the menu below*"/>
                <MenuList label="Rice" food={banqRice} info="Pick 1 items from the menu below*"/>
                <MenuList label="Bread" food={banqBread} info="Pick 1 items from the menu below*"/>
                <MenuList label="Salad" food={banqSalad} />
                <MenuList label="Dessert" food={banqDessert} info="Pick 1 items from the menu below*"/>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Menu;
