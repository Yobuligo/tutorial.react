/**
 * Here is an implementation of the useTranslation hook, that provides the possibility to use placeholders, but also to use an object that contains a text with placeholders
 */

import * as translations from "./i18n";
import { texts } from "./useTranslation3";

/**
 * An implementation of this interface represents a translation.
 * It contains of a {@link text}, which should be a key of {@link texts}
 * and it can contain placeholders, which should be set within {@link text}.
 *
 * @example
 * const translation: Translation<{ name: string }> = {
 *   text: texts.hello,
 *   placeholders: { name: "John" },
 * };
 */
export interface ITranslation {
  text: string;
  placeholders?: object;
}

export const useTranslation = () => {
  const language = "en";

  const getTranslations = <T extends object>(
    keys: string[],
    placeholders?: T
  ) => {
    let result = keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);

    if (placeholders) {
      for (const propName in placeholders) {
        result = result.replaceAll(`{{${propName}}}`, placeholders[propName]);
      }
    }
    return result;
  };

  function t(key: string, placeholders?: object): string;
  function t(translation: ITranslation): string;
  function t(first: unknown, second?: unknown): string {
    if (typeof first === "string") {
      const keySegments = first.split(".");
      return getTranslations(keySegments, second as any);
    }

    const translation = first as ITranslation;
    const keySegments = translation.text.split(".");
    return getTranslations(keySegments, translation.placeholders);
  }

  return { t };
};

const UseTranslation: React.FC = () => {
  const { t } = useTranslation();

  // a translation with a text key
  let text = t(texts.homePage.header);

  // a translation with a text key and placeholder
  text = t(texts.sayHello, { name: "Stacey" });

  // a translation from a translation object
  const translation: ITranslation = {
    text: texts.sayHello,
    placeholders: { name: "Stacey" },
  };
  text = t(translation);

  return <>{text}</>;
};
