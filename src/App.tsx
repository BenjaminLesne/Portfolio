import React from "react";
import "./App.css";
import {
  Hero,
  AboutMe,
  Skills,
  MyProjects,
  ContactMe,
} from "./components/components";

function App() {
  return (
    <>
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
