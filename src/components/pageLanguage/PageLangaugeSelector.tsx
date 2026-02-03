"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles/PageLanguageSelector.module.css";
import LangGlobe from "@/icons/LangGlobe";
import ChevronDown from "@/icons/ChevronDown";
import { useLanguage } from "@/context/LanguageContext";

interface Language {
  code: string;
  label: string;
  nativeName: string;
}

interface PageLanguageSelectorProps {
  defaultLanguage?: string;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

function PageLangaugeSelector({
  defaultLanguage,
  position = "bottom-left",
}: PageLanguageSelectorProps) {
  const { currentLanguage, setLanguage } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availableLanguages: Language[] = [
    { code: "en", label: "English", nativeName: "English" },
    { code: "es", label: "Spanish", nativeName: "Español" },
    { code: "fr", label: "French", nativeName: "Français" },
    { code: "de", label: "German", nativeName: "Deutsch" },
    { code: "zh", label: "Chinese", nativeName: "中文" },
    { code: "ar", label: "Arabic", nativeName: "العربية" },
    { code: "pt", label: "Portuguese", nativeName: "Português" },
    { code: "ja", label: "Japanese", nativeName: "日本語" },
    { code: "ru", label: "Russian", nativeName: "Русский" },
    { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
  ];

  const currentLanguageObj =
    availableLanguages.find((lang) => lang.code === currentLanguage) ||
    availableLanguages[0];

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setOpen(false);
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const dropdownClass = [
    styles.languages,
    styles[position.replace("-", "_")],
  ].join(" ");

  return (
    <div
      className={`${styles.pg_lang_wrapper} ${open ? styles.open : ""}`}
      onClick={handleToggle}
      ref={dropdownRef}
      role="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(!open);
        }
      }}
    >
      <LangGlobe />
      <span>{currentLanguageObj.code.toUpperCase()}</span>
      <ChevronDown />
      {open && (
        <div className={dropdownClass} role="listbox">
          {availableLanguages.map((lang) => (
            <div
              className={`${styles.language} ${
                lang.code === currentLanguage ? styles.active : ""
              }`}
              key={lang.code}
              role="option"
              aria-selected={lang.code === currentLanguage}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageSelect(lang.code);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleLanguageSelect(lang.code);
                }
              }}
              tabIndex={0}
            >
              <span className={styles.language_label}>{lang.label}</span>
              <span className={styles.language_native}>{lang.nativeName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PageLangaugeSelector;
