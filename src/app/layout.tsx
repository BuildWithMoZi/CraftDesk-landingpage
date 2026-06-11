import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { createMetadata } from "@/lib/metadata";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { HomeLoaderGuard } from "@/components/navigation/home-loader-guard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <ScrollToTop />
        <HomeLoaderGuard />
        {children}
      </body>
    </html>
  );
}
