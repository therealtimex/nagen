import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Eye, Share2, Facebook, Twitter, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";
import { notFound } from "next/navigation";
import ClientEventDetail from "./ClientEventDetail";

// Mock data cho chi tiết sự kiện
const eventDetails = {
  1: {
    id: 1,
    title: "Ra mắt sản phẩm mới - Tấm lót hỗ trợ vòm bàn chân NAGEN",
    date: "15/09/2025",
    views: 1000,
    category: "Sản phẩm mới",
    description: "Tấm lót hỗ trợ vòm bàn chân NAGEN chính thức ra mắt với công nghệ tiên tiến.",
    image: "/images/products/tam-lot-ho-tro-vom-ban-chan.jpg",
    content: `
      <h2>Giới thiệu sản phẩm</h2>
      <p>Tấm lót hỗ trợ vòm bàn chân NAGEN là sản phẩm được nghiên cứu và phát triển bởi các chuyên gia hàng đầu trong lĩnh vực chỉnh hình bàn chân.</p>
      
      <p>Sản phẩm được thiết kế đặc biệt để hỗ trợ vòm bàn chân, giúp giảm đau nhức, mỏi chân, đồng thời cải thiện dáng đi và phòng ngừa các bệnh lý về bàn chân.</p>

      <h2>Tính năng nổi bật</h2>
      <ul>
        <li>Chất liệu cao cấp, an toàn cho da</li>
        <li>Thiết kế ergonomic, phù hợp với cấu trúc bàn chân người Việt</li>
        <li>Hỗ trợ vòm bàn chân hiệu quả</li>
        <li>Giảm đau nhức, mỏi chân</li>
        <li>Cải thiện tư thế đi lại</li>
        <li>Độ bền cao, sử dụng lâu dài</li>
      </ul>

      <h2>Công nghệ sản xuất</h2>
      <p>NAGEN áp dụng công nghệ sản xuất hiện đại từ Châu Âu:</p>
      <ul>
        <li>Quy trình sản xuất khép kín, đảm bảo chất lượng</li>
        <li>Kiểm tra chất lượng nghiêm ngặt tại mọi công đoạn</li>
        <li>Sử dụng nguyên liệu nhập khẩu cao cấp</li>
        <li>Thiết kế dựa trên nghiên cứu khoa học về cấu trúc bàn chân</li>
      </ul>

      <h2>Thông tin liên hệ</h2>
      <p>Để biết thêm thông tin chi tiết về sản phẩm, quý khách vui lòng liên hệ:</p>
      <ul>
        <li>Hotline: 0966578008</li>
        <li>Website: nagen.vn</li>
        <li>Email: nagen@nagen.vn</li>
      </ul>
    `
  },
  2: {
    id: 2,
    title: "Hội thảo chăm sóc sức khỏe bàn chân",
    date: "20/08/2025",
    views: 850,
    category: "Hội thảo",
    description: "Tham gia hội thảo để tìm hiểu cách chăm sóc sức khỏe bàn chân hiệu quả.",
    image: "/images/events/hoi-thao-cham-soc-ban-chan.jpg",
    content: `
      <h2>Về hội thảo</h2>
      <p>Hội thảo "Chăm sóc sức khỏe bàn chân" là sự kiện chuyên môn được tổ chức bởi NAGEN nhằm chia sẻ kiến thức về chăm sóc và bảo vệ sức khỏe bàn chân.</p>
      
      <h2>Nội dung chương trình</h2>
      <ul>
        <li>Cấu trúc và chức năng của bàn chân</li>
        <li>Các bệnh lý thường gặp ở bàn chân</li>
        <li>Phương pháp chăm sóc bàn chân hàng ngày</li>
        <li>Vai trò của tấm lót trong việc hỗ trợ bàn chân</li>
        <li>Tư vấn trực tiếp từ chuyên gia</li>
      </ul>

      <h2>Diễn giả</h2>
      <p>Hội thảo có sự tham gia của các chuyên gia hàng đầu trong lĩnh vực chỉnh hình và chăm sóc sức khỏe bàn chân.</p>
    `
  }
};

const relatedEvents = [
  {
    id: 2,
    title: "Hội thảo chăm sóc sức khỏe bàn chân",
    date: "20/08/2025",
    image: "/images/events/hoi-thao-cham-soc-ban-chan.jpg"
  },
  {
    id: 3,
    title: "Tư vấn miễn phí về chỉnh hình bàn chân",
    date: "15/06/2025",
    image: "/images/events/tu-van-mien-phi.jpg"
  }
];

// Generate static params for static export
export async function generateStaticParams() {
  // Return all possible event IDs
  return Object.keys(eventDetails).map((id) => ({
    id: id,
  }));
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const eventId = parseInt(params.id);
  const event = eventDetails[eventId as keyof typeof eventDetails];

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={getImagePath("/images/logo_slogan_1.png")}
                alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
                priority
                title="NAGEN - Thương hiệu tấm lót hỗ trợ vòm bàn chân hàng đầu"
              />
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/su-kien">
                <Button variant="outline" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Quay lại danh sách</span>
                  <span className="sm:hidden">Quay lại</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Brand stripe */}
      <div className="w-full h-2">
        <div className="bg-red-600 w-full h-1"></div>
        <div className="bg-[#21395D] w-full h-1"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">Trang chủ</Link>
          <span className="text-gray-500 mx-2">›</span>
          <Link href="/su-kien" className="text-blue-600 hover:underline">Sự kiện</Link>
          <span className="text-gray-500 mx-2">›</span>
          <span className="text-gray-700">{event.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={getImagePath(event.image)}
                  alt={`${event.title} - Sự kiện NAGEN về tấm lót hỗ trợ vòm bàn chân`}
                  fill
                  className="object-cover"
                  title={`Sự kiện NAGEN: ${event.title}`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#21395D] mb-4">
                  {event.title}
                </h1>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Ngày đăng: {event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Lượt xem: {event.views}</span>
                  </div>
                </div>

                {/* Share buttons */}
                <ClientEventDetail event={event} />

                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.content }}
                />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related Events */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-[#21395D] mb-4">
                  Sự kiện liên quan
                </h3>
                <div className="space-y-4">
                  {relatedEvents.map(relatedEvent => (
                    <Link
                      key={relatedEvent.id}
                      href={`/su-kien/${relatedEvent.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={getImagePath(relatedEvent.image)}
                            alt={`${relatedEvent.title} - Sự kiện NAGEN liên quan`}
                            fill
                            className="object-cover rounded"
                            title={`Sự kiện NAGEN: ${relatedEvent.title}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                            {relatedEvent.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedEvent.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#21395D] mb-3">
                  Cần hỗ trợ?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và dịch vụ.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Hotline:</span>
                    <a href="tel:0966578008" className="text-blue-600 hover:underline">
                      0966578008
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:nagen@nagen.vn" className="text-blue-600 hover:underline">
                      nagen@nagen.vn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}