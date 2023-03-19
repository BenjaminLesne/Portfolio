import React from "react";
import "./Skills.css";
import { skillsData } from "./utils/skillsData"
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const {t} = useTranslation()
     const sectionHeading = t("heading", {ns: "skills"})
  return (
    <section className="Skills" id="skills" data-testid="skills">
      <h2 className="Skills__heading section-heading">
        {sectionHeading}
      </h2>
      <div className="Skills__subSections">
        {skillsData.map((subSection) => {
          return (
            <section className="Skills__subSection" key={crypto.randomUUID()}>
              <h3 className="Skills__subHeading">{t(subSection.headingKey, {ns: "skills"})}:</h3>
              <ul className="Skills__items">
                {subSection.content.map((item) => {
                  const itemValue = t(item.nameKey, {ns: "skills"});
                  return (
                    <li key={crypto.randomUUID()} className="Skills__item">
                      <div className="Skills__logo-wrapper">
                        <img
                          className="Skills__logo"
                          src={item.logo}
                          alt={itemValue + " logo"}
                        />
                      </div>
                      <div className="Skills__name">{itemValue}</div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
};