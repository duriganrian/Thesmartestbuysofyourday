import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json"; // 🇧🇷 Tradução em Português
import en from "./locales/en.json"; // 🇺🇸 Tradução em Inglês

// Função para obter o idioma salvo no localStorage ou definir o padrão
const getSavedLanguage = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("language") || "pt";
  }
  return "pt";
};

// Inicialização do i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt }
  },
  lng: getSavedLanguage(), // Mantém o idioma selecionado
  fallbackLng: "pt", // Se o idioma não for encontrado, usa PT
  interpolation: { escapeValue: false }
});

// Atualiza o idioma e salva no localStorage
export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("language", language);
  }
};

export default i18n;
