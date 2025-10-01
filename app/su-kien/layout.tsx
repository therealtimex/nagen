import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sự kiện NAGEN - Tin tức và Hội thảo',
  description: 'Cập nhật những sự kiện mới nhất, hội thảo chuyên môn và thông tin sản phẩm từ NAGEN. Tham gia các hội thảo chăm sóc sức khỏe bàn chân và tư vấn chuyên gia.',
  keywords: 'NAGEN, sự kiện, hội thảo, chăm sóc bàn chân, sản phẩm mới, tư vấn chuyên gia',
  openGraph: {
    title: 'Sự kiện NAGEN - Tin tức và Hội thảo',
    description: 'Cập nhật những sự kiện mới nhất, hội thảo chuyên môn và thông tin sản phẩm từ NAGEN',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sự kiện NAGEN - Tin tức và Hội thảo',
    description: 'Cập nhật những sự kiện mới nhất, hội thảo chuyên môn và thông tin sản phẩm từ NAGEN',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}