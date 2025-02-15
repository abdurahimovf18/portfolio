import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { GoTop } from "@/components/go-top/go-top";
import { NextThemeProvider } from "@/components/providers/nextThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi!",
  description: "Portfolio of Abdurahimov Fazliddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      > 
        <NextThemeProvider>
          <Header />
          {children}
          <Footer />
          <GoTop />
        </NextThemeProvider>
      </body>
    </html>
  );
}
