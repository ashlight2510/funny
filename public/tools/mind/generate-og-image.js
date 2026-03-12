// OG 이미지 생성 스크립트
// 사용법: node generate-og-image.js
// 필요: npm install canvas

const fs = require('fs');
const { createCanvas } = require('canvas');

function generateOGImage() {
    try {
        require('canvas');
    } catch (e) {
        console.log('canvas 라이브러리가 필요합니다.');
        console.log('설치: npm install canvas');
        process.exit(1);
    }

    const { createCanvas } = require('canvas');
    const width = 1200;
    const height = 630;
    
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // 배경 그라데이션
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#f8f6f2');
    bgGradient.addColorStop(0.5, '#f5f1eb');
    bgGradient.addColorStop(1, '#ede8e0');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);
    
    // 장식 원형 요소들
    ctx.fillStyle = 'rgba(139, 111, 71, 0.03)';
    ctx.beginPath();
    ctx.arc(width * 0.15, height * 0.2, width * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.8, width * 0.12, 0, Math.PI * 2);
    ctx.fill();
    
    // 중앙 카드
    const cardWidth = width * 0.88;
    const cardHeight = height * 0.78;
    const cardX = (width - cardWidth) / 2;
    const cardY = (height - cardHeight) / 2;
    
    // 카드 그림자
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.beginPath();
    roundRect(ctx, cardX + 4, cardY + 8, cardWidth, cardHeight, 24);
    ctx.fill();
    
    // 카드 배경
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    roundRect(ctx, cardX, cardY, cardWidth, cardHeight, 24);
    ctx.fill();
    
    // 상단 장식 라인
    ctx.fillStyle = '#8b6f47';
    ctx.fillRect(cardX + width * 0.15, cardY + 20, width * 0.7, 4);
    
    // 여백
    const padding = width * 0.1;
    let y = cardY + padding + 100;
    
    // 인용 부호
    ctx.fillStyle = 'rgba(139, 111, 71, 0.15)';
    ctx.font = 'bold 144px Georgia, serif';
    ctx.textAlign = 'left';
    ctx.fillText('"', cardX + padding - 30, y - 30);
    
    // 메인 텍스트
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 56px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('오늘의 마음챙김', width / 2, y);
    
    y += 80;
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.fillText('하루 한 문장으로 마음 충전하세요', width / 2, y);
    
    // 구분선
    y += 100;
    ctx.strokeStyle = '#e8e8e8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 200, y);
    ctx.lineTo(width / 2 + 200, y);
    ctx.stroke();
    
    // 하단 텍스트
    y += 60;
    ctx.fillStyle = '#8b6f47';
    ctx.font = '32px Arial, sans-serif';
    ctx.fillText('Mindful Today', width / 2, y);
    
    // 파일 저장
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('og-image.png', buffer);
    console.log('OG 이미지 생성 완료: og-image.png');
}

function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

if (require.main === module) {
    generateOGImage();
}

module.exports = { generateOGImage };

