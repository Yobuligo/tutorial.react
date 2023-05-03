/**
 * More type safe but with some other restrictions might be to directly access the translation files via hook.
 * So it won't be possible to rename some nodes, but at least the syntax check would directly realize if a text wont be available.
 * Therefore, the useTranslation hook returns the lists of texts.
 * The problem hereby is that the texts must be in sync for all languages.
 *
 * But how to do it.
 *
 * Import the texts
 */

import * as translations from "./texts";

const useTranslation2 = () => {
  // language could be a separate hook
  const language: string = "en";
  switch (language) {
    case "de": {
      return { t: translations["de"] };
    }
    default: {
      return { t: translations["en"] };
    }
  }
};

/**
 * With this component it is possible to directly access the texts
 */
export const UseTranslationComponent2: React.FC = () => {
  const { t } = useTranslation2();
  return <>{t.homePage.header}</>;
};
