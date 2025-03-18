import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#CBACF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Dererk Copeland | Portfolio",
  description: "Modern & Minimal",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dererk Copeland",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#CBACF9" />
        <meta name="msapplication-navbutton-color" content="#CBACF9" />
        <meta name="msapplication-TileColor" content="#CBACF9" />
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