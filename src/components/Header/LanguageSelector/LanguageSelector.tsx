import React from "react";
import UkFlag from "../../../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../../../assets/logos/languages/FrenchFlag.svg";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;

  return (
    <div className="LanguageSelector">
      <img
        className="LanguageSelector__flags"
        src={FrenchFlag}
        alt={language === "en" ? "French flag" : "Drapeau français"}
        onClick={() => language !== "fr" && changeLanguage("fr")}
        data-testid="LanguageSelectorButton--french"
      />
      <div
        data-testid="LanguageSelectorButton"
        className={
          "LanguageSelector__button " + (language?.includes("en") && "active")
        }
        onClick={() => changeLanguage(language === "en" ? "fr" : "en")}
      >
        <div id="inner-circle" className="LanguageSelector__inner-circle"></div>
      </div>
      <img
        className="LanguageSelector__flags"
        src={UkFlag}
        alt={
          language === "en" ? "United Kingdom flag" : "Drapeau du Royaume-Uni"
        }
        onClick={() => language !== "en" && changeLanguage("en")}
        data-testid="LanguageSelectorButton--english"
      />
    </div>
  );
};
