import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import Portfolio from "./Components/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Address />

        <Route path="/" exact component={About} />
        <Route path="/Portfolio" component={Portfolio} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
