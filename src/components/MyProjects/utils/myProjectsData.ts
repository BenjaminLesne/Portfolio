import jegwellPath from "../../../assets/website-screenshots/Jegwell.png";
import plateforme from "../../../assets/website-screenshots/plateforme-focale.png";
import { NOT_OPEN_SOURCE_URL } from "../../../utils/constants";
export const myProjectsData = [
  {
    name: "Plateforme Focale",
    websiteUrl: "https://focale-stg1-fe.osc-fr1.scalingo.io/",
    sourceCodeUrl: NOT_OPEN_SOURCE_URL,
    colorMask: "75, 131, 130",
    imagePath: plateforme,
    descriptionKey: "plateforme.description",
    altKey: "plateforme.alt",
  },
  {
    name: "Jegwell",
    websiteUrl: "https://jegwell.vercel.app/",
    sourceCodeUrl: "https://github.com/BenjaminLesne/Jegwell",
    colorMask: "157, 83, 83",
    imagePath: jegwellPath,
    descriptionKey: "jegwell.description",
    altKey: "jegwell.alt",
  },
];
