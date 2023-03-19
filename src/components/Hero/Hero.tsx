import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const author = t("utils.author");
  const secondTextPart = t("description", { ns: "hero" });

  return (
    <div className="Hero">
      <p className="Hero__text-wrapper">
        <span className="Hero__text Hero__text--big">{author}</span>
        <span className="Hero__text Hero__text--medium" lang={language}>
          {secondTextPart}
        </span>
      </p>
    </div>
  );
};
