import React from "react";
import { useTranslation } from "react-i18next";
import absolutlyProprietary from "../../assets/absolutely-proprietary.webp";
import "./notOpenSource.css";
import { Link } from "react-router-dom";

export const NotOpenSource = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  return (
    <>
      <main className="main-content">
        <h1 className="text-center text-2xl font-bold">
          {t("heading", { ns: "notOpenSource" })}
        </h1>

        <img
          src={absolutlyProprietary}
          alt="absolutly Proprietary"
          className="image"
        />

        <Link to={`/?lang=${language}`}>
          {t("goBack", { ns: "notOpenSource" })}
        </Link>
      </main>
    </>
  );
};
