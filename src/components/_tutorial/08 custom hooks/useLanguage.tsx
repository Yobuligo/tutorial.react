/**
 * useLanguage could be a hook for providing a central function to get and set the language.
 * This hook could be used by useTranslation.
 *
 * To ensure that all caller components of useTranslation is updated, useLanguage must access a central useState.
 * This is possible by using e.g. an AppContext property.
 *
 * In addition the default language could be loaded via LocalStorage within the AppContext
 */

import { createContext, useContext } from "react";
import { ValueDummy } from "./useValue";

enum Language {
  de,
  en,
}

const AppContextData = {
  language: new ValueDummy<Language>(),
};

const AppContext = createContext(AppContextData);

/**
 * The useLanguage hook only wraps the context property and setter for language
 * Whenever the language of the context will change all caller of useLanguage have to be rerendered.
 * When using useLanguage in useTranslation, this means also all useTranslation components have to be rerendered
 */
export const useLanguage = () => {
  const context = useContext(AppContext);
  return [context.language.value, context.language.setValue];
};
