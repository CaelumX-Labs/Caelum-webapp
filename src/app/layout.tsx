import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaelumX",
  description: "Revolutionizing Carbon Markets at Blockchain Speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
               <AppWalletProvider>{children}</AppWalletProvider>

        <header>
        </header>
        {children}

      </body>
    </html>
  );
}