import React, { useState } from "react";
import { Nav } from "./components/NavBar/Nav";
import { Home } from "./components/Home/Home";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { About } from "./components/About/About";
import { HamburgerNav } from "./components/HamburgerMenu/HamburgerNav";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <Nav />
      <HamburgerNav toggleMenu={toggleMenu} />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Home isMenuOpen={isMenuOpen} />
      <About isMenuOpen={isMenuOpen} />
      <Menu/>
    </div>
  );
};

export default App;
