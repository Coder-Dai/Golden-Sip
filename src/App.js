import "./App.css";
import React, { useState } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { About } from "./components/About";
import { HamburgerNav } from "./components/HamburgerNav";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <Nav />
      <HamburgerNav toggleMenu={toggleMenu} />
      <Home isMenuOpen={isMenuOpen} />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <About isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default App;
