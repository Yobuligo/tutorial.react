/**
 * This version of the translation should cover more features that version 1 and 2
 * Requirements:
 *      texts should be accessed type safe
 *      support default values
 *      support replace of placeholders
 *      support pluralization
 *      support fallback values
 */

import { useLocalStorage } from "../08 custom hooks/useLocalStorage";
import * as translations from "./texts";


export const t = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [language, setLanguage] = useLocalStorage("language", "en")

  const i = (text:string, placeholders: string[])=>{}

}

const useTranslation3 = () => {
  return { t: translations["en"] };
};
