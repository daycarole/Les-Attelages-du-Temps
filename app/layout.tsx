import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    verification: {
  google: "lTIA4P60Z3gP9gq",
},
  
  title:
    "Les Calèches du Temps | Calèches mariage et événementiel dans le Tarn",

  description:
    "Les Calèches du Temps propose des prestations de calèches pour mariages, cinéma et événements dans le Tarn, près d’Albi et Toulouse.",

  keywords: [
    "calèche mariage Tarn",
    "attelage mariage Toulouse",
    "calèche Albi",
    "attelage cinéma",
    "location calèche mariage",
    "attelage événementiel",
    "marché de Noël",
    "calèche Père Noël",
  ],

  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}