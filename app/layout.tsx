import type { Metadata } from "next";
import { Adamina, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BRAND_ASSETS } from "@/lib/blogs";

const adamina = Adamina({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-adamina",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://blog.asmmoldremoval.ca"),
  title: {
    default: "ASM Mold Removal Learning Centre",
    template: "%s | ASM Mold Removal"
  },
  description:
    "Ontario mold removal guides from ASM Mold Removal Inc. Read expert advice on inspection, mitigation, attic mold, basement moisture, HEPA containment, and prevention.",
  openGraph: {
    type: "website",
    siteName: "ASM Mold Removal Learning Centre",
    title: "ASM Mold Removal Learning Centre",
    description: "Same-day Ontario mold removal guidance from ASM Mold Removal Inc.",
    images: [BRAND_ASSETS.hero]
  },
  twitter: {
    card: "summary_large_image",
    title: "ASM Mold Removal Learning Centre",
    description: "Same-day Ontario mold removal guidance from ASM Mold Removal Inc.",
    images: [BRAND_ASSETS.hero]
  },
  icons: {
    apple: BRAND_ASSETS.certificate
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${adamina.variable} ${poppins.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
