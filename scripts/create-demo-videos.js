/**
 * Script để tạo video demo placeholder
 * Chạy: node scripts/create-demo-videos.js
 */

const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, '../public/videos/products');
const products = [
  'sungen-1',
  'winagen-1', 
  'softgen-1',
  'endurance-1',
  'silhouette-1',
  'demlotgiay'
];

// Tạo HTML để generate video placeholder
const createVideoHTML = (productName) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; font-family: Arial; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .container { 
            width: 1920px; 
            height: 1080px; 
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            color: white;
            text-align: center;
        }
        .title { font-size: 72px; font-weight: bold; margin-bottom: 30px; }
        .subtitle { font-size: 48px; margin-bottom: 50px; opacity: 0.9; }
        .demo { font-size: 36px; opacity: 0.7; }
        .logo { 
            position: absolute; 
            top: 50px; 
            right: 50px; 
            font-size: 32px; 
            font-weight: bold;
            color: #ff6b6b;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">NAGEN</div>
        <div class="title">${productName.toUpperCase()}</div>
        <div class="subtitle">Video Demo Sản Phẩm</div>
        <div class="demo">🎥 Đang phát triển...</div>
    </div>
</body>
</html>
`;

// Tạo thông tin cho từng sản phẩm
const productInfo = {
  'sungen-1': 'Tấm lót hỗ trợ vòm bàn chân Sungen',
  'winagen-1': 'Tấm lót hỗ trợ vòm bàn chân Winagen',
  'softgen-1': 'Tấm lót hỗ trợ vòm bàn chân Softgen', 
  'endurance-1': 'Tấm lót hỗ trợ vòm bàn chân Endurance',
  'silhouette-1': 'Tấm lót hỗ trợ vòm bàn chân Silhouette',
  'demlotgiay': 'Đệm lót giày cao su xốp tự nhiên'
};

console.log('🎬 Tạo video demo placeholder...');

// Tạo file HTML cho mỗi sản phẩm
products.forEach(productId => {
  const htmlPath = path.join(videoDir, `${productId}.html`);
  const htmlContent = createVideoHTML(productInfo[productId] || productId);
  
  fs.writeFileSync(htmlPath, htmlContent);
  console.log(`✅ Tạo ${productId}.html`);
});

console.log(`
🎯 Hoàn thành! Đã tạo ${products.length} file HTML placeholder.

📝 Hướng dẫn tạo video thật:
1. Mở các file .html trong trình duyệt
2. Sử dụng screen recorder để quay video
3. Lưu thành file .mp4 cùng tên
4. Xóa file .html sau khi có video thật

📁 Vị trí: public/videos/products/
🎥 Format: [product-id].mp4
⏱️  Thời lượng khuyến nghị: 30-90 giây
📐 Độ phân giải: 1920x1080 hoặc 1280x720
`);