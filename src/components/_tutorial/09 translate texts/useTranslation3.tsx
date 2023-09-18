/**
 * This version of the translation should cover more features that version 1 and 2
 * Requirements:
 *      texts should be accessed type safe
 *      support default values
 *      support replace of placeholders
 *      support pluralization
 *      support fallback values
 *
 * Therefore we go back to the old mechanism to have a function that is responsible to translate and we need a variable that keeps the text structure, NOT the texts itself.
 * This variable has the same structure as the texts, but instead of having the texts as value it has the key as value.
 * So we can access the values type safe and later the value, which is now the key is converted to the correct word, depending on the selected variable
 */

import * as translations from "./i18n";

/**
 * This function is responsible for setting the path for each text instead of having the text itself.
 * E.g.
 *    {
 *      settings: {
 *          title: "My title"
 *      }
 *    }
 *
 * becomes
 *    {
 *      settings: {
 *          title: "settings.title"
 *      }
 *    }
 */
const fillPath = (source: object, path: string) => {
  const prefix = path ? `${path}.` : "";
  const target = {};
  for (const propName in source) {
    const propValue = (source as any)[propName];
    if (typeof propValue !== "object") {
      (target as any)[propName] = `${prefix}${propName}`;
    } else {
      const prefixSubObject = prefix ? `${prefix}${propName}` : propName;
      (target as any)[propName] = fillPath(
        (source as any)[propName],
        prefixSubObject
      );
    }
  }
  return target;
};

/**
 * This function is responsible for creating the text object. It has the correct structure, like the translation files but each property just contains the path of itself, instead of a text.
 * In addition we ensure that english is the leading language. So whenever another language is not provided, we have a fallback.
 * On the other hand this means, if a text is not available in english, we cannot use it.
 */
const createTextObject = () => {
  const texts: (typeof translations)["en"] = fillPath(
    translations["en"],
    ""
  ) as any;
  return texts;
};

/**
 * This variable is required to access the texts
 */
export const texts = createTextObject();

/**
 * The hook itself.
 */
export const useTranslation = () => {
  // language could be a separate hook, can be loaded by useLocalStorage or whatever
  const language: string = "en";

  const getTranslations = (keys: string[]) => {
    return keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);
  };

  /**
   * Splits the given key to translate the texts
   */
  const t = (key: string) => {
    const keySegments = key.split(".");
    return getTranslations(keySegments);
  };

  return { t };
};

const UseTranslationComponent: React.FC = () => {
  const { t } = useTranslation();
  return <>{t(texts.sayHello)}</>;
};
