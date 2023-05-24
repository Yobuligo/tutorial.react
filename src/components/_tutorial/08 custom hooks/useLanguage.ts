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


enum Language{
    de,
    en
}

const AppContextData = {
    language: Language
}

const AppContext = createContext(AppContextData)

export const useLanguage = () => {
    const language = useContext(AppContext)

    const setLanguage = (newLanguage: Language) => {
        
    }
};
