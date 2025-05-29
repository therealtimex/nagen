import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NAGEN - Chăm sóc bàn chân chuyên nghiệp | Tăm lót hỗ trợ vòm bàn chân",
  description:
    "NAGEN cung cấp sản phẩm tấm lót hỗ trợ vòm bàn chân chất lượng cao. Dịch vụ đo vòm bàn chân miễn phí, tư vấn chuyên nghiệp. Bảo hành 12 tháng, giao hàng toàn quốc.",
  keywords: "tấm lót bàn chân, hỗ trợ vòm bàn chân, NAGEN, chăm sóc bàn chân, sản phẩm y tế",
  authors: [{ name: "NAGEN" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "NAGEN - Chăm sóc bàn chân chuyên nghiệp",
    description: "Sản phẩm tấm lót hỗ trợ vòm bàn chân chất lượng cao, được tin tưởng bởi hàng nghìn khách hàng",
    type: "website",
    locale: "vi_VN",
    siteName: "NAGEN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="canonical" href="https://nagen.vn" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
