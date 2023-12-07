import React from "react";
import "./index.css";
import { EmailButton } from "./EmailButton/EmailButton";
import { useTranslation } from "react-i18next";
import { linksData } from "./utils/data";
import { Link } from "react-router-dom";

export const ContactMe = () => {
  const { t } = useTranslation();
  const email = t("email", { ns: "contactMe" });

  return (
    <section className="ContactMe" id="contact-me">
      <div className="ContactMe__content">
        <h2 className="ContactMe__heading section-heading">
          {t("heading", { ns: "contactMe" })}
        </h2>
        <address className="ContactMe__information">
          <ul className="ContactMe__items">
            <li className="ContactMe__item">
              <EmailButton email={email} />
              <span className="ContactMe__value">{email}</span>
            </li>
            {linksData.map(({ icon, translationKey }, index) => (
              <li className="ContactMe__item" key={index}>
                <Link
                  to={t(`${translationKey}.href`, {
                    ns: "contactMe",
                    defaultValue: "#",
                  })}
                  className="ContactMe__value"
                >
                  {icon}
                  {t(`${translationKey}.message`, {
                    ns: "contactMe",
                    defaultValue: "",
                  })}
                </Link>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
};
