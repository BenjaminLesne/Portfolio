import React from "react";
import "./App.css";
import { Header, Hero, AboutMe, Skills, MyProjects, ContactMe } from "./components/components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <MyProjects />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
