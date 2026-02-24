import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const siteUrl = "https://thinkcpa.us";
const siteName = "Think CPA";
const siteDescription =
  "Pass the CPA exam with your Agentic CPA Coach. Adaptive study plans, 24/7 tutoring, and FAR as a podcast. Early adopter pricing: $5/month.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Think CPA | Agentic CPA Exam Prep",
    template: "%s | Think CPA",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Think CPA | Agentic CPA Exam Prep",
    description:
      "Pass the CPA exam with your Agentic CPA Coach. Adaptive study plans, 24/7 tutoring, and FAR as a podcast.",
    type: "website",
    siteName,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/product_image.png",
        width: 1200,
        height: 630,
        alt: "Think CPA - Agentic CPA Exam Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Think CPA | Agentic CPA Exam Prep",
    description:
      "Pass the CPA exam with your Agentic CPA Coach. Adaptive study plans, 24/7 tutoring, and FAR as a podcast.",
    images: ["/product_image.png"],
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

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${oswald.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
