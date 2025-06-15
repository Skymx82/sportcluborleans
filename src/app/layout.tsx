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
  title: "Sport Club Orléans - Fitness, Biking, Cross, Squash, Zen & Détente",
  description: "Découvrez Sport Club Orléans, salle de sport offrant fitness, biking, cross, squash, flex & bien-être. Profitez de studios immersifs, terrains de squash, espaces zen et détente avec coaching personnalisé.",
  keywords: "salle de sport, Orléans, fitness, biking, cross, squash, bien-être, coaching, détente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
