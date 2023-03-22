import "./App.css";
import React from "react";
import { Nav } from "./components/Nav";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { About } from "./components/About";

const App = () => {
  return (
    <div>
      <Nav />
      <HamburgerMenu />
      <About />
    </div>
  );
};

export default App;
