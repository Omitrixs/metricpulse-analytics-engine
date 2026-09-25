import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSansHeading = DM_Sans({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MetricPulse — Real-Time B2B SaaS Analytics Engine",
    template: "%s | MetricPulse",
  },
  description: "MetricPulse is a high-performance B2B SaaS analytics engine providing real-time data visualization, user retention insights, and predictive churn metrics.",
  keywords: [
    "SaaS Analytics",
    "B2B Dashboard",
    "Next.js App Router",
    "Data Visualization",
    "Recharts",
    "Tailwind CSS",
  ],
  authors: [{ name: "Omitusa Toyosi" }],
  openGraph: {
    title: "MetricPulse — Real-Time B2B SaaS Analytics Engine",
    description:
      "A production-ready analytics engine built with Next.js App Router, shadcn/ui, and Recharts.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, dmSansHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
