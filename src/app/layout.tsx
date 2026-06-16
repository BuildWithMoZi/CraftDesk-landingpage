import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { createMetadata, logoUrl, siteConfig } from "@/lib/metadata";
import { themeInitScript } from "@/lib/theme";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ScrollToTop, HomeLoaderGuard } from "@/components/navigation/home-navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { globalSchemas } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  icons: {
    icon: logoUrl(),
    apple: logoUrl(),
    shortcut: logoUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${orbitron.variable} h-full scroll-smooth`}
      data-theme='light'
      suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
          suppressHydrationWarning
        />
      </head>
      <body className='min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased'>
        <JsonLd data={globalSchemas()} />
        <ThemeProvider>
          <ScrollToTop />
          <HomeLoaderGuard />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
