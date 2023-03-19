import React from "react";
import "./AboutMe.css";
import picture500W from "../../assets/pictures/me-500w.png";
import picture200W from "../../assets/pictures/me-200w.png";

import { convertMarkdownLinkToHtml } from "../../utils/functions/convertMarkdownLinkToHtml";
import { uppercaseFirstLetterAfterDot } from "../../utils/functions/uppercaseFirstLetterAfterDot";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();

  const heading = t("heading", { ns: "aboutMe" });
  const story = t("story", { ns: "aboutMe" });
  const callToAction = t("callToAction", { ns: "aboutMe" });
  const authorPictureAlt = t("authorPictureAlt", { ns: "aboutMe" });

  return (
    <section className="AboutMe">
      <div className="AboutMe__text-wrapper">
        <h2 className="AboutMe__heading section-heading">{heading}</h2>

        <p className="AboutMe__story">
          <span>{uppercaseFirstLetterAfterDot(story)}</span>
        </p>
        <i
          className="AboutMe__callToAction"
          dangerouslySetInnerHTML={{
            __html: convertMarkdownLinkToHtml(callToAction),
          }}
        ></i>
      </div>
      <img
        className="AboutMe__picture"
        srcSet={`${picture200W} 200w, ${picture500W}`}
        sizes="(max-width: 830px) 200px"
        src={picture500W}
        alt={authorPictureAlt}
      />
    </section>
  );
};
