import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "MoneySense | Financial Literacy Workbook for Young Adults & Beginners",
    template: "%s | MoneySense",
  },
  description:
    "Master personal finance with our guided workbook and community. Learn practical money management skills for young adults – budgeting, saving, investing, and building financial confidence step-by-step.",
  keywords: [
    "financial literacy for young adults",
    "personal finance workbook",
    "money management for beginners",
    "financial education workbook",
    "budgeting for young adults",
    "saving and investing basics",
    "financial clarity course",
    "money skills for teens and college students",
  ],
  authors: [{ name: "MoneySense Team" }],
  creator: "MoneySense",
  publisher: "MoneySense",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.yourdomain.com", // Replace with your actual domain
  },
  openGraph: {
    title: "MoneySense – Action-Based Financial Literacy Workbook for Young Adults",
    description:
      "A guided workbook and supportive community to help young people learn practical finance skills while implementing them in real life.",
    url: "https://www.yourdomain.com",
    siteName: "MoneySense",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 OG image to public folder
        width: 1200,
        height: 630,
        alt: "MoneySense Financial Literacy Workbook",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneySense | Learn Practical Money Skills with Our Guided Workbook",
    description:
      "Financial education designed for young adults – learn budgeting, saving, and investing through action-based exercises.",
    images: ["/twitter-image.jpg"], // Optional: separate Twitter image
    creator: "@yourtwitterhandle", // Replace if you have one
  },
  verification: {
    google: "your-google-site-verification-code", // Add if you have Google Search Console
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}