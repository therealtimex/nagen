# Hướng dẫn thay đổi Banner trang chủ

## 📸 Thay đổi Banner chính

Để thay đổi banner trên trang chủ, bạn chỉ cần:

1. **Chuẩn bị hình ảnh mới:**
   - Tên file: `banner-hero.svg` (hoặc .jpg, .png, .webp)
   - Kích thước khuyến nghị: 1920x600px (tỷ lệ 16:5)
   - Dung lượng: < 500KB để tối ưu tốc độ tải
   - Chất lượng: High resolution cho màn hình Retina
   - **Hiện tại:** Đang sử dụng file SVG có sẵn

2. **Thay thế file:**
   - Đặt file mới vào thư mục: `public/images/`
   - Tên file: `banner-hero.svg` (hoặc đổi extension trong code)
   - Ghi đè file cũ (nếu có)

3. **Kích thước responsive:**
   - Mobile: 200px cao
   - Tablet: 300px cao  
   - Desktop: 400-600px cao
   - Hình ảnh sẽ tự động scale và crop phù hợp

## 🎨 Khuyến nghị thiết kế

- **Nội dung quan trọng:** Đặt ở giữa hình, tránh các cạnh
- **Text trên ảnh:** Sử dụng màu tương phản cao
- **Chất lượng:** Sử dụng hình ảnh sắc nét, chuyên nghiệp
- **Thương hiệu:** Bao gồm logo NAGEN nếu cần

## 🔧 Thay đổi tên file (nếu cần)

Nếu muốn sử dụng tên file khác, sửa trong file `app/page.tsx`:

```javascript
src={getImagePath("/images/TEN-FILE-MOI.jpg")}
```

## 🎨 File SVG hiện tại

Tôi đã tạo sẵn file `banner-hero.svg` với:
- **Gradient background:** Xanh dương đến đỏ (màu thương hiệu NAGEN)
- **Nội dung chính:** Logo, slogan, CTA buttons
- **Trust indicators:** 4M+ users, 50+ years, 100% authentic, 24/7 support
- **Responsive:** Tự động scale trên mọi thiết bị
- **Professional:** Thiết kế chuyên nghiệp, hiện đại

## ✅ Checklist sau khi thay đổi

- [ ] Kiểm tra hiển thị trên mobile
- [ ] Kiểm tra hiển thị trên desktop  
- [ ] Đảm bảo tốc độ tải nhanh
- [ ] Kiểm tra alt text phù hợp với nội dung mới