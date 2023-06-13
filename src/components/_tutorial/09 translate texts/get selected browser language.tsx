/**
 * To set a default language depending on the browser settings, you can use the object navigator.
 * The language is e.g. in format de-DE
 */

import { useState } from "react";

const useTranslation = () => {
  const [language, setLanguage] = useState(navigator.language);
};
