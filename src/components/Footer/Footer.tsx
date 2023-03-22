import React from "react";
import "./Footer.css";

import { UpArrow } from "../../assets/logos/others/UpArrow";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <a className="Footer__back-to-top" href="#header">
        <UpArrow className="Footer__up-arrow" />
        <span>{t("backToTop", { ns: "footer" })}</span>
      </a>
      <small className="Footer__copyrights">
        ©{t("copyrights.year", { ns: "footer" }) + " " + t("utils.author")}
        <span className="Footer__all-rights-reserved">
          {" " + t("copyrights.allRightsReserved", { ns: "footer" })}
        </span>
      </small>
    </footer>
  );
};
