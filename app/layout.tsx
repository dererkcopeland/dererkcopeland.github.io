import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import dynamic from "next/dynamic";

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

// Dynamic import of the StatusBarColorFix component to avoid SSR issues
const StatusBarColorFix = dynamic(() => import('@/components/StatusBarColorFix'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: '#CBACF9' }}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* iOS specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Android/Chrome specific with highest priority */}
        <meta name="theme-color" content="#CBACF9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#CBACF9" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#CBACF9" /> {/* Fallback for browsers that don't support media queries in meta */}
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        
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
          /* Force background color at the top */
          html::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: env(safe-area-inset-top, 5px);
            background-color: #CBACF9;
            z-index: 999999;
          }
          /* Set body background explicitly */
          body {
            background-color: #000319;
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
          {/* Status bar color fix component for development */}
          <StatusBarColorFix />
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}