# Mobile Test Checklist - NAGEN Website

## 🔍 Test Instructions
1. Mở http://localhost:3002 trên trình duyệt
2. Bật Developer Tools (F12)
3. Chuyển sang mobile view (Ctrl+Shift+M)
4. Test các breakpoints: 375px, 768px, 1024px

## ✅ Floating Action Buttons Test

### Desktop (≥1024px):
- [ ] Tất cả 4 buttons hiển thị mở rộng
- [ ] Không có toggle button (nút MessageCircle)
- [ ] Hover tooltips hoạt động
- [ ] Click buttons mở đúng links

### Tablet (768px-1023px):
- [ ] Toggle button hiển thị
- [ ] Buttons ẩn ban đầu
- [ ] Click toggle → buttons xuất hiện
- [ ] Click backdrop → buttons ẩn

### Mobile (<768px):
- [ ] Toggle button hiển thị nhỏ hơn
- [ ] Buttons responsive size
- [ ] Touch interactions hoạt động
- [ ] No layout overflow

## ✅ Social Media Buttons Test

### Trang chủ - Footer Social Links:
- [ ] Facebook button: https://www.facebook.com/people/NAGEN/61576197860425/
- [ ] YouTube button: https://www.youtube.com/@nagenvn
- [ ] TikTok button: https://www.tiktok.com/@nagenvn
- [ ] Mở trong tab mới
- [ ] Không bị popup blocker

### Floating Action Buttons:
- [ ] Facebook: https://www.facebook.com/people/NAGEN/61576197860425/
- [ ] YouTube: https://www.youtube.com/@nagenvn
- [ ] Zalo: https://zalo.me/2254011402039684095
- [ ] Đặt lịch: Mở modal form

## ✅ Navigation Test

### Trang sự kiện:
- [ ] Logo → Trang chủ
- [ ] "Quay lại trang chủ" → Trang chủ
- [ ] Breadcrumb "Trang chủ" → Trang chủ
- [ ] "Xem chi tiết" → Chi tiết sự kiện

### Chi tiết sự kiện:
- [ ] Logo → Trang chủ
- [ ] "Quay lại danh sách" → Trang sự kiện
- [ ] Breadcrumb navigation hoạt động
- [ ] Share buttons hoạt động

## 🐛 Common Issues to Check:
- [ ] No console errors
- [ ] No 404 for images/icons
- [ ] Smooth animations
- [ ] No layout shifts
- [ ] Touch targets ≥44px
- [ ] No horizontal scroll

## 📱 Test Panel (Yellow box - Mobile only):
- Shows current screen width
- Shows mobile detection status
- Test buttons for direct social media links
- Only visible on mobile (<1024px)

## 🎯 Expected Behavior:
1. **Desktop**: All floating buttons visible, no toggle
2. **Mobile**: Toggle button visible, buttons expand/collapse
3. **Social links**: Open in new tab, no errors
4. **Navigation**: Fast client-side routing
5. **Responsive**: Proper sizing at all breakpoints