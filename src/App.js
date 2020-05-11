import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Hero from "./Components/hero/hero";
import Courses from "./Components/Courses/courses";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
    </div>
  );
}

export default App;
