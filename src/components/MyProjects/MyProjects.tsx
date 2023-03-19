import "./MyProjects.css";
import React, { useRef } from "react";
import { Project } from "./Project/Project";
import { useTranslation } from "react-i18next";

export const MyProjects = () => {
  const { t } = useTranslation();
  const projects = t("content", { ns: "myProjects", returnObjects: true });
  const heading = t("heading", { ns: "myProjects" });
  return (
    <section className="MyProjects" id="my-projects" data-testid="myProjects">
      <h2 className="MyProjects__heading section-heading">{heading}</h2>
      <div className="MyProjects__showcase">
        <ol className="MyProjects__projects">
          {projects.map((project) => {
            const ref = useRef<HTMLLIElement | null>(null);
            return (
              <li
                className="MyProjects__project"
                key={crypto.randomUUID()}
                ref={ref}
                onClick={
                  () => ref.current?.firstElementChild?.classList.toggle("show") // makes mobile devices trigger the hover style
                }
              >
                <Project {...project} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
