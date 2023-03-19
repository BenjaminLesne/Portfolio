import React from "react";
import "./App.css";
import { Header, Hero, AboutMe, Skills } from "./components/components";
import { MyProjects } from "./components/MyProjects/MyProjects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <MyProjects />
      </main>
    </>
  );
}

export default App;
