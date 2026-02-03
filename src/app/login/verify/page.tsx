"use client";
import OTPInput from "@/components/Input/OTPInput";
import PageLangaugeSelector from "@/components/pageLanguage/PageLangaugeSelector";
import LoginHeroIcon from "@/icons/LoginHeroIcon";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Button from "@/components/Button/Button";
import LoginVerifyIcon from "@/icons/LoginVerifyIcon";
function Verify() {
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const isOtpComplete = otp.length === 4;
  return (
    <section className={styles.login}>
      <div className={styles.left}>
        <Image
          src={"/logo.png"}
          alt="Peercheck Logo"
          width={150}
          height={50}
          className={styles.logo}
        />
        <div className={styles.center}>
          <LoginVerifyIcon />
          <div>
            <h1>{t("verify.title")}</h1>
            <p>{t("verify.subtitle")}</p>
          </div>
          <div className={styles.actions}>
            <OTPInput length={4} autoFocus value={otp} onChange={setOtp} />
            <Button
              onClick={() => {
                if (!isOtpComplete) return;
              }}
              variant="primary"
              disabled={!isOtpComplete}
              overrideStyles={{ width: "100%" }}
            >
              {t("verify.button")}
            </Button>
          </div>
        </div>
        <div className={styles.bottom}>
          <small>
            {t("login.copyright", { year: new Date().getFullYear() })}
          </small>
          <PageLangaugeSelector position="top-right" />
        </div>
      </div>
    </section>
  );
}

export default Verify;
