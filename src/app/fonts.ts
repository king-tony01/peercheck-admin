import localFont from "next/font/local";

export const tanker = localFont({
  src: [
    { path: "../fonts/Tanker-Regular.otf", style: "normal", weight: "400" },
  ],
  variable: "--font-tanker",
  display: "swap",
});

export const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Variable.ttf",
      style: "normal",
      weight: "200 700",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.ttf",
      style: "italic",
      weight: "200 700",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
