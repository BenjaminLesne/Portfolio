import "./MyProjects.css";
import React, { useRef } from "react";
import { Project } from "./Project/Project";
import { useTranslation } from "react-i18next";
import { myProjectsData } from "./utils/myProjectsData";

export const MyProjects = () => {
  const { t } = useTranslation();
  const heading = t("heading", { ns: "myProjects" });
  return (
    <section className="MyProjects" id="my-projects" data-testid="myProjects">
      <h2 className="MyProjects__heading section-heading">{heading}</h2>
      <div className="MyProjects__showcase">
        <ol className="MyProjects__projects">
          {myProjectsData.map((project, index) => {
            const ref = useRef<HTMLLIElement | null>(null);
            const projectProps = {
              name: project.name,
              description: t(project.descriptionKey, {
                ns: "myProjects",
                defaultValue: "",
              }),
              sourceCodeUrl: project.sourceCodeUrl,
              // videoUrl: project.videoUrl,
              websiteUrl: project.websiteUrl,
              imagePath: project.imagePath ?? "",
              alt: t(project.altKey, { ns: "myProjects", defaultValue: "" }),
              colorMask: project.colorMask,
            };
            return (
              <li
                className="MyProjects__project"
                key={index}
                ref={ref}
                onClick={
                  () => ref.current?.firstElementChild?.classList.toggle("show") // makes mobile devices trigger the hover style
                }
              >
                <Project {...projectProps} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
