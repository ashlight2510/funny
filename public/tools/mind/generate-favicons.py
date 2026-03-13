#!/usr/bin/env python3
"""
파비콘 생성 스크립트
Pillow 라이브러리 필요: pip install pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
except ImportError:
    print("Pillow 라이브러리가 필요합니다. 'pip install pillow' 명령으로 설치하세요.")
    exit(1)

def create_favicon(size, filename):
    """파비콘 이미지 생성"""
    # 배경색 (베이지 브라운)
    bg_color = (139, 111, 71)  # #8b6f47
    white = (255, 255, 255)
    
    # 이미지 생성
    img = Image.new('RGB', (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    # 둥근 모서리 (선택사항)
    # 간단하게 사각형으로 생성
    
    # 텍스트 'M' 그리기
    try:
        # 시스템 폰트 사용 시도
        font_size = int(size * 0.6)
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
        except:
            try:
                font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
            except:
                font = ImageFont.load_default()
    except:
        font = ImageFont.load_default()
    
    # 텍스트 중앙 정렬
    text = "M"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((size - text_width) / 2, (size - text_height) / 2 - bbox[1])
    draw.text(position, text, fill=white, font=font)
    
    # 파일 저장
    img.save(filename, 'PNG')
    print(f"생성 완료: {filename} ({size}x{size})")

def create_ico():
    """favicon.ico 파일 생성 (16x16, 32x32 포함)"""
    # ICO 파일은 여러 크기를 포함할 수 있음
    # 간단하게 32x32를 favicon.ico로 저장
    create_favicon(32, 'favicon.ico')

if __name__ == '__main__':
    print("파비콘 생성 중...")
    
    # 다양한 크기 생성
    create_favicon(16, 'favicon-16x16.png')
    create_favicon(32, 'favicon-32x32.png')
    create_favicon(180, 'apple-touch-icon.png')
    create_ico()
    
    print("\n모든 파비콘이 생성되었습니다!")

