import "./App.css";
import React, { useState } from "react";
import { Nav } from "./components/Nav";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { About } from "./components/About";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <Nav />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <About isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default App;
