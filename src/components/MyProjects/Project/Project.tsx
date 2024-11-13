import React from "react";
import "./Project.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
type Props = {
  name: string;
  description: string;
  sourceCodeUrl: string;
  websiteUrl: string | undefined;
  videoUrl: string | undefined;
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
  videoUrl,
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
            {websiteUrl ? (
              <Link to={websiteUrl} rel="noreferrer" className="Project__link">
                {t("website", { ns: "glossary" })}
              </Link>
            ) : null}
            {videoUrl ? (
              <Link to={videoUrl} rel="noreferrer" className="Project__link">
                video
              </Link>
            ) : null}
            <Link to={sourceCodeUrl} rel="noreferrer" className="Project__link">
              code
            </Link>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};
