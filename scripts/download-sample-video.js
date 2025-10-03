/**
 * Script để tạo video demo đơn giản
 * Sử dụng một video mẫu ngắn
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const videoDir = path.join(__dirname, '../public/videos/products');

// Tạo một video demo đơn giản bằng cách copy từ video có sẵn trong project
const createDemoVideo = async () => {
  console.log('🎬 Đang tạo video demo cho sản phẩm Sungen...');
  
  // Kiểm tra xem có video nào trong project không
  const existingVideoPath = path.join(__dirname, '../public/images/do-vom-ban-chan-tai-nha.mp4');
  const targetVideoPath = path.join(videoDir, 'sungen-1.mp4');
  
  try {
    // Nếu có video mẫu, copy nó
    if (fs.existsSync(existingVideoPath)) {
      fs.copyFileSync(existingVideoPath, targetVideoPath);
      console.log('✅ Đã copy video mẫu thành sungen-1.mp4');
    } else {
      // Tạo một video placeholder bằng cách tạo file HTML để convert
      console.log('📝 Tạo video placeholder...');
      
      // Tạo một video demo đơn giản (placeholder)
      const videoContent = Buffer.from([
        0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6F, 0x6D,
        0x00, 0x00, 0x02, 0x00, 0x69, 0x73, 0x6F, 0x6D, 0x69, 0x73, 0x6F, 0x32,
        0x61, 0x76, 0x63, 0x31, 0x6D, 0x70, 0x34, 0x31
      ]);
      
      // Thay vào đó, tạo một file text hướng dẫn
      const instructionContent = `
# Video Demo Sungen

Đây là placeholder cho video demo sản phẩm Sungen.

## Cách tạo video thực:

1. Mở file: scripts/generate-demo-video.html trong trình duyệt
2. Sử dụng screen recorder để quay video
3. Lưu thành file sungen-1.mp4
4. Đặt vào thư mục này

## Hoặc sử dụng video có sẵn:
- Copy video từ thư mục images/
- Đổi tên thành sungen-1.mp4

Video này sẽ tự động hiển thị trong trang sản phẩm khi có file MP4.
`;
      
      fs.writeFileSync(path.join(videoDir, 'sungen-1-instructions.txt'), instructionContent);
      console.log('📋 Đã tạo file hướng dẫn: sungen-1-instructions.txt');
    }
  } catch (error) {
    console.error('❌ Lỗi khi tạo video:', error.message);
  }
};

// Tạo script để mở HTML demo
const createOpenScript = () => {
  const htmlPath = path.join(videoDir, 'sungen-demo.html');
  const scriptContent = `
@echo off
echo 🎬 Mở video demo HTML...
start "" "${htmlPath}"
echo.
echo 📹 Hướng dẫn:
echo 1. Nhấn Win + G để mở Xbox Game Bar
echo 2. Click nút Record để bắt đầu quay
echo 3. Quay trong 10-15 giây
echo 4. Lưu thành file sungen-1.mp4
echo 5. Đặt vào thư mục public/videos/products/
echo.
pause
`;
  
  fs.writeFileSync(path.join(__dirname, 'open-demo.bat'), scriptContent);
  console.log('✅ Đã tạo script: scripts/open-demo.bat');
};

// Chạy các function
createDemoVideo();
createOpenScript();

console.log(`
🎯 Hoàn thành setup video demo!

📁 Thư mục video: public/videos/products/
🎬 HTML demo: public/videos/products/sungen-demo.html
📝 Script mở: scripts/open-demo.bat

🚀 Để test video ngay:
1. Chạy: scripts/open-demo.bat
2. Quay video bằng screen recorder
3. Lưu thành sungen-1.mp4
4. Refresh trang sản phẩm để xem kết quả

💡 Hoặc copy video có sẵn từ thư mục images/ và đổi tên thành sungen-1.mp4
`);