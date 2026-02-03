"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

type Translations = Record<string, any>;

const translationCache: Record<string, Translations> = {};

async function loadTranslation(languageCode: string): Promise<Translations> {
  if (translationCache[languageCode]) {
    return translationCache[languageCode];
  }

  try {
    const response = await import(`@/translations/${languageCode}.json`);
    translationCache[languageCode] = response.default;
    return response.default;
  } catch (error) {
    console.warn(`Translation file not found for language: ${languageCode}`);
    // Fallback to English
    if (languageCode !== "en") {
      return loadTranslation("en");
    }
    return {};
  }
}

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, prop) => current?.[prop], obj) || "";
}

export function useTranslation() {
  const { currentLanguage } = useLanguage();
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    loadTranslation(currentLanguage).then((trans) => {
      setTranslations(trans);
      setIsLoading(false);
    });
  }, [currentLanguage]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    let value = getNestedValue(translations, key);

    if (!value) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    // Replace parameters in the translation string
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value.replace(`{${paramKey}}`, String(paramValue));
      });
    }

    return value;
  };

  return { t, isLoading, currentLanguage };
}
