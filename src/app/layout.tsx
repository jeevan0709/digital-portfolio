// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "JK's Digital Art Portfolio",
  description: "Explore the digital illustrations and UI/UX designs by JK – Graphic Designer & Visual Storyteller.",
  keywords: ["digital art", "illustration", "graphic design", "portfolio", "JK artist", "UI UX designer"],
  authors: [{ name: "JK" }],
  openGraph: {
    title: "JK's Digital Art Portfolio",
    description: "Explore the digital illustrations and UI/UX designs by JK – Graphic Designer & Visual Storyteller.",
    url: "https://yourprojectlink.com",
    siteName: "JK's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Make sure this image exists in your /public folder
        width: 1200,
        height: 630,
        alt: "JK's Digital Art Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


