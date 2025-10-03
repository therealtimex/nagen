/**
 * Script tạo video demo đơn giản cho sản phẩm Sungen
 * Sử dụng HTML5 Canvas để tạo video
 */

const fs = require('fs');
const path = require('path');

// Tạo HTML để generate video
const createVideoContent = () => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            margin: 0; 
            font-family: 'Arial', sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            overflow: hidden;
        }
        .video-container { 
            width: 1280px; 
            height: 720px; 
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            color: white;
            text-align: center;
            position: relative;
        }
        .logo { 
            position: absolute; 
            top: 40px; 
            right: 40px; 
            font-size: 28px; 
            font-weight: bold;
            color: #ff6b6b;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .main-title { 
            font-size: 64px; 
            font-weight: bold; 
            margin-bottom: 20px;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
            animation: fadeInUp 2s ease-out;
        }
        .subtitle { 
            font-size: 32px; 
            margin-bottom: 40px; 
            opacity: 0.9;
            animation: fadeInUp 2s ease-out 0.5s both;
        }
        .features {
            display: flex;
            justify-content: center;
            gap: 60px;
            margin-top: 40px;
            animation: fadeInUp 2s ease-out 1s both;
        }
        .feature {
            text-align: center;
            background: rgba(255,255,255,0.1);
            padding: 30px 20px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            min-width: 180px;
        }
        .feature-icon {
            font-size: 48px;
            margin-bottom: 15px;
            display: block;
        }
        .feature-text {
            font-size: 18px;
            font-weight: 600;
        }
        .cta {
            margin-top: 50px;
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            color: white;
            padding: 20px 40px;
            border: none;
            border-radius: 50px;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(255,107,107,0.4);
            animation: fadeInUp 2s ease-out 1.5s both, pulse 2s infinite 3s;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .floating-element {
            position: absolute;
            color: rgba(255,255,255,0.1);
            font-size: 24px;
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    </style>
</head>
<body>
    <div class="floating-elements">
        <div class="floating-element" style="top: 10%; left: 10%; animation-delay: 0s;">🦶</div>
        <div class="floating-element" style="top: 20%; right: 15%; animation-delay: 1s;">⚕️</div>
        <div class="floating-element" style="bottom: 30%; left: 20%; animation-delay: 2s;">✨</div>
        <div class="floating-element" style="bottom: 20%; right: 10%; animation-delay: 3s;">🇺🇸</div>
    </div>
    
    <div class="video-container">
        <div class="logo">NAGEN</div>
        
        <div class="main-title">SUNGEN</div>
        <div class="subtitle">Tấm lót hỗ trợ vòm bàn chân</div>
        
        <div class="features">
            <div class="feature">
                <span class="feature-icon">🦶</span>
                <div class="feature-text">Hỗ trợ 4 vòm<br>bàn chân</div>
            </div>
            <div class="feature">
                <span class="feature-icon">🇺🇸</span>
                <div class="feature-text">Sản xuất<br>tại Mỹ</div>
            </div>
            <div class="feature">
                <span class="feature-icon">⚕️</span>
                <div class="feature-text">Chứng nhận<br>y tế</div>
            </div>
            <div class="feature">
                <span class="feature-icon">✨</span>
                <div class="feature-text">Công nghệ<br>độc quyền</div>
            </div>
        </div>
        
        <button class="cta">Đặt lịch tư vấn miễn phí</button>
    </div>

    <script>
        // Auto refresh để tạo hiệu ứng loop
        setTimeout(() => {
            window.location.reload();
        }, 8000);
    </script>
</body>
</html>
`;

// Tạo file HTML
const videoDir = path.join(__dirname, '../public/videos/products');
const htmlPath = path.join(videoDir, 'sungen-demo.html');

fs.writeFileSync(htmlPath, createVideoContent());

console.log(`
🎬 Đã tạo video demo HTML: ${htmlPath}

📋 Hướng dẫn tạo video MP4:

1. Mở file sungen-demo.html trong trình duyệt
2. Sử dụng screen recorder để quay màn hình:
   - Windows: Xbox Game Bar (Win + G)
   - Mac: QuickTime Player
   - Chrome: Extensions như Loom, Screencastify
   
3. Quay video trong 10-15 giây
4. Lưu thành file: sungen-1.mp4
5. Đặt vào thư mục: public/videos/products/

🎯 Hoặc sử dụng FFmpeg (nếu đã cài):
ffmpeg -f gdigrab -framerate 30 -i desktop -t 10 -vf "scale=1280:720" sungen-1.mp4

⚡ Video sẽ tự động loop và hiển thị các tính năng của sản phẩm Sungen
`);

// Tạo script PowerShell để mở file
const psScript = `
# Mở file HTML trong trình duyệt mặc định
Start-Process "${htmlPath.replace(/\\/g, '\\\\')}"

Write-Host "🎬 Đã mở video demo HTML"
Write-Host "📹 Sử dụng screen recorder để quay video"
Write-Host "💾 Lưu thành file: sungen-1.mp4"
`;

fs.writeFileSync(path.join(__dirname, 'open-demo.ps1'), psScript);

console.log('✅ Đã tạo script PowerShell: scripts/open-demo.ps1');