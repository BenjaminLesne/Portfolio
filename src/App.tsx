import React from "react";
import "./App.css";
import { Header, Hero, AboutMe, Skills } from "./components/components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}

export default App;
