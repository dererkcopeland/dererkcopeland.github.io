import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dererk Copeland | Portfolio",
  description: "Modern & Minimal",
  themeColor: "#CBACF9", // Purple theme color for mobile devices
  appleWebApp: {
    statusBarStyle: "purple-translucent",
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
        <meta name="theme-color" content="#CBACF9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="purple-translucent" />
        <meta name="msapplication-navbutton-color" content="#CBACF9" />
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