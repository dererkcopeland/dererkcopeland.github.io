import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// Viewport settings with the purple color from headings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: '#CBACF9',
};

// Basic metadata
export const metadata: Metadata = {
  title: "Dererk Copeland | Portfolio",
  description: "Modern & Minimal",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mobile status bar color settings */}
        {/* Android Chrome specific */}
        <meta name="theme-color" content="#CBACF9" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Dererk Copeland" />
        <link rel="manifest" href="/manifest.json" />

        {/* iOS specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dererk Copeland" />

        {/* Universal */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#CBACF9" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#CBACF9" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}