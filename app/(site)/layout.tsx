// app/layout.tsx or similar RootLayout file
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
// import { Inter } from "next/font/google";
import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`dark:bg-black flex flex-col min-h-screen`}>
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />

      {/* 将主内容设为 flex-grow，让 Footer 保持在底部 */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </ThemeProvider>
    </body>
    </html>
  );
}

