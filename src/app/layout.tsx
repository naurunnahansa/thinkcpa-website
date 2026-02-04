import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Think CPA | AI-Powered CPA Exam Prep",
  description:
    "Pass the CPA exam on your first try with AI-powered study plans, adaptive practice, and 24/7 tutoring. Join 2,500+ candidates with an 89% pass rate.",
  openGraph: {
    title: "Think CPA | AI-Powered CPA Exam Prep",
    description:
      "Pass the CPA exam on your first try with AI-powered study plans, adaptive practice, and 24/7 tutoring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
