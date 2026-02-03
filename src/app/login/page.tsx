"use client";
import TextInput from "@/components/Input/TextInput";
import PageLangaugeSelector from "@/components/pageLanguage/PageLangaugeSelector";
import LoginHeroIcon from "@/icons/LoginHeroIcon";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthAvatar from "@/icons/AuthAvatar";
import styles from "./styles/Login.module.css";
import Button from "@/components/Button/Button";
import { EmailValidator } from "@/utils/EmailValidator";
import { ROUTE_PATHS } from "../routePaths";

function Login() {
  const { t } = useTranslation();
  const router = useRouter();

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [email, setEmail] = useState("");
  const emailValidation = email ? EmailValidator.validate(email) : null;
  const emailError =
    email && emailValidation && !emailValidation.isValid
      ? emailValidation.errors[0]
      : undefined;
  const isEmailValid = email ? EmailValidator.isValid(email) : false;
  const quotes = [
    {
      text: "Good place to learn fast, but the pressure is relentless. If you’re starting out, it’s a crash course. Just don’t expect work-life balance.",
      user: "Account Manager",
    },
    {
      text: "The salary is competitive and the benefits are solid, but the role requires you to be self-driven. Your growth depends heavily on taking initiative.",
      user: "Senior Analyst",
    },
    {
      text: "Great team culture and flexible arrangements. The projects are interesting and you get exposure to real-world challenges. Definitely worth considering.",
      user: "Product Manager",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);
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
          <LoginHeroIcon />
          <div>
            <h1>{t("login.title")}</h1>
            <p>{t("login.subtitle")}</p>
          </div>
          <div className={styles.actions}>
            <TextInput
              label={t("login.emailLabel")}
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={setEmail}
              error={emailError}
            />
            <Button
              onClick={() => router.push(ROUTE_PATHS.ADMIN_LOGIN_VERIFY)}
              variant="primary"
              disabled={!isEmailValid}
              overrideStyles={{ width: "100%" }}
            >
              {t("login.loginButton")}
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
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <AuthAvatar />
          <div className={styles.q_card}>
            <p>"{quotes[currentQuoteIndex].text}"</p>
            <small>{quotes[currentQuoteIndex].user}</small>
          </div>
          <div className={styles.dots}>
            {quotes.map((_, i) => (
              <span
                className={`${styles.dot} ${i === currentQuoteIndex ? styles.active : ""}`}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
