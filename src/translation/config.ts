import "../@types/i18next.d.ts";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import * as namespacesFR from "./locales/fr/namespaces";
import * as namespacesEN from "./locales/en/namespaces";
import { PRODUCTION } from "../utils/constants.js";

export const resources = {
  fr: {
    ...namespacesFR,
  },
  en: {
    ...namespacesEN,
  },
} as const;

export const defaultNS = "common";

i18next
  .use(initReactI18next)
  .use(languagedetector)
  .init({
    debug: import.meta.env.MODE === PRODUCTION ? false : true,
    fallbackLng: "fr",
    resources,
    ns: ["common"],
    defaultNS: defaultNS,
    interpolation: {
      escapeValue: false, // React already escapes HTML so no need to escape again
    },
  });
