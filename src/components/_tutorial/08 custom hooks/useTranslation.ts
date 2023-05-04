import { useLocalStorage } from "./useLocalStorage";

export const useTranslation = (): [
  language: string,
  setLanguage: (language: string) => void
] => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  return [language, setLanguage];
};
