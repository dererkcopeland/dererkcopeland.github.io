import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#CBACF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Changed to allow zooming for better accessibility
  userScalable: true,
  viewportFit: "cover",
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
        
        {/* iOS specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Android/Chrome specific - more important for your case */}
        <meta name="theme-color" content="#CBACF9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#CBACF9" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#CBACF9" /> {/* Fallback for browsers that don't support media queries in meta */}
        <meta name="color-scheme" content="dark light" />
        
        {/* Microsoft specific */}
        <meta name="msapplication-navbutton-color" content="#CBACF9" />
        <meta name="msapplication-TileColor" content="#CBACF9" />
        
        {/* Script to help with status bar color on Android */}
        <script src="/status-bar-color.js" async></script>
        
        {/* Add CSS variable for theme color */}
        <style>{`
          :root {
            --theme-color: #CBACF9;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --theme-color: #CBACF9;
            }
          }
        `}</style>
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