"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

import Cookies from "js-cookie";
import { I18n } from "i18n-js";
import type { TranslateOptions } from "i18n-js";

import { LANGUAGES, COOKIE_KEYS } from "@app/constants";

type UseLocaleReturnsTypes = {
  t: (scope: string, options?: { [key: string]: string | number }) => string;
  locale: string;
  changeLocale: (localeParam: string) => void;
};

const DEFAULT_LOCALE = LANGUAGES.ENGLISH;

const LocaleContext = createContext({} as UseLocaleReturnsTypes);

const translationGetters = {
  [LANGUAGES.ENGLISH]: require("../assets/locales/en.json"),
  [LANGUAGES.TURKISH]: require("../assets/locales/tr.json"),
};

const i18n = new I18n(translationGetters);

function getDefaultLocale() {
  const availableLanguages = Object.keys(translationGetters);

  const cookieLanguage = Cookies.get(COOKIE_KEYS.LANGUAGE);

  if (cookieLanguage && availableLanguages.includes(cookieLanguage)) {
    return cookieLanguage;
  }

  return DEFAULT_LOCALE;
}

export const LocaleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE);

  i18n.locale = locale;

  function changeLocale(localeParam: string) {
    setLocale(localeParam);
    Cookies.set(COOKIE_KEYS.LANGUAGE, localeParam);
  }

  function t(scope: string, options?: TranslateOptions) {
    return i18n.t(scope, options);
  }

  useEffect(() => {
    setLocale(getDefaultLocale());
  }, []);

  return (
    <LocaleContext.Provider
      value={{
        t,
        locale,
        changeLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default function useLocale(): UseLocaleReturnsTypes {
  const context = useContext(LocaleContext);

  return context;
}
