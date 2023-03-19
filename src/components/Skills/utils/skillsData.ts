//technologies related logos
import reactLogo from "../../../assets/logos/skills/React.svg";
import javaScriptLogo from "../../../assets/logos/skills/JS.svg";
import reduxLogo from "../../../assets/logos/skills/redux.svg";
import jestLogo from "../../../assets/logos/skills/Jest.svg";
import gitLogo from "../../../assets/logos/skills/Git.svg";
import sassLogo from "../../../assets/logos/skills/Sass.svg";
import css3Logo from "../../../assets/logos/skills/CSS3.svg";
import html5Logo from "../../../assets/logos/skills/HTML5.svg";
import agileLogo from "../../../assets/logos/skills/Agile.svg";
import phpLogo from "../../../assets/logos/skills/PHP.svg";
import typeScriptLogo from "../../../assets/logos/skills/TypeScript.svg";
import storyBookLogo from "../../../assets/logos/skills/Storybook.svg";
import i18nextLogo from "../../../assets/logos/skills/i18next.svg";
import viteLogo from "../../../assets/logos/skills/Vite.svg";
import vitestLogo from "../../../assets/logos/skills/Vitest.svg";
import playwrightLogo from "../../../assets/logos/skills/Playwright.svg";
import reactTestingLibraryLogo from "../../../assets/logos/skills/ReactTestingLibrary.png";

//languages spoken related
import UkFlag from "../../../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../../../assets/logos/languages/FrenchFlag.svg";

export const skillsData = [
  {
    headingKey: "usingNow.heading", 
    content: [
      {
        logo: reactLogo,
        nameKey:"react",
      },
      {
        logo: typeScriptLogo,
        nameKey:"typescript",
      },
      {
        logo: javaScriptLogo,
        nameKey:"javascript",
      },
      {
        logo: css3Logo,
        nameKey:"css3",
      },
      {
        logo: html5Logo,
        nameKey:"html5",
      },
      {
        logo: jestLogo,
         nameKey:"jest",
      },
      {
        logo: reactTestingLibraryLogo,
         nameKey:"react testing library",
      },
      {
        logo: playwrightLogo,
        nameKey:"playwright",
      },
      {
        logo: viteLogo,
        nameKey:"vite",
      },
      {
        logo: reduxLogo,
        nameKey:"redux",
          },
          {
            logo: vitestLogo,
             nameKey:"vitest",
          },
          {
            logo: sassLogo,
             nameKey:"sass",
          },
          {
            logo: i18nextLogo,
            nameKey:"i18next",
          },
          {
            logo: gitLogo,
            nameKey:"git",
          },
          {
            logo: agileLogo,
             nameKey:"Agile",
          },
          {
            logo: phpLogo,
             nameKey:"PHP",
          }
        ],
      },
      {
        headingKey: "learning.heading",
        content: [
          {
            logo: storyBookLogo,
            nameKey:"Storybook",
          },
        ],
      },
      {
        headingKey: "whatIspeak.heading",
        content: [
          {
            logo: FrenchFlag,
            nameKey: "whatIspeak.language.fr",
          },
          {
            logo: UkFlag,
            nameKey: "whatIspeak.language.en",
          }
        ],
      },
    ]