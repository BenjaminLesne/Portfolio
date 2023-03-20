import React, { useState } from "react";
import "./index.css";
import { EmailButton } from "./EmailButton/EmailButton";
import { useTranslation } from "react-i18next";
import { linksData } from "./utils/data"

export const ContactMe = () => {
  const [linkComponents, setLinkComponents] = useState<JSX.Element[]|null>(null)
  const { t, i18n } = useTranslation();
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
{linksData.map(({icon, translationKey}) => (

                            <li className="ContactMe__item" key={crypto.randomUUID()}>
                              <a href={t(`${translationKey}.href`, {ns: "contactMe"}) ?? "#"} className="ContactMe__value">
                                {icon}
                                {t(`${translationKey}.message`, {ns: "contactMe"})}
                              </a>
                            </li>
))}
          </ul>
        </address>
      </div>
    </section>
  );
};
