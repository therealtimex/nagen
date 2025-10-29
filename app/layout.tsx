import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StructuredData from "./structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nagen - Tấm lót hỗ trợ vòm bàn chân nhập khẩu từ Mỹ",
  description:
    "Tấm lót hỗ trợ vòm bàn chân NAGEN nhập khẩu từ Mỹ - Bio Orthotics International. Dịch vụ đo vòm bàn chân miễn phí, tư vấn chuyên nghiệp. Bảo hành 12 tháng, giao hàng toàn quốc. Hơn 4 triệu người tin dùng.",
  keywords: "tấm lót hỗ trợ vòm bàn chân, NAGEN, nhập khẩu từ Mỹ, Bio Orthotics, chăm sóc bàn chân, sản phẩm y tế, đau chân, vòm bàn chân",
  authors: [{ name: "NAGEN" }],
  robots: "index, follow",
  publisher: "NAGEN",
  applicationName: "NAGEN",
  openGraph: {
    title: "Nagen - Tấm lót hỗ trợ vòm bàn chân nhập khẩu từ Mỹ",
    description: "Tấm lót hỗ trợ vòm bàn chân NAGEN nhập khẩu từ Mỹ - Bio Orthotics International. Hơn 4 triệu người tin dùng trên toàn thế giới.",
    type: "website",
    locale: "vi_VN",
    siteName: "NAGEN",
    url: "https://nagen.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagen - Tấm lót hỗ trợ vòm bàn chân nhập khẩu từ Mỹ",
    description: "Tấm lót hỗ trợ vòm bàn chân NAGEN nhập khẩu từ Mỹ - Bio Orthotics International",
    site: "@nagen",
  },
  alternates: {
    canonical: "https://nagen.vn",
  },
}

export async function generateViewport(): Promise<Viewport> {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: "#1e3a8a",
  }
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
        <meta name="google-site-verification" content="" />
        <meta property="og:site_name" content="NAGEN" />
        <meta property="og:url" content="https://nagen.vn" />
        <meta property="og:image" content="https://nagen.vn/images/logo_slogan_1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://nagen.vn/images/logo_slogan_1.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="VN" />
        <meta name="geo.country" content="Vietnam" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="alternate" hrefLang="vi" href="https://nagen.vn" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://rtchat.rtworkspace.com";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: 'Xgft1pQhMTqqf4us17Vj9jhr',
                    baseUrl: BASE_URL,
                    position: 'left',
                    type: 'standard'
                  })
                }
              })(document,"script");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
