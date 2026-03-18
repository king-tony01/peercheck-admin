"use client";
import styles from "./styles/MainLayout.module.css";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ChevronLeft from "@/icons/ChevronLeft";
import PageLangaugeSelector from "@/components/pageLanguage/PageLangaugeSelector";
import { useTranslation } from "@/hooks/useTranslation";

function FullViewPage() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Full View";
  const value = searchParams.get("value") || "0";
  const router = useRouter();
  return (
    <section className={styles.page_content}>
      <div className={styles.back_button}>
        <button onClick={() => router.back()}>
          <span className={styles.icon}>
            <ChevronLeft />
          </span>
          <span>Back</span>
        </button>
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <h1>{Number(value).toLocaleString()}</h1>
      </div>
      <div className={styles.bottom}>
        <small>
          {t("login.copyright", { year: new Date().getFullYear() })}
        </small>
        <PageLangaugeSelector position="top-right" />
      </div>
    </section>
  );
}

export default FullViewPage;
