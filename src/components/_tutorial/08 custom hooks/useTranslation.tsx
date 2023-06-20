import { IValue } from "./useValue";
/**
 * The custom hook useTranslation depends on the language of the system or from the customizing.
 * So therefore it actually has a dependency to the custom hook useLanguage. And the useLanguage custom hook must actually be provided globally only once, so that each instance of useTranslation refers to the same language.
 */

import { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import * as translations from "../09 translate texts/i18n";

namespace UsTranslation {
  interface IValue<T> {
    value: T;
    setValue: (newValue: T) => void;
  }

  interface IAppContext {
    language: IValue<string>;
  }

  const useLanguage = (): IValue<string> => {
    const [language, setLanguage] = useLocalStorage("language", "en");
    return { value: language, setValue: setLanguage };
  };

  const AppContext = createContext<IAppContext>(null!);

  export const useTranslation = () => {
    const context = useContext(AppContext);
    switch (context.language.value) {
      case "de":
        return { t: translations["de"] };
      default:
        return { t: translations["en"] };
    }
  };

  const App: React.FC = () => {
    return (
      <AppContext.Provider
        value={{ language: useLanguage() }}
      ></AppContext.Provider>
    );
  };
}
