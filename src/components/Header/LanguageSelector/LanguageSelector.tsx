import React, { useRef } from "react";
import UkFlag from "../../../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../../../assets/logos/languages/FrenchFlag.svg";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;
  const languageSelectorButtonRef = useRef(null);
  const languageSelectorButton: null | HTMLElement =
    languageSelectorButtonRef.current;

  function handleLanguageChange(language: string | null) {
    function updateToFrenchUI() {
      changeLanguage("fr");
    }

    function updateToEnglishUI() {
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
        className={
          "LanguageSelector__button " + (language.includes("en") && "active")
        }
        onClick={() => handleLanguageChange(null)}
        ref={languageSelectorButtonRef}
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
