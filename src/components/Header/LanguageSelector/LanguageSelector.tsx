import React, { useEffect } from "react";
import UkFlag from "../../../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../../../assets/logos/languages/FrenchFlag.svg";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";
import { useSearchParams } from "react-router-dom";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;
  const [searchParams, setSearchParams] = useSearchParams();

  const updateLanguage = (langValue: "en" | "fr") => {
    changeLanguage(langValue);
    setSearchParams({ ...searchParams, lang: langValue });
  };

  useEffect(() => {
    const lang = searchParams.get("lang");
    const value = lang || "fr";

    changeLanguage(value);
  }, []);

  return (
    <div className="LanguageSelector">
      <img
        className="LanguageSelector__flags"
        src={FrenchFlag}
        alt={language === "en" ? "French flag" : "Drapeau français"}
        onClick={() => language !== "fr" && updateLanguage("fr")}
        data-testid="LanguageSelectorButton--french"
      />
      <div
        data-testid="LanguageSelectorButton"
        className={
          "LanguageSelector__button " + (language?.includes("en") && "active")
        }
        onClick={() => updateLanguage(language === "en" ? "fr" : "en")}
      >
        <div id="inner-circle" className="LanguageSelector__inner-circle"></div>
      </div>
      <img
        className="LanguageSelector__flags"
        src={UkFlag}
        alt={
          language === "en" ? "United Kingdom flag" : "Drapeau du Royaume-Uni"
        }
        onClick={() => language !== "en" && updateLanguage("en")}
        data-testid="LanguageSelectorButton--english"
      />
    </div>
  );
};
