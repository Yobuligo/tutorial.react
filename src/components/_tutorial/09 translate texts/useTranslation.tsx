/**
 * To use translations in a project a simple hook can be used.
 * The following has to be done as preparation.
 *
 * 1. Provide texts
 * The texts must be provided in separate files. A file per language. Normally in form of json files like en.json or de.json, etc.
 * These files contain the text in form of json like (here as an example for en.json)
 *      {
 *          "greetings": "hello",
 *          "homePage": {
 *              header: "Welcome"
 *          }
 *      }
 *
 * 2. Provide index.js
 * To load the text files via import it is first required to export it. Therefore an e.g. index.js has to be created, which export the text files. So the files could look like the following:
 *      export * as en from "./en.json"
 *      export * as de from "./de.json"
 *
 * 3. Provide the text for the hook
 * Therefore import these texts from index.js via "import * as translations from './texts'". Here we define the variable "translations" which points on the exported "en" and "de" variable from index.js
 *
 * 4. Implement the hook
 * The following code shows only a very simple hook. There is no default language, there is no fallback, etc. It doesn't provide functions vor setting the language, defaultLanguage etc. So it can be much more complex.
 * Anyway it shows in general how texts can be loaded.
 *
 * In the example at first the language is loaded from local Storage. If it is not available a default language is provided.
 * Next the function "translate" is implemented, which splits a key, which is provided for finding a text. So if the key is "homePage.header" it finds from function "getTranslations" the text from the imported translations.
 * The imported translation considers the current language "(translations as any)[language])"
 *
 * 5. Use the hook
 * The hook is used in the component below. It is usual to name the corresponding translation variable "t".
 * Within the component below {@link UseTranslationComponent} the translated text of the key "homepage.header" is translated
 */

import { useLocalStorage } from "../08 custom hooks/useLocalStorage";
import * as translations from "./texts";

export const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage<string>("language", "en");
  const translate = (key: string) => {
    const keys = key.split(".");
    return getTranslations(keys);
  };

  const getTranslations = (keys: string[]) => {
    return keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);
  };

  return translate;
};

export const UseTranslationComponent: React.FC = () => {
  const t = useTranslation();
  return <>{t("homePage.header")}</>;
};
