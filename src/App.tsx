import React from "react";
import "./App.css";
import { Header } from "./components/components";
import { Hero } from "./components/Hero/Hero";
import { AboutMe } from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
