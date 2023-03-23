import React, { useEffect, useState } from "react";
import "./Project.css";
import { useTranslation } from "react-i18next";
type Props = {
  name: string;
  description: string;
  sourceCodeUrl: string;
  websiteUrl: string;
  imagePath: string;
  alt: string;
  colorMask: string;
};
export const Project = ({
  name,
  description,
  sourceCodeUrl,
  websiteUrl,
  imagePath,
  alt,
  colorMask,
}: Props) => {
  const { t } = useTranslation();
  return (
    <article className="Project">
      <figure className="Project__content-wrapper">
        <img className="Project__image" src={imagePath} alt={alt} />
        <div
          className="Project__overlay"
          style={{ backgroundColor: `rgba(${colorMask}, 0.8)` }}
        >
          <h3
            className="Project__name"
            style={{ backgroundColor: `rgb(${colorMask})` }}
          >
            {name}
          </h3>
        </div>
        <figcaption className="Project__information">
          <p className="Project__description">{description}</p>
          <div className="Project__links">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="Project__link"
            >
              {t("website", { ns: "glossary" })}
            </a>
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noreferrer"
              className="Project__link"
            >
              code
            </a>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};
