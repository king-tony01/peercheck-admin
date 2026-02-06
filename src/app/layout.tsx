import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AdminProvider } from "@/context/AdminContext";
import { ToastProvider } from "@/components/Toast/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peercheck Admin",
  description: "Admin dashboard for Peercheck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <AdminProvider>
            <ToastProvider>{children}</ToastProvider>
          </AdminProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
