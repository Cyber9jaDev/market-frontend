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
  title: "Varsity Market",
  description: "Market for students to buy and sell items on campus in Nigeria",
  keywords: ["sell", "buy", "online store", "university", "marketplace", "varsity", "students", "college", "campus", "campus-marketplace"],
  authors: [
    {
      name: "Ayodeji Oladapo",
      url: "https://varsitymarket.com",
    },
  ],
  creator: "Ayodeji Oladapo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
