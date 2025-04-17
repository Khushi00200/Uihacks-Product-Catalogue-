import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ETHEREAL COLLECTION",
  description: "Premium fashion collection featuring distinctive designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-black text-white min-h-screen`}
      >
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
