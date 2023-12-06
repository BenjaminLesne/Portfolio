import React from "react";
import { useTranslation } from "react-i18next";
import absolutlyProprietary from "../../assets/absolutely-proprietary.webp";
import "./notOpenSource.css";
import { Header } from "../components";
import { Link } from "react-router-dom";

export const NotOpenSource = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="main-content">
        <h1>{t("heading", { ns: "notOpenSource" })}</h1>

        <img
          src={absolutlyProprietary}
          alt="absolutly Proprietary"
          className="image"
        />

        <Link to="/">{t("goBack", { ns: "notOpenSource" })}</Link>
      </main>
    </>
  );
};
