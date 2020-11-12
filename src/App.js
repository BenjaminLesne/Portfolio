import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import Portfolio from "./Components/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [lang, setLang] = useState({
    EN: {
      headerMenuTopLine: "About",
      aboutTitle: "Yo, it's ben",
      aboutDescription:
        "I'm a full stack developer currently based in paris hit me up and let's create something special",
      portfolioDescription:
        "// These are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up!",
      resume: "resume",
      viewProjects: "View Projects",
      project: "project",
    },

    FR: {
      headerMenuTopLine: "A propos",
      aboutTitle: " Salut, moi c'est Benjamin",
      aboutDescription:
        "Je suis developpeur full-stack  actuellement sur Paris, contactez moi et créons quelque chose d'unique !",
      portfolioDescription:
        "// Ceci sont mes projets favoris sur lesquels j'ai travaillé cette année. Jetez-y un oeil !",

      resume: "CV",
      viewProjects: "Voir le projet",
      project: "projet",
    },
  });

  const [langChosen, setLangChosen] = useState(lang.EN);

  return (
    <div className="App">
      <Router>
        <Header
          setLangChosen={setLangChosen}
          langChosen={langChosen}
          lang={lang}
        />
        <Address lang={lang} langChosen={langChosen} />

        <Route
          path="/Portfolio"
          exact
          render={(props) => <About lang={lang} langChosen={langChosen} />}
        />
        <Route
          path="/Portfolio/Projects"
          render={(props) => <Portfolio lang={lang} langChosen={langChosen} />}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
