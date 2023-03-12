import React from "react";
// import { useEffect } from "react";
// import UkFlag from "../../assets/logos/languages/UkFlag.svg";
// import FrenchFlag from "../../assets/logos/languages/FrenchFlag.svg";

import "./LanguageSelector.css";
// gérer les props, utiliser i18n a la place (changeLanguage() and t function)
export const LanguageSelector = () => <div></div>;
//   function handleLanguageChange(language) {
//     const currentUrl = new URL(window.location);
//     const languageSelectorButton = document.querySelector(
//       ".LanguageSelector__button"
//     );

//     function updateToFrenchUI() {
//       languageSelectorButton.classList.remove("active");
//       setLanguage("FR");
//       currentUrl.searchParams.delete("lang");
//       window.history.pushState({}, "", currentUrl);
//     }

//     function updateToEnglishUI() {
//       languageSelectorButton.classList.add("active");
//       setLanguage("EN");
//       currentUrl.searchParams.append("lang", "english");
//       window.history.pushState({}, "", currentUrl);
//     }

//     switch (language) {
//       case "french":
//         if (languageSelectorButton.classList.contains("active")) {
//           updateToFrenchUI();
//         }
//         break;

//       case "english":
//         if (!languageSelectorButton.classList.contains("active")) {
//           updateToEnglishUI();
//         }
//         break;

//       default:
//         if (languageSelectorButton.classList.contains("active")) {
//           updateToFrenchUI();
//         } else {
//           updateToEnglishUI();
//         }
//         break;
//     }
//   }

//   useEffect(() => {
//     if (lang === "EN") {
//       document
//         .querySelector(".LanguageSelector__button")
//         .classList.add("active");
//     }
//   }, []);

//   return (
//     <div className="LanguageSelector">
//       <img
//         className="LanguageSelector__flags"
//         src={FrenchFlag}
//         alt="French flag / Drapeau français"
//         onClick={() => handleLanguageChange("french")}
//         data-testid="LanguageSelectorButton--french"
//       />
//       <div
//         data-testid="LanguageSelectorButton"
//         className="LanguageSelector__button"
//         onClick={handleLanguageChange}
//       >
//         <div id="inner-circle" className="LanguageSelector__inner-circle"></div>
//       </div>
//       <img
//         className="LanguageSelector__flags"
//         src={UkFlag}
//         alt="UK flag / Drapeau anglais"
//         onClick={() => handleLanguageChange("english")}
//         data-testid="LanguageSelectorButton--english"
//       />
//     </div>
//   );
// };
