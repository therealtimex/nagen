export interface Product {
  id: string
  name: string
  description: string
  price: string
  originalPrice?: string
  discount?: string
  image: string
  category: string
  rating: number
  reviewCount: number
  popular: boolean
  new: boolean
  tags: string[]
}

export const productData: Product[] = [
  {
    id: "sungen-1",
    name: "Tấm lót hỗ trợ vòm bàn chân Sungen™",
    description:
      "Sungen™ là tấm lót hỗ trợ vòm bàn chân đã khởi đầu một ngành công nghiệp và giúp hàng triệu người nhận ra rằng họ có thể sống mà không bị đau chân.\n\n" +
      "Đây là sản phẩm định hình bàn chân lý tưởng cho mục đích sử dụng hàng ngày và cung cấp mức độ hỗ trợ cao nhất trong danh mục sản phẩm đa dạng của chúng tôi.\n\n" +
      "Sản phẩm này hỗ trợ toàn bộ xương bàn chân, bạn sẽ cần một khoảng thời gian để làm quen, nhưng chúng tôi nghĩ bạn sẽ đồng ý rằng kết quả rất xứng đáng với những nỗ lực của bạn.\n\n" +
      "Chúng tôi đưa ra một kế hoạch đơn giản cho việc thích nghi và làm quen, và hầu hết người sử dụng có thể thoải mái đeo chúng cả ngày liên tục trong vòng bốn đến sáu tuần.",
    price: "599.000đ",
    originalPrice: "699.000đ",
    discount: "15%",
    image: "/images/products/Sungen.jpg",
    category: "sungen",
    rating: 4.9,
    reviewCount: 124,
    popular: true,
    new: false,
    tags: ["bestseller", "orthopedic"],
  },
  {
    id: "winagen-1",
    name: "Tấm lót hỗ trợ vòm bàn chân Winagen™",
    description:
      "Mặc dù Tấm lót hỗ trợ vòm bàn chân Winagen™ có thiết kế cơ sinh học độc đáo tương tự như tấm lót hỗ trợ vòm bàn chân Sungen, nhưng nó được làm bằng vật liệu mềm hơn nên rất lý tưởng cho các hoạt động thể thao.\n\n" +
      "Sản phẩm này cũng lý tưởng cho những người lần đầu sử dụng có bàn chân rất phẳng, giúp họ làm quen một cách nhẹ nhàng với tấm lót hỗ trợ vòm bàn chân Nagen.\n\n" +
      "Chất liệu trong suốt giúp tấm lót hỗ trợ có thể ẩn trong dép xăng đan và giày hở mũi, cũng như có thể kết hợp với hầu hết mọi loại giày dép.",
    price: "699.000đ",
    image: "/images/products/Winagen.jpg",
    category: "winagen",
    rating: 4.9,
    reviewCount: 87,
    popular: true,
    new: false,
    tags: ["premium", "comfort"],
  },
  {
    id: "softgen-1",
    name: "Tấm lót hỗ trợ vòm bàn chân Softgen™",
    description:
      "Tấm lót hỗ trợ vòm bàn chân Softgen™ là sản phẩm dạng gel có khả năng hỗ trợ nhẹ nhàng và tạo cảm giác như đang đi trên không trung.\n\n" +
      "Sản phẩm vẫn hỗ trợ cả bốn vòm bàn chân và được thiết kế thông khí hoàn toàn cho bề mặt gan bàn chân.\n\n" +
      "Sản phẩm này đặc biệt có giá trị đối với người cao tuổi vì giúp giảm chấn thương do vấp ngã cũng như những người chưa từng sử dụng tấm lót hỗ trợ vòm bàn chân hoàn toàn.\n\n" +
      "Đây cũng là sản phẩm tuyệt vời để sử dụng khi ở nhà vào cuối ngày.",
    price: "549.000đ",
    image: "/images/products/Softgen.jpg",
    category: "softgen",
    rating: 4.8,
    reviewCount: 112,
    popular: true,
    new: false,
    tags: ["comfort", "everyday"],
  },
  {
    id: "endurance-1",
    name: "Tấm lót hỗ trợ vòm bàn chân Endurance™",
    description:
      "Tấm lót hỗ trợ vòm bàn chân Endurance™ là sản phẩm siêu mỏng có khả năng hỗ trợ nhẹ.\n\n" +
      "Vì nó chiếm ít không gian trong giày hơn so với thiết kế hình học của các phiên bản sản phẩm Tấm lót hỗ trợ vòm bàn chân Nagen, nên nó lý tưởng cho những đôi giày không đủ độ sâu cho các thiết bị có cấu hình cao hơn (nhưng hỗ trợ tốt hơn).\n\n" +
      "Tấm lót hỗ trợ vòm bàn chân Endurance™ cũng có lớp phủ bằng da lộn dễ chịu, kéo dài bằng chiều dài của một tấm lót ba phần tư để tạo lớp đệm nhẹ trên phần hỗ trợ vòm chân và dưới đầu xương bàn chân.",
    price: "799.000đ",
    originalPrice: "899.000đ",
    discount: "11%",
    image: "/images/products/Endurance.jpg",
    category: "endurance",
    rating: 4.9,
    reviewCount: 76,
    popular: true,
    new: true,
    tags: ["professional", "durable"],
  },
  {
    id: "silhouette-1",
    name: "Tấm lót hỗ trợ vòm bàn chân Silhouette™",
    description:
      "Tấm lót hỗ trợ vòm bàn chân Silhouette™ giống như Tấm lót hỗ trợ vòm bàn chân Endurance™, siêu mỏng nhưng hẹp hơn.\n\n" +
      "Sản phẩm hoàn hảo cho những đôi giày dành cho bàn chân hẹp và vừa khít hoặc có đế giày hẹp như các loại giày của phụ nữ.\n\n" +
      "Giống như Tấm lót hỗ trợ vòm chân Endurance™, người đeo có mong muốn cảm thấy thoải mái một cách nhanh chóng khi sử dụng mà hầu như không cần thời gian làm quen.\n\n" +
      "Các sản phẩm thuộc dòng Endurance™ hoàn hảo để duy trì sự hỗ trợ mà bạn có được khi sử dụng tấm lót hỗ trợ vòm bàn chân Nagen trong hầu hết mọi loại giày dép.",
    price: "649.000đ",
    image: "/images/products/Silhouette.jpg",
    category: "silhouette",
    rating: 4.8,
    reviewCount: 92,
    popular: true,
    new: false,
    tags: ["fashion", "women"],
  },
  {
    id: "demlotgiay",
    name: "Đệm lót giày cao su xốp tự nhiên",
    description:
      "Đi bộ có thể tạo áp lực gấp đôi trọng lượng cơ thể lên bàn chân, đầu gối và khớp hông.\n\n" +
      "Chạy bộ làm tăng áp lực đó lên gấp tám lần trọng lượng cơ thể. Ngoài các sản phẩm tấm lót hỗ trợ vòm bàn chân có chất lượng hàng đầu, một số đệm hỗ trợ có thể là thứ mà bác sĩ yêu cầu để kiểm soát tất cả áp lực bổ sung đó.\n\n" +
      "Chúng cũng cực kỳ thoải mái khi đeo trong quá trình làm quen tấm lót hỗ trợ vòm bàn chân và có thể giúp trở nên dễ dàng hơn.\n\n" +
      "Chúng tôi cung cấp sản phẩm đệm lót giày cao su xốp thiên nhiên có độ dày 1/8\" để tiết kiệm không gian, đế lót giày thể thao có độ dày 3/16\" để bảo vệ tối đa khỏi chấn động khi bước chân và đế lót giày có độ dày ba phần tư được thiết kế riêng cho các thiết bị thuộc dòng Endurance.\n\n" +
      "Mỗi dòng sản phẩm có nhiều kích cỡ nên hầu như không cần cắt bớt và mỗi đệm được vát chính xác để phù hợp hoàn hảo với tấm lót hỗ trợ vòm bàn chân của chúng tôi.",
    price: "699.000đ",
    image: "/images/products/Cushion.jpg",
    category: "endurance",
    rating: 4.8,
    reviewCount: 68,
    popular: true,
    new: false,
    tags: ["business", "formal"],
  },
];
