import { LanguageProvider } from "@/context/LanguageContext";
import React from "react";
import { generalSans, tanker } from "../fonts";
import "../globals.css";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} ${tanker.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

export default LoginLayout;
