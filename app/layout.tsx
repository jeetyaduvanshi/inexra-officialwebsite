import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollObserver } from "@/components/shared/ScrollObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inexraresearch.com"),
  title: {
    default: "Inexra Research & Analytics | Survey Sample & Respondent Recruitment",
    template: "%s | Inexra Research & Analytics",
  },
  description:
    "Inexra Research & Analytics provides targeted consumer and B2B survey sample across India and international markets. Helping research teams reach the right respondents.",
  keywords: [
    "market research sample",
    "survey sample provider",
    "B2B research panel",
    "B2B respondents",
    "consumer survey sample",
    "global sample supply",
    "respondent recruitment",
    "market research respondents",
    "survey panel India",
    "sample buyer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inexraresearch.com",
    siteName: "Inexra Research & Analytics",
    title: "Inexra Research & Analytics | Survey Sample & Respondent Recruitment",
    description:
      "Targeted consumer and B2B survey sample across India and international markets. Partner with Inexra for your research sample needs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inexra Research & Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inexra Research & Analytics | Survey Sample & Respondent Recruitment",
    description:
      "Targeted consumer and B2B survey sample across India and international markets.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        <ScrollObserver />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
