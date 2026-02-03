"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (languageCode: string) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "peercheck_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<string>("en");
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language from localStorage or navigator
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    const browserLanguage = navigator.language?.split("-")[0] || "en";
    const initialLanguage = savedLanguage || browserLanguage;

    setCurrentLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage;
    document.documentElement.dir = getTextDirection(initialLanguage);
    setIsLoading(false);
  }, []);

  const setLanguage = (languageCode: string) => {
    setCurrentLanguageState(languageCode);
    localStorage.setItem(STORAGE_KEY, languageCode);
    document.documentElement.lang = languageCode;
    document.documentElement.dir = getTextDirection(languageCode);

    // Dispatch custom event for any listeners
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: { language: languageCode } }),
    );
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage, isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

function getTextDirection(languageCode: string): "ltr" | "rtl" {
  const rtlLanguages = ["ar", "he", "fa", "ur"];
  return rtlLanguages.includes(languageCode) ? "rtl" : "ltr";
}
