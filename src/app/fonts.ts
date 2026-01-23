import localFont from "next/font/local";

export const tanker = localFont({
  src: [
    { path: "../fonts/Tanker-Regular.otf", style: "normal", weight: "400" },
  ],
  variable: "--font-tanker",
  display: "swap",
});
