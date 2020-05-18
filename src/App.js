import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Hero from "./Components/hero/hero";
import Courses from "./Components/Courses/courses";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
