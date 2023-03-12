import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { enableScroll, disableScroll } from "./functions";
import { useState } from "react";

import "./header.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleOpenNavigation() {
    disableScroll();
    setIsNavOpen(true);
  }

  function handleCloseNavigation() {
    enableScroll();
    setIsNavOpen(false);
  }
  const { t } = useTranslation()
  const textContent = t('links', { ns: "headerNavItems", returnObjects: true })

  return (
    <header className="Header" data-testid="header">
      <LanguageSelector />
      <button
        className="Navigation-open-button"
        onClick={() => handleOpenNavigation()}
      >
        <span className="Navigation-open-button__slice"></span>
      </button>

      <nav className="Header__navigation-menu" data-open={isNavOpen.toString()}>
        <button
          className="Header__navigation-close-button"
          onClick={() => handleCloseNavigation()}
        ></button>
        <ul className="Header__list-of-anchors">
          {textContent.map((item) => {
            return (
              <li key={crypto.randomUUID()}>
                <a
                  className="Header__anchor"
                  href={item.href}
                  onClick={() => handleCloseNavigation()}
                >
                  {item.linkText}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

