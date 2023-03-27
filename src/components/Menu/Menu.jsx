import React from "react";
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

const Menu = ({ isMenuOpen }) => {
  return (
    <>
      {!isMenuOpen && (
        <section id="menu">
          <h1>Menu</h1>
          <div className="menu-container">
            <MenuList label="Vegetarian Starter" food={vegS} />
            <MenuList label="Non-Veg Starter" food={nonVegS} />
            <MenuList label="Sea Food Starter" food={seaFoodS} />
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
        </section>
      )}
    </>
  );
};

export default Menu;
