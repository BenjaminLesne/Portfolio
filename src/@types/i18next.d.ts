import { resources, defaultNS } from "../translation/config";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources["fr"];
  }
}
