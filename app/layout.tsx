import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// Viewport settings with theme color for Android
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#CBACF9", // Purple color from headings
};

// Metadata with iOS and Android configurations
export const metadata: Metadata = {
  title: "Dererk Copeland | Portfolio",
  description: "Modern & Minimal",
  appleWebApp: {
    capable: true,
    title: "Dererk Copeland",
    statusBarStyle: "default"
  },
  themeColor: "#CBACF9"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: "#000319" }}>
      <head>
        {/* Basic favicon */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Single, simple theme-color meta tag for Android - exactly matching the heading purple color */}
        <meta name="theme-color" content="#CBACF9" />
        
        {/* iOS meta tags - using default status bar style with color */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dererk Copeland" />
        
        {/* Add touch icon for iOS */}
        <link rel="apple-touch-icon" href="/favicon.png" />
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