import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/WhatsAppButton"   // 👈 Import added

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apexium - Innovation at the Apexium",
  description:
    "Transforming businesses through cutting-edge technology, AI innovation, and digital excellence",
  icons: {
    icon: "/favicon.ico",
  },
  // You can uncomment SEO fields if needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />  {/* 👈 Always visible */}
        </ThemeProvider>
      </body>
    </html>
  )
}
