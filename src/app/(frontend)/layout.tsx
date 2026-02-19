import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Think CPA | Agentic CPA Exam Prep",
  description:
    "Pass the CPA exam with your Agentic CPA Coach. Adaptive study plans, 24/7 tutoring, and FAR as a podcast. Early adopter pricing: $5/month.",
  openGraph: {
    title: "Think CPA | Agentic CPA Exam Prep",
    description:
      "Pass the CPA exam with your Agentic CPA Coach. Adaptive study plans, 24/7 tutoring, and FAR as a podcast.",
    type: "website",
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
      </body>
    </html>
  );
}
