import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locations/en.json";
import ua from "./locations/ua.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: en, // 'common' is our custom namespace
    },
    ua: {
      common: ua,
    },
  },
});
export default i18n;
