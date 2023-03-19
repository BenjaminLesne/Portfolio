import React from "react";
import "./App.css";
import { Header } from "./components/components";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
