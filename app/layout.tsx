import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bet-tools.com"),
  title: {
    default: "Betting Calculators and Odds Tools",
    template: "%s | Betting Calculators and Odds Tools",
  },
  description:
    "Free betting calculators for odds conversion, fair probability, arbitrage, expected value, and bankroll strategy.",
  keywords: [
    "betting calculators",
    "odds converter",
    "arbitrage calculator",
    "fair probability calculator",
    "expected value calculator",
    "kelly calculator",
    "sports betting tools",
  ],
  openGraph: {
    title: "Betting Calculators and Odds Tools",
    description:
      "Free betting calculators for odds conversion, fair probability, arbitrage, expected value, and bankroll strategy.",
    url: "https://bet-tools.com",
    siteName: "Betting Calculators and Odds Tools",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Betting Calculators and Odds Tools",
    description:
      "Free betting calculators for odds conversion, fair probability, arbitrage, expected value, and bankroll strategy.",
  },
  alternates: {
    canonical: "https://bet-tools.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${openSans.className} min-h-screen flex flex-col`}
        style={{ background: "#ffffff", margin: 0 }}
      >
        <Header />

        <main
          className="grow"
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </main>

        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0XWE1RWZ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W0XWE1RWZ3');`}
        </Script>
      </body>
    </html>
  );
}