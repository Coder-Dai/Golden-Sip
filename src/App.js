import React, { useState } from "react";
import { Nav } from "./components/NavBar/Nav";
import { Home } from "./components/Home/Home";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { About } from "./components/About/About";
import { HamburgerNav } from "./components/HamburgerMenu/HamburgerNav";
import Menu from "./components/Menu/Menu";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <Nav />
      <HamburgerNav
        toggleMenu={toggleMenu}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Home isMenuOpen={isMenuOpen} />
      <About isMenuOpen={isMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
      <Contact isMenuOpen={isMenuOpen} />
      <Footer isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default App;
