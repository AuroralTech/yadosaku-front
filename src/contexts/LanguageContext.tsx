import { createContext, useContext, useState } from "react";
import ja from "@/i18n/locales/ja";
import en from "@/i18n/locales/en";
import ko from "@/i18n/locales/ko";
import zh from "@/i18n/locales/zh";

const locales = { ja, en, ko, zh } as const;
type LocaleKey = keyof typeof locales;

type LanguageContextType = {
  locale: LocaleKey;
  t: (key: string) => string;
  setLocale: (locale: LocaleKey) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState<LocaleKey>("ja");

  const t = (key: string) => {
    const keys = key.split(".");
    let value: unknown = locales[locale];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
      if (value === undefined) return key;
    }

    if (typeof value !== "string") return key;
    return value;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
