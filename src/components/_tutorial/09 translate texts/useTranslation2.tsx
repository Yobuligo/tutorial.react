/**
 * More type safe but with some other restrictions might be to directly access the translation files via hook.
 * So it won't be possible to rename some nodes, but at least the syntax check would directly realize if a text wont be available.
 * Therefore, the useTranslation hook returns the lists of texts.
 * The problem hereby is that the texts must be in sync for all languages.
 *
 * But how to do it.
 * 1. see steps 1 - 3 from "useTranslation" hook.
 * 2. import the texts via variable (here translations) from the folder texts.
 * 3. return the text depending on the translation
 */

import * as translations from "./texts";

const useTranslation2 = () => {
  // language could be a separate hook
  const language: string = "en";

  const i = (text: string, placeholders: any): string => {
    let textCopy = text;
    for (const placeholder in placeholders) {
      textCopy = textCopy.replaceAll(
        `{{${placeholder}}}`,
        placeholders[placeholder]
      );
    }
    return textCopy;
  };

  switch (language) {
    case "de": {
      return { t: translations["de"], i };
    }
    default: {
      return { t: translations["en"], i };
    }
  }
};

/**
 * With this component it is possible to directly access the texts
 * Via a separate text interpolation function placeholders can be replaced
 */
export const UseTranslationComponent2: React.FC = () => {
  const { t, i } = useTranslation2();
  return (
    <>
      <div>{t.homePage.header}</div>
      <div>{i(t.sayHello, { name: "Peter" })}</div>
    </>
  );
};
