import "./App.css";
import React from "react";
import { Nav } from "./components/Nav";
import { HamburgerMenu } from "./components/HamburgerMenu";

function App() {
  return (
    <div className="App">
      <Nav />
      <HamburgerMenu />
    </div>
  );
}

export default App;
