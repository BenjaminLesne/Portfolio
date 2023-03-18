import React from "react";
import { useEffect } from "react";
import UkFlag from "../../../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../../../assets/logos/languages/FrenchFlag.svg";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;
  const languageSelectorButton = document.querySelector(
    ".LanguageSelector__button"
  );

  function handleLanguageChange(language: string | null) {
    function updateToFrenchUI() {
      languageSelectorButton?.classList.remove("active");
      changeLanguage("fr");
    }

    function updateToEnglishUI() {
      languageSelectorButton?.classList.add("active");
      changeLanguage("en");
    }

    switch (language) {
      case "fr":
        if (languageSelectorButton?.classList.contains("active")) {
          updateToFrenchUI();
        }
        break;

      case "en":
        if (!languageSelectorButton?.classList.contains("active")) {
          updateToEnglishUI();
        }
        break;

      default:
        if (languageSelectorButton?.classList.contains("active")) {
          updateToFrenchUI();
        } else {
          updateToEnglishUI();
        }
        break;
    }
  }

  useEffect(() => {
    if (language === "en") {
      document
        ?.querySelector(".LanguageSelector__button")
        ?.classList.add("active");
    }
  }, []);

  return (
    <div className="LanguageSelector">
      <img
        className="LanguageSelector__flags"
        src={FrenchFlag}
        alt={language === "en" ? "French flag" : "Drapeau français"}
        onClick={() => handleLanguageChange("fr")}
        data-testid="LanguageSelectorButton--french"
      />
      <div
        data-testid="LanguageSelectorButton"
        className="LanguageSelector__button"
        onClick={() => handleLanguageChange(null)}
      >
        <div id="inner-circle" className="LanguageSelector__inner-circle"></div>
      </div>
      <img
        className="LanguageSelector__flags"
        src={UkFlag}
        alt={
          language === "en" ? "United Kingdom flag" : "Drapeau du Royaume-Uni"
        }
        onClick={() => handleLanguageChange("en")}
        data-testid="LanguageSelectorButton--english"
      />
    </div>
  );
};
