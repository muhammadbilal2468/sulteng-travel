// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppIcon from "./components/WhatsAppIcon";
import DeveloperCredit from "./components/DeveloperCredit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel & Tour Sulawesi Tengah",
  description:
    "Penyedia jasa travel, rental mobil, dan paket tour di Sulawesi Tengah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <WhatsAppIcon />
        <DeveloperCredit />
      </body>
    </html>
  );
}
