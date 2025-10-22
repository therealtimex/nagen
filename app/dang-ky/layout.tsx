import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Đăng ký - NAGEN | Tư vấn miễn phí và Đại lý",
  description: "Đăng ký tư vấn miễn phí hoặc trở thành đại lý NAGEN. Nhận hỗ trợ chuyên nghiệp về tấm lót hỗ trợ vòm bàn chân từ các chuyên gia hàng đầu.",
  keywords: "đăng ký NAGEN, tư vấn miễn phí, đại lý NAGEN, tấm lót hỗ trợ vòm bàn chân, kinh doanh, cơ hội đầu tư",
  openGraph: {
    title: "Đăng ký - NAGEN | Tư vấn miễn phí và Đại lý",
    description: "Đăng ký tư vấn miễn phí hoặc trở thành đại lý NAGEN. Nhận hỗ trợ chuyên nghiệp về tấm lót hỗ trợ vòm bàn chân từ các chuyên gia hàng đầu.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đăng ký - NAGEN | Tư vấn miễn phí và Đại lý",
    description: "Đăng ký tư vấn miễn phí hoặc trở thành đại lý NAGEN. Nhận hỗ trợ chuyên nghiệp về tấm lót hỗ trợ vòm bàn chân từ các chuyên gia hàng đầu.",
  },
}

export default function DangKyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}