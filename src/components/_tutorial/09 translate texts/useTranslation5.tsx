/**
 * The following implementation of useTranslation even provides the possibility to have placeholders, which are JSX.Elements, to e.g. inject Links.
 */

import { Link } from "react-router-dom";
import * as translations from "./i18n";
import { texts } from "./useTranslation3";

/**
 * This type represents a placeholder for translations. A placeholder must either be a string or of type JSX.Element, to inject e.g. links.
 */
export type Placeholder = { [key: string]: string | JSX.Element };

/**
 * Returns if {@link placeholders} contains a property which is of type object.
 * @example
 * // Here property link would be of object type JSX.Element. So the function would return true
 * { contractId: "123", link: <></> };
 */
function containsObjectProp<T extends object>(placeholders: T) {
  for (const propName in placeholders) {
    if (typeof placeholders[propName] === "object") {
      return true;
    }
  }
  return false;
}

/**
 * Returns {@link text} filled with all given literal {@link placeholders}.
 */
function fillTextPlaceholders<T>(text: string, placeholders: T): string {
  for (const propName in placeholders) {
    const value = placeholders[propName];
    text = text.replaceAll(`{{${propName}}}`, value as string);
  }
  return text;
}

/**
 * Finds a placeholder from {@link placeholders} by a {@link placeholderName}.
 * Returns undefined if no placeholder with {@link placeholderName} exists.
 */
function findPlaceholder<T extends object>(
  placeholders: T,
  placeholderName: string
) {
  for (const propName in placeholders) {
    if (propName === placeholderName) {
      return placeholders[propName];
    }
  }
  return undefined;
}

/**
 * Returns {@link text} wrapped as a JSX.Element filled with all given {@link placeholders} including objects.
 */
function fillObjectPlaceholders<T extends object>(
  text: string,
  placeholders: T
): JSX.Element {
  // Split text at {{placeholder}}
  const texts = text.split(/({{.*?}})/);

  // wrap text elements by fragment
  // if text is a placeholder, find the placeholder and set it instead of the text
  const items = texts.map((text) => {
    const placeholder = findPlaceholder(placeholders, text);
    return <>{placeholder ? placeholder : text}</>;
  });

  // return combined element
  return <div>{items}</div>;
}

/**
 * Returns {@link text} filled with all given {@link placeholders}.
 * If the placeholders are just text, the placeholder would be replaced by the corresponding text and a string is returned.
 * If at least one placeholder is of type object, the result is a JSX.Element, which wraps the text by fragments.
 */
export function fillPlaceholders<T extends object>(
  text: string,
  placeholders: T
): T[keyof T] {
  // check if placeholders contains a property of type object
  // if so, it has to be wrapped by a component, so we cannot return a simple string, but a JSX.Element
  if (containsObjectProp(placeholders)) {
    return fillObjectPlaceholders(text, placeholders) as T[keyof T];
  }

  return fillTextPlaceholders(text, placeholders) as T[keyof T];
}

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
  placeholders?: Placeholder;
}

/**
 * This custom hook is responsible for providing access to translatable texts of the selected language.
 * The texts are defined in folder 'i18n'. They can be addressed via constant {@link texts}.
 * It can be used as follows:
 *
 * @example
 * const { t } = useTranslation()
 * t(texts.myTextReference)
 *
 * // Placeholders can be provided as second parameter
 * // The placeholder in the corresponding text definition must be defined as e.g. "myTextReference": "Hello {{name}}"
 * t(texts.myTextReference, { name: "John" })
 *
 */
const useTranslation = () => {
  const language = "en";

  const getTranslations = <T extends Placeholder>(
    keys: string[],
    placeholders?: T
  ) => {
    let text = keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);

    if (placeholders) {
      text = fillPlaceholders(text, placeholders);
    }

    return text;
  };

  /**
   * Returns the text with the given {@link key}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   * }
   *
   * t(texts.demo);
   */
  function t(key: string): string;
  /**
   * Returns the text with the given {@link key} and {@link placeholders}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   *    "demo2": "Hello World {{firstname}}"
   * }
   *
   * t(texts.demo);
   * t(texts.demo, { firstname: "Stacey" });
   */
  function t<T extends Placeholder>(key: string, placeholders: T): T[keyof T];
  /**
   * Returns the text from the given {@link translation}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   *    "demo2": "Hello World {{firstname}}"
   * }
   *
   * const translation: ITranslation = {
   *   text: texts.demo,
   *   placeholders: { firstname: "Stacey" },
   * };
   * t(translation);
   */
  function t<T = string>(translation: ITranslation): T;
  function t<T = string>(first: unknown, second?: unknown): T {
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

  // a translation with a text key and placeholder, where the placeholder is a JSX.Element
  const text = t(texts.sayHello, { name: <Link to={"/"}>here</Link> });

  return <>{text}</>;
};
