import React from "react";
import "./App.css";
import {
  Hero,
  AboutMe,
  Skills,
  MyProjects,
  ContactMe,
  Header,
  Footer,
} from "./components/components";

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
      <Footer />
    </>
  );
}

export default App;
