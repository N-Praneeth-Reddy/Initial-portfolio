import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
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
  title: "Praneeth N | AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in agentic AI, LLM-driven workflows, RAG pipelines, and scalable backend systems. Building intelligent, production-grade AI systems.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LangChain",
    "LangGraph",
    "RAG",
    "Agentic AI",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Praneeth",
  ],
  authors: [{ name: "Praneeth N" }],
  creator: "Praneeth N",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://praneeth.dev",
    title: "Praneeth N | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in agentic AI, LLM-driven workflows, and production-grade ML systems.",
    siteName: "Praneeth N Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praneeth N | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in agentic AI, LLM-driven workflows, and production-grade ML systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
