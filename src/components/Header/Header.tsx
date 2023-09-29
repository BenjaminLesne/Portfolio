import React from "react";
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";
import { enableScroll, disableScroll } from "./functions";
import { useState } from "react";
import cvFR from "../../assets/CV/CV_Benjamin-Lesne_FR.pdf";
import cvEN from "../../assets/CV/CV_Benjamin-Lesne_EN.pdf";

import "./header.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleOpenNavigation() {
    disableScroll();
    setIsNavOpen(true);
  }

  function handleCloseNavigation() {
    enableScroll();
    setIsNavOpen(false);
  }
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const textContent = t("links", { ns: "navigation", returnObjects: true });

  return (
    <header className="Header" data-testid="header" id="header">
      <LanguageSelector />
      <button
        className="Navigation-open-button"
        onClick={() => handleOpenNavigation()}
      >
        <span className="Navigation-open-button__slice"></span>
      </button>

      <nav className="Header__navigation-menu" data-open={isNavOpen.toString()}>
        <button
          className="Header__navigation-close-button"
          onClick={() => handleCloseNavigation()}
        ></button>
        <ul className="Header__list-of-anchors">
          {textContent.map((item, index) => {
            const cvUrl =
              item.type === "pdf" ? (language === "fr" ? cvFR : cvEN) : false;
            return (
              <li key={index}>
                <a
                  className="Header__anchor"
                  href={cvUrl ? cvUrl : item.href}
                  onClick={() => handleCloseNavigation()}
                >
                  {item.linkText}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
