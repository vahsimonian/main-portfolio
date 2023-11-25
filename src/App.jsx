import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
