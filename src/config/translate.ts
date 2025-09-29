import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/locales/en/translation.json";
import translationVI from "@/locales/vi/translation.json";
import translationKR from "@/locales/kr/translation.json";

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  kr: { translation: translationKR },
};

i18next.use(initReactI18next).init({
  lng: localStorage.getItem("language") || "en", // Lấy ngôn ngữ từ localStorage
  fallbackLng: "en",
  debug: true,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
