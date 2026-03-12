// 파비콘 PNG 파일 생성 스크립트 (Node.js 환경에서 실행)
// 사용법: node generate-favicon.js

const fs = require('fs');
const { createCanvas } = require('canvas');

function createFavicon(size, filename) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // 배경색
    const bgColor = '#8b6f47';
    ctx.fillStyle = bgColor;
    
    // 둥근 사각형
    const radius = size * 0.2;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.fill();
    
    // 텍스트 'M'
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.6}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('M', size / 2, size / 2);
    
    // PNG로 저장
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
    console.log(`생성 완료: ${filename} (${size}x${size})`);
}

// canvas 라이브러리 확인
try {
    require('canvas');
} catch (e) {
    console.log('canvas 라이브러리가 필요합니다.');
    console.log('설치: npm install canvas');
    process.exit(1);
}

// 파비콘 생성
console.log('파비콘 생성 중...');
createFavicon(16, 'favicon-16x16.png');
createFavicon(32, 'favicon-32x32.png');
createFavicon(180, 'apple-touch-icon.png');
createFavicon(32, 'favicon.ico'); // ico는 실제로는 PNG로 저장

console.log('\n모든 파비콘이 생성되었습니다!');

