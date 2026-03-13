export function getSeoGuides(lang = "en") {
  const isKo = lang === "ko";
  
  return [
  {
    slug: "meta-kit",
    emoji: "🧰",
    title: isKo ? "Meta Kit — SEO/OG/파비콘 번들 가이드" : "Meta Kit — SEO/OG/Favicon Bundle Guide",
    desc: isKo ? "메타 태그, OG/Twitter 카드, 파비콘, OG 이미지 텍스트를 입력하고 생성 및 복사하세요." : "Enter meta tags, OG/Twitter cards, favicons, and OG image text, then generate and copy.",
  },
  {
    slug: "local-image-optimizer",
    emoji: "🗜️",
    title: isKo ? "로컬 이미지 최적화 & 파일 인사이트 가이드" : "Local Image Optimizer & File Insights Guide",
    desc: isKo ? "WebP/JPEG 재인코딩, 자동 리사이즈, 로컬 파일 정보, SHA-256, 미리보기 확인." : "Re-encode WebP/JPEG, auto-resize, and view local file info, SHA-256, and previews.",
  },
  {
    slug: "heic-to-jpg",
    emoji: "📷",
    title: isKo ? "HEIC to JPG 변환기 가이드" : "HEIC to JPG Converter Guide",
    desc: isKo ? "브라우저에서 HEIC를 JPG/WebP/PNG로 변환 (압축, 리사이즈, ZIP 내보내기 포함)." : "Convert HEIC to JPG/WebP/PNG in-browser with compression, resize, and ZIP export.",
  },
  {
    slug: "hwpx-text-extractor",
    emoji: "📄",
    title: isKo ? "HWPX 텍스트 추출기 가이드" : "HWPX Text Extractor Guide",
    desc: isKo ? "HWPX에서 텍스트만 빠르게 추출해 PDF/DOCX로 저장. 표/레이아웃은 미지원." : "Extract text from HWPX and export to PDF/DOCX. Tables/layouts are not supported.",
  },
  {
    slug: "mood-now",
    emoji: "🌈",
    title: isKo ? "무드 체크 가이드" : "Mood Check Guide",
    desc: isKo ? "지금 기분을 간단히 기록하고 정리하는 로컬 무드 체크." : "A quick local mood check to record how you feel right now.",
  },
  {
    slug: "pyeong-calculator",
    emoji: "📐",
    title: isKo ? "평수 계산기 가이드" : "Pyeong-to-Square-Meter Calculator Guide",
    desc: isKo ? "평을 제곱미터로 변환하고 일반적인 아파트 크기를 빠르게 확인하세요." : "Convert pyeong to square meters and check typical apartment sizes quickly.",
  },
  {
    slug: "nbang-calculator",
    emoji: "🍽️",
    title: isKo ? "N빵 계산기 가이드" : "Split-the-Bill Calculator Guide",
    desc: isKo ? "장소, 인원수, 총액을 입력하여 1인당 비용을 계산하고 즉시 복사하세요." : "Enter venue, headcount, and total to calculate per-person cost and copy instantly.",
  },
    {
      slug: "commute-cost-time",
      emoji: "⏰",
      title: isKo ? "출퇴근 비용 & 시간 계산기 가이드" : "Commute Cost & Time Calculator Guide",
      desc: isKo ? "출퇴근 비용/시간을 계산하고 절약된 시간 활용 아이디어를 얻으세요." : "Calculate commuting cost/time and get ideas for using reclaimed time.",
    },
    {
      slug: "tax-calculator",
      emoji: "🧾",
      title: isKo ? "세금 계산기 가이드" : "Tax Calculator Guide",
      desc: isKo ? "직장인/프리랜서/개인사업자의 세금·보험·경비를 추정하고 월 실수령액과 세금 납부 시기를 확인하세요." : "Estimate taxes, insurance, and expenses for employees, freelancers, and self-employed. Check monthly take-home pay and tax payment schedule.",
    },
    {
      slug: "tax-calculator-how",
      emoji: "🧾",
      title: isKo ? "세금 계산기 사용법 — 연말정산·실수령액 계산기" : "Tax Calculator How-To — Year-End Tax & Take-Home Pay",
      desc: isKo ? "연말정산·실수령액·4대보험 공제를 무료 세금 계산기로 확인하는 입력 방법과 결과 보는 법." : "How to use the free tax calculator for year-end tax, take-home pay, and 4 major insurance deductions.",
    },
    {
      slug: "paystub-read-how",
      emoji: "📋",
      title: isKo ? "급여명세서 보는 법 — 항목별 의미·실수령액" : "How to Read a Paystub — Items & Take-Home Pay",
      desc: isKo ? "급여명세서 항목 의미와 실수령액 확인 방법. 세금·4대보험 계산기로 맞춰 보기." : "Paystub items explained and how to verify take-home pay with the tax calculator.",
    },
    {
      slug: "inlaw-translator",
      emoji: "💬",
      title: isKo ? "고부번역기 가이드" : "In-Law Translator Guide",
      desc: isKo ? "고부갈등의 말을 번역하고, 감정을 정리하고, 선택지를 제시하는 도구." : "Translate words, organize emotions, and offer choices for in-law conflicts.",
    },
    {
      slug: "fridge-rescue",
      emoji: "🥕",
      title: isKo ? "냉장고 구조대 가이드" : "Fridge Rescue Guide",
      desc: isKo ? "냉장고 재료로 지금 바로 만들 수 있는 요리를 추천하고 조리 방법을 안내합니다." : "Recommend recipes you can make right now with fridge ingredients and guide cooking steps.",
    },
    {
      slug: "hwatu-fortune",
      emoji: "🎴",
      title: isKo ? "화투로 보는 오늘의 운세 가이드" : "Hwatu Fortune Guide",
      desc: isKo ? "화투 한 장으로 알아보는 오늘의 운세와 행운." : "Discover today's fortune and luck with a single Hwatu card.",
    },
    {
      slug: "hwatu-solitaire",
      emoji: "🎴",
      title: isKo ? "화투 솔리테어 가이드" : "Hwatu Solitaire Guide",
      desc: isKo ? "트럼프 대신 화투로 즐기는 카드 쌓기 게임." : "A card stacking game using Hwatu cards instead of playing cards.",
    },
    {
      slug: "melancholy",
      emoji: "🌙",
      title: isKo ? "마음 컨디션 체크 가이드" : "Mind Condition Check Guide",
      desc: isKo ? "진단이 아닌, 오늘의 마음을 정리하고 기운을 회복하는 짧은 체크와 응원." : "Not a diagnosis, but a brief check to organize today's feelings and recover energy.",
    },
  {
    slug: "lotto-picker",
    emoji: "🎟️",
    title: isKo ? "로또 번호 뽑기 가이드" : "Lotto Number Picker Guide",
    desc: isKo ? "클릭 한 번으로 추천 번호 세트를 받고 즐겨찾기를 저장하세요." : "Get recommended number sets with one click and save your favorites.",
  },
  {
    slug: "image-merge-pdf",
    emoji: "🖼️",
    title: isKo ? "이미지 병합 & PDF 변환기 가이드" : "Image Merge & PDF Converter Guide",
    desc: isKo ? "여러 이미지를 업로드하고 순서를 변경한 후 하나의 이미지 또는 PDF로 내보내세요." : "Upload and reorder multiple images, then export as one image or PDF.",
  },
  {
    slug: "autocut-studio",
    emoji: "🎬",
    title: isKo ? "AutoCut Studio 가이드" : "AutoCut Studio Guide",
    desc: isKo ? "침묵 감지와 점프 컷 타임라인으로 YouTube 편집 속도를 높이세요." : "Speed up YouTube editing with silence detection and jump-cut timelines.",
  },
  {
    slug: "head-voice-trainer",
    emoji: "🎤",
    title: isKo ? "두성 트레이너 가이드" : "Head Voice Trainer Guide",
    desc: isKo ? "두성을 위한 호흡, 공명 루틴, 스케일 따라하기 연습." : "Breathing, resonance routines, and scale-following practice for head voice.",
  },
  {
    slug: "wav-to-mp3",
    emoji: "🎵",
    title: isKo ? "WAV → MP3 변환기 가이드" : "WAV to MP3 Converter Guide",
    desc: isKo ? "브라우저에서 안전하게 WAV를 MP3로 변환. 서버 업로드 없이 로컬에서 처리됩니다." : "Convert WAV to MP3 safely in the browser. All processing happens locally with no server uploads.",
  },
  {
    slug: "mr-vocal-remover",
    emoji: "🎵",
    title: isKo ? "MR 메이커 · 보컬 제거기 가이드" : "MR Maker · Vocal Remover Guide",
    desc: isKo ? "보컬만 듣기 / MR만 듣기. 브라우저에서 스테레오 분리 후 미리듣기·다운로드." : "Listen to vocals only or MR only. Separate stereo in-browser, preview and download.",
  },
  {
    slug: "birth-age-calculator",
    emoji: "🎂",
    title: isKo ? "나이 계산기 가이드" : "Birth Age Calculator Guide",
    desc: isKo ? "생년월일만 입력하면 만·연·세는 나이를 한 번에 계산. 다음 생일 D-day, 링크 공유 지원." : "Enter birth date to get Korean age, international age, and next birthday D-day. Share via link.",
  },
  {
    slug: "emote-emotion",
    emoji: "😊",
    title: isKo ? "희노애락 가이드" : "Emote Guide",
    desc: isKo ? "감정을 털어놓는 익명 썰 플랫폼. 희·노·애·락으로 공감받고 추천받으세요." : "Anonymous emotion story platform. Share joy, anger, love, and fun. Get empathy and discover stories.",
  },
  {
    slug: "image-text-extract",
    emoji: "🔍",
    title: isKo ? "이미지 텍스트 추출기 가이드" : "Image Text Extractor Guide",
    desc: isKo ? "이미지에서 텍스트를 추출하고 복사하는 빠른 OCR 워크플로우." : "Quick OCR workflow to extract and copy text from images.",
  },
  {
    slug: "image-translate-how",
    emoji: "🖼️",
    title: isKo ? "이미지 번역기 사용법" : "Image Translator How-To",
    desc: isKo ? "이미지 OCR 후 한·영 번역하는 방법. 스크린샷·메뉴판·문서 사진에 적합." : "How to extract text from images (OCR) and translate between Korean and English.",
  },
  {
    slug: "charcount-how",
    emoji: "📝",
    title: isKo ? "글자 수 세기 사용법" : "Character Counter How-To",
    desc: isKo ? "자기소개서·논문·과제용 글자 수, 단어 수, 바이트 집계와 목표 글자 수 설정." : "How to count characters, words, bytes and set a character goal.",
  },
  {
    slug: "qrcode-how",
    emoji: "📱",
    title: isKo ? "QR 코드 만들기 사용법" : "QR Code Generator How-To",
    desc: isKo ? "URL·텍스트로 QR 코드 생성하고 이미지로 저장하는 방법." : "How to generate QR codes from URL or text and download.",
  },
  {
    slug: "datecalc-how",
    emoji: "📅",
    title: isKo ? "날짜 차이·며칠째·D-day 사용법" : "Date Calculator How-To",
    desc: isKo ? "두 날짜 차이, 며칠째, D-day 계산 방법." : "How to calculate date difference, nth day, and D-day.",
  },
  {
    slug: "loancalc-how",
    emoji: "💰",
    title: isKo ? "대출 이자·상환 계산기 사용법" : "Loan Calculator How-To",
    desc: isKo ? "대출원금·이자율·기간으로 월 상환액·총 이자 계산 방법." : "How to calculate monthly payment and total interest.",
  },
  {
    slug: "electric-how",
    emoji: "⚡",
    title: isKo ? "전기요금 계산기 사용법" : "Electricity Bill Calculator How-To",
    desc: isKo ? "kWh 사용량으로 전기요금 예상 계산 방법." : "How to estimate electricity bill from kWh.",
  },
  {
    slug: "platformfee-how",
    emoji: "📊",
    title: isKo ? "크몽·숨고 수수료 계산기 사용법" : "Platform Fee Calculator How-To",
    desc: isKo ? "플랫폼 수수료·실수령액 계산 방법." : "How to calculate platform fee and net earnings.",
  },
  {
    slug: "severance-how",
    emoji: "🏦",
    title: isKo ? "퇴직금 계산기 사용법" : "Severance Calculator How-To",
    desc: isKo ? "평균임금·근속연수로 퇴직금 예상 계산 방법." : "How to estimate severance from wage and tenure.",
  },
  {
    slug: "vat-how",
    emoji: "🧾",
    title: isKo ? "부가세 계산기 사용법" : "VAT Calculator How-To",
    desc: isKo ? "공급가·부가세·합계 변환 방법." : "How to convert supply price, VAT, and total.",
  },
  {
    slug: "gas-how",
    emoji: "🔥",
    title: isKo ? "가스요금 계산기 사용법" : "Gas Bill Calculator How-To",
    desc: isKo ? "㎥ 사용량으로 가스요금 예상 계산 방법." : "How to estimate gas bill from usage.",
  },
  {
    slug: "saving-how",
    emoji: "🏦",
    title: isKo ? "예금·적금 이자 계산기 사용법" : "Savings & Deposit Interest Calculator How-To",
    desc: isKo ? "단리·복리 예금, 월 납입 적금 만기금액 계산 방법." : "How to calculate deposit interest and savings maturity.",
  },
  {
    slug: "exchange-how",
    emoji: "💱",
    title: isKo ? "환율 계산기 사용법" : "Exchange Rate Calculator How-To",
    desc: isKo ? "금액·환율로 원화↔외화 변환 방법." : "How to convert KRW and foreign currency.",
  },
  {
    slug: "unit-how",
    emoji: "📐",
    title: isKo ? "단위 변환기 사용법" : "Unit Converter How-To",
    desc: isKo ? "길이·무게·온도·면적 단위 변환 방법." : "How to convert length, weight, temperature, area.",
  },
  {
    slug: "savings-goal-how",
    emoji: "🎯",
    title: isKo ? "목표 저축·월 저축액 계산기 사용법" : "Savings Goal Calculator How-To",
    desc: isKo ? "목표 금액·기간으로 필요 월 저축액 계산 방법." : "How to calculate monthly savings for a goal.",
  },
  {
    slug: "salary-tax-how",
    emoji: "🧾",
    title: isKo ? "간이 세금·실수령 계산기 사용법" : "Simple Tax & Take-Home Calculator How-To",
    desc: isKo ? "연봉으로 세금·공제 후 실수령 참고 방법." : "How to estimate take-home pay from salary.",
  },
  {
    slug: "yield-how",
    emoji: "📈",
    title: isKo ? "수익률 계산기 사용법" : "Yield Calculator How-To",
    desc: isKo ? "원금·수익·기간으로 연환산 수익률 계산 방법." : "How to calculate annualized yield.",
  },
  {
    slug: "age-now-how",
    emoji: "🎂",
    title: isKo ? "만 나이·D-day 계산기 사용법" : "Age & D-day Calculator How-To",
    desc: isKo ? "생년월일로 만 나이·연 나이·다음 생일 D-day 보는 방법." : "How to get age and next birthday D-day.",
  },
  {
    slug: "discount-how",
    emoji: "🏷️",
    title: isKo ? "할인·퍼센트 계산기 사용법" : "Discount Calculator How-To",
    desc: isKo ? "정가·할인율·할인가 변환 방법." : "How to calculate discount and final price.",
  },
  {
    slug: "bmi-check-how",
    emoji: "⚖️",
    title: isKo ? "BMI 계산기 사용법" : "BMI Calculator How-To",
    desc: isKo ? "키·몸무게로 BMI·체중 판정 보는 방법." : "How to calculate BMI and weight category.",
  },
  {
    slug: "wage-how",
    emoji: "💵",
    title: isKo ? "일급·시급 계산기 사용법" : "Wage Calculator How-To",
    desc: isKo ? "월급·일급·시급 서로 환산 방법." : "How to convert monthly, daily, hourly wage.",
  },
  {
    slug: "dsr-how",
    emoji: "🏠",
    title: isKo ? "DSR·대출 한도 계산기 사용법" : "DSR & Loan Limit Calculator How-To",
    desc: isKo ? "연소득·상환액으로 DSR 기준 대출 한도 참고 방법." : "How to estimate loan limit under DSR.",
  },
  {
    slug: "tip-how",
    emoji: "💵",
    title: isKo ? "팁 계산기 사용법" : "Tip Calculator How-To",
    desc: isKo ? "결제 금액·팁 %로 팁·총액 계산 방법." : "How to calculate tip and total.",
  },
  {
    slug: "annual-leave-how",
    emoji: "📅",
    title: isKo ? "연차·휴가 일수 계산기 사용법" : "Annual Leave Calculator How-To",
    desc: isKo ? "입사일·근속으로 발생 연차 일수 보는 방법." : "How to calculate accrued annual leave.",
  },
  {
    slug: "moving-how",
    emoji: "📦",
    title: isKo ? "이사 비용 계산기 사용법" : "Moving Cost Calculator How-To",
    desc: isKo ? "평수·거리로 이사비 참고하는 방법." : "How to estimate moving cost.",
  },
  {
    slug: "tdee-how",
    emoji: "🔥",
    title: isKo ? "BMR·TDEE 계산기 사용법" : "BMR & TDEE Calculator How-To",
    desc: isKo ? "기초대사량·일일 칼로리 계산 방법." : "How to calculate BMR and TDEE.",
  },
  {
    slug: "rent-how",
    emoji: "🏠",
    title: isKo ? "보증금·월세·전세 환산 사용법" : "Rent & Deposit Converter How-To",
    desc: isKo ? "보증금+월세 ↔ 전세금 환산 방법." : "How to convert deposit+rent and jeonse.",
  },
  {
    slug: "realtor-fee-how",
    emoji: "🏢",
    title: isKo ? "부동산 중개수수료 계산기 사용법" : "Realtor Fee Calculator How-To",
    desc: isKo ? "거래 금액별 중개수수료 상한 보는 방법." : "How to check realtor fee cap.",
  },
  {
    slug: "parking-how",
    emoji: "🅿️",
    title: isKo ? "주차 시간·요금 계산기 사용법" : "Parking Fee Calculator How-To",
    desc: isKo ? "입출차 시간·요금제로 주차비 계산 방법." : "How to calculate parking fee.",
  },
  {
    slug: "standard-weight-how",
    emoji: "⚖️",
    title: isKo ? "표준체중·권장 체중 계산기 사용법" : "Standard Weight Calculator How-To",
    desc: isKo ? "키·성별로 표준체중·권장 체중 범위 보는 방법." : "How to get standard weight and healthy range.",
  },
  {
    slug: "installment-how",
    emoji: "💳",
    title: isKo ? "할부 이자·수수료 계산기 사용법" : "Installment Fee Calculator How-To",
    desc: isKo ? "할부 원금·개월·수수료율로 수수료·월 납부액 계산 방법." : "How to calculate installment fee.",
  },
  {
    slug: "unemployment-how",
    emoji: "📋",
    title: isKo ? "실업급여 계산기 사용법" : "Unemployment Benefit Calculator How-To",
    desc: isKo ? "급여·가입 기간으로 수급 기간·일액 참고 방법." : "How to estimate unemployment benefit.",
  },
  {
    slug: "unit-price-how",
    emoji: "🧮",
    title: isKo ? "단가 계산기 사용법" : "Unit Price Calculator How-To",
    desc: isKo ? "총액·수량·단가 중 두 값으로 나머지 계산 방법." : "How to calculate unit price or total.",
  },
  {
    slug: "parental-leave-how",
    emoji: "👶",
    title: isKo ? "출산휴가·육아휴직 급여 계산기 사용법" : "Parental Leave Pay Calculator How-To",
    desc: isKo ? "월급·휴가 기간으로 급여 참고 방법." : "How to estimate parental leave pay.",
  },
  {
    slug: "pension-monthly-how",
    emoji: "📊",
    title: isKo ? "연금·월 수령액 계산기 사용법" : "Pension Monthly Calculator How-To",
    desc: isKo ? "잔액·이자·기간으로 월 수령액 계산 방법." : "How to calculate monthly pension withdrawal.",
  },
  {
    slug: "compare-how",
    emoji: "↔️",
    title: isKo ? "두 값 비교 계산기 사용법" : "Compare Two Values How-To",
    desc: isKo ? "A vs B 차이·차이 % 계산 방법." : "How to compare two values and get difference %.",
  },
  {
    slug: "tax-refund-how",
    emoji: "🧾",
    title: isKo ? "세금 환급·추가납부 계산기 사용법" : "Tax Refund Calculator How-To",
    desc: isKo ? "산출세액·이미 낸 세금으로 환급/추가납부 보는 방법." : "How to see refund or additional tax.",
  },
  {
    slug: "weekly-rest-how",
    emoji: "📅",
    title: isKo ? "주휴수당 계산기 사용법" : "Weekly Rest Pay How-To",
    desc: isKo ? "주 근로시간·시급으로 주휴수당 계산 방법." : "How to calculate weekly rest pay.",
  },
  {
    slug: "inflation-how",
    emoji: "📉",
    title: isKo ? "인플레이션·미래 가치 계산기 사용법" : "Inflation Calculator How-To",
    desc: isKo ? "현재 금액·인플률로 N년 후 구매력 보는 방법." : "How to see future purchasing power.",
  },
  {
    slug: "leave-balance-how",
    emoji: "📋",
    title: isKo ? "연차 잔여 일수 계산기 사용법" : "Leave Balance How-To",
    desc: isKo ? "연차 발생·사용으로 잔여 일수 보는 방법." : "How to get leave balance.",
  },
  {
    slug: "debt-ratio-how",
    emoji: "📊",
    title: isKo ? "부채 비율 계산기 사용법" : "Debt Ratio Calculator How-To",
    desc: isKo ? "자산·부채로 부채비율·순자산 보는 방법." : "How to calculate debt ratio.",
  },
  {
    slug: "savings-rate-how",
    emoji: "💰",
    title: isKo ? "저축률 계산기 사용법" : "Savings Rate How-To",
    desc: isKo ? "소득·저축으로 저축률 % 보는 방법." : "How to get savings rate %.",
  },
  {
    slug: "real-rate-how",
    emoji: "📐",
    title: isKo ? "실질 이자율 계산기 사용법" : "Real Interest Rate How-To",
    desc: isKo ? "명목 이자·인플레이션으로 실질 이자율 보는 방법." : "How to get real interest rate.",
  },
  { slug: "due-date-how", emoji: "📅", title: isKo ? "기준일 ± N일 계산기 가이드" : "Due Date Calculator How-To", desc: isKo ? "기준일에서 N일 전·후 날짜 계산 방법." : "How to get date from base ± N days." },
  { slug: "interest-simple-how", emoji: "💰", title: isKo ? "단리 이자 계산기 가이드" : "Simple Interest How-To", desc: isKo ? "원금·연이자율·일수로 단리 이자·만기 합계 계산." : "Principal, rate, days → simple interest and maturity." },
  { slug: "calorie-goal-how", emoji: "🔥", title: isKo ? "칼로리 목표 계산기 가이드" : "Calorie Goal How-To", desc: isKo ? "TDEE와 목표로 일일 칼로리 목표 계산." : "TDEE and goal → daily calorie target." },
  { slug: "vacation-cost-how", emoji: "✈️", title: isKo ? "여행 비용 계산기 가이드" : "Vacation Cost How-To", desc: isKo ? "여행 일수와 1일 예산으로 총 비용 예상." : "Trip days × daily budget → total cost." },
  { slug: "present-value-how", emoji: "📐", title: isKo ? "현재가치 계산기 가이드" : "Present Value How-To", desc: isKo ? "미래 금액·할인율로 현재가치(PV) 계산." : "Future amount, discount rate → PV." },
  { slug: "daily-prorated-how", emoji: "📋", title: isKo ? "일할 계산기 가이드" : "Daily Prorated How-To", desc: isKo ? "월급·출근일·총 근무일로 일할 금액 계산." : "Monthly pay, days worked → prorated pay." },
  { slug: "target-yield-how", emoji: "📈", title: isKo ? "목표 수익률 계산기 가이드" : "Target Yield How-To", desc: isKo ? "원금·목표 금액·기간으로 필요 연환산 수익률 계산." : "Principal, target, period → required annual yield %." },
  { slug: "compound-interest-how", emoji: "💰", title: isKo ? "복리 이자 계산기 가이드" : "Compound Interest How-To", desc: isKo ? "원금·연이자·기간으로 만기액 계산." : "Principal, rate, years → maturity." },
  { slug: "loan-remaining-how", emoji: "📉", title: isKo ? "대출 잔액 계산기 가이드" : "Loan Remaining How-To", desc: isKo ? "N회 상환 후 잔액 계산." : "Remaining balance after N payments." },
  { slug: "break-even-how", emoji: "⚖️", title: isKo ? "손익분기점 계산기 가이드" : "Break-Even How-To", desc: isKo ? "고정비·변동비·단가로 손익분기 개수." : "Break-even quantity from costs and price." },
  { slug: "cagr-how", emoji: "📈", title: isKo ? "CAGR 계산기 가이드" : "CAGR How-To", desc: isKo ? "시작·종료·기간으로 연평균 성장률." : "CAGR from start, end, years." },
  { slug: "roi-how", emoji: "📊", title: isKo ? "ROI 계산기 가이드" : "ROI How-To", desc: isKo ? "투자금·수익으로 ROI % 계산." : "ROI % from investment and return." },
  { slug: "subscription-yearly-how", emoji: "📅", title: isKo ? "구독 연간 비용 가이드" : "Subscription Yearly How-To", desc: isKo ? "월 구독료 연 환산." : "Monthly to yearly subscription cost." },
  { slug: "fuel-cost-how", emoji: "⛽", title: isKo ? "주유 비용 계산기 가이드" : "Fuel Cost How-To", desc: isKo ? "거리·연비·리터당으로 주유 비용." : "Fuel cost from distance and efficiency." },
  { slug: "emergency-fund-how", emoji: "🛡️", title: isKo ? "비상금 목표 가이드" : "Emergency Fund How-To", desc: isKo ? "월 지출×N개월 목표 비상금." : "Target emergency fund from monthly expense." },
  { slug: "mortgage-monthly-how", emoji: "🏠", title: isKo ? "주담대 월 상환액 가이드" : "Mortgage Monthly How-To", desc: isKo ? "대출금·이자·기간으로 월 상환액." : "Monthly mortgage payment calculation." },
  { slug: "fee-per-use-how", emoji: "🎫", title: isKo ? "이용당 수수료 가이드" : "Fee per Use How-To", desc: isKo ? "연 회비÷이용 횟수 1회당 비용." : "Cost per use from annual fee." },
  { slug: "doubling-time-how", emoji: "⏱️", title: isKo ? "72법칙·배증 기간 가이드" : "72 Rule How-To", desc: isKo ? "연 수익률로 2배 걸리는 년수." : "Years to double from annual rate." },
  { slug: "pension-lump-how", emoji: "🏦", title: isKo ? "퇴직연금 일시금 vs 연금 가이드" : "Pension Lump vs Annuity How-To", desc: isKo ? "일시금·연금 단순 비교." : "Lump sum vs annuity comparison." },
  { slug: "child-cost-how", emoji: "👶", title: isKo ? "자녀 양육비 추정 가이드" : "Child Cost How-To", desc: isKo ? "월 예산·기간으로 연/총 양육비." : "Child cost estimate from monthly budget." },
  { slug: "pet-cost-how", emoji: "🐕", title: isKo ? "반려동물 월 비용 가이드" : "Pet Cost How-To", desc: isKo ? "종류·사료·기타 월 비용 추정." : "Monthly pet cost estimate." },
  { slug: "wedding-cost-how", emoji: "💒", title: isKo ? "결혼 예산 추정 가이드" : "Wedding Cost How-To", desc: isKo ? "하객·식대·기타 총 예산 참고." : "Wedding budget from guests and items." },
  { slug: "business-days-how", emoji: "📆", title: isKo ? "영업일 계산 가이드" : "Business Days How-To", desc: isKo ? "두 날짜 사이 영업일(주말 제외)." : "Business days between dates." },
  { slug: "countdown-how", emoji: "⏳", title: isKo ? "D-day 카운트다운 가이드" : "Countdown How-To", desc: isKo ? "목표일까지 D-day 계산." : "D-day countdown to target." },
  { slug: "week-number-how", emoji: "📅", title: isKo ? "주차 계산기 가이드" : "Week Number How-To", desc: isKo ? "날짜가 그해 몇 주차인지." : "Week number of the year." },
  { slug: "add-days-how", emoji: "➕", title: isKo ? "날짜에 일수 더하기 가이드" : "Add Days How-To", desc: isKo ? "기준일+N일 결과 날짜." : "Base date + N days." },
  { slug: "time-between-how", emoji: "⏱️", title: isKo ? "두 시각 사이 가이드" : "Time Between How-To", desc: isKo ? "시작·종료 시각 경과 시간." : "Elapsed time between times." },
  { slug: "work-hours-how", emoji: "🕐", title: isKo ? "근무시간 계산 가이드" : "Work Hours How-To", desc: isKo ? "출근·퇴근 근무 시간." : "Work hours from clock in/out." },
  { slug: "meeting-cost-how", emoji: "👥", title: isKo ? "회의 비용 계산 가이드" : "Meeting Cost How-To", desc: isKo ? "인원×시간×시급 회의 비용." : "Meeting cost from people and time." },
  { slug: "age-diff-how", emoji: "🎂", title: isKo ? "나이 차이 계산 가이드" : "Age Diff How-To", desc: isKo ? "두 생년월일 나이 차이." : "Age difference from two births." },
  { slug: "protein-goal-how", emoji: "🥩", title: isKo ? "단백질 목표량 가이드" : "Protein Goal How-To", desc: isKo ? "체중·활동으로 일일 단백질 g." : "Daily protein from weight, activity." },
  { slug: "water-intake-how", emoji: "💧", title: isKo ? "하루 물 권장량 가이드" : "Water Intake How-To", desc: isKo ? "체중·활동으로 일일 물 ml." : "Daily water from weight, activity." },
  { slug: "bmr-only-how", emoji: "🔥", title: isKo ? "BMR 계산기 가이드" : "BMR How-To", desc: isKo ? "키·몸무게·나이·성별 기초대사량." : "BMR from height, weight, age, gender." },
  { slug: "one-rep-max-how", emoji: "🏋️", title: isKo ? "1RM 추정 가이드" : "1RM How-To", desc: isKo ? "무게·반복으로 1RM 추정." : "1RM from weight and reps." },
  { slug: "pace-calc-how", emoji: "🏃", title: isKo ? "페이스 계산기 가이드" : "Pace Calc How-To", desc: isKo ? "거리·시간으로 km당 페이스." : "Pace per km from distance, time." },
  { slug: "calorie-burn-how", emoji: "🔥", title: isKo ? "운동 칼로리 소모 가이드" : "Calorie Burn How-To", desc: isKo ? "종류·시간·체중 소모 kcal." : "Calorie burn from activity, time, weight." },
  { slug: "sleep-debt-how", emoji: "😴", title: isKo ? "수면 부채 가이드" : "Sleep Debt How-To", desc: isKo ? "권장 대비 부족 수면 시간." : "Sleep debt vs recommended." },
  { slug: "bmi-range-how", emoji: "📊", title: isKo ? "BMI 구간 설명 가이드" : "BMI Range How-To", desc: isKo ? "BMI 값 구간 설명." : "BMI value to category." },
  { slug: "ideal-weight-how", emoji: "⚖️", title: isKo ? "이상 체중 범위 가이드" : "Ideal Weight How-To", desc: isKo ? "키·성별 Broca·BMI 범위." : "Ideal weight range from height, gender." },
  { slug: "body-fat-est-how", emoji: "📉", title: isKo ? "체지방률 추정 가이드" : "Body Fat Est How-To", desc: isKo ? "BMI·나이·성별 체지방률 추정." : "Body fat % from BMI, age, gender." },
  { slug: "coffee-yearly-how", emoji: "☕", title: isKo ? "연간 커피 비용 가이드" : "Coffee Yearly How-To", desc: isKo ? "잔당·주 횟수 연 비용." : "Per cup, weekly → yearly." },
  { slug: "delivery-yearly-how", emoji: "🛵", title: isKo ? "배달비 모아보기 가이드" : "Delivery Yearly How-To", desc: isKo ? "1회·월 횟수 월/연 비용." : "Per order, monthly → cost." },
  { slug: "ott-total-how", emoji: "📺", title: isKo ? "OTT 구독 합계 가이드" : "OTT Total How-To", desc: isKo ? "넷플·디즈니 등 월 합계." : "OTT monthly total." },
  { slug: "gym-value-how", emoji: "💪", title: isKo ? "헬스장 이용당 단가 가이드" : "Gym Value How-To", desc: isKo ? "월 회비÷이용 일수 1회당." : "Monthly fee ÷ days." },
  { slug: "lunch-cost-how", emoji: "🍱", title: isKo ? "월 점심비 가이드" : "Lunch Cost How-To", desc: isKo ? "1인당·출근일 월 점심비." : "Per person, days → monthly." },
  { slug: "cigarette-cost-how", emoji: "🚬", title: isKo ? "담배 비용 가이드" : "Cigarette Cost How-To", desc: isKo ? "갑당·일 소비량 월/연." : "Per pack, daily → cost." },
  { slug: "alcohol-monthly-how", emoji: "🍺", title: isKo ? "음주 비용 가이드" : "Alcohol Monthly How-To", desc: isKo ? "1회·월 횟수 월/연." : "Per occasion, monthly → cost." },
  { slug: "snack-cost-how", emoji: "🍪", title: isKo ? "간식 비용 가이드" : "Snack Cost How-To", desc: isKo ? "일 평균·일수 비용." : "Daily average, days → cost." },
  { slug: "phone-compare-how", emoji: "📱", title: isKo ? "요금제 비교 가이드" : "Phone Compare How-To", desc: isKo ? "데이터·통화 월 예상 참고." : "Data, voice → monthly estimate." },
  { slug: "car-depreciation-how", emoji: "🚗", title: isKo ? "차량 감가상각 가이드" : "Car Depreciation How-To", desc: isKo ? "구입가·연식·감가율 가치." : "Purchase, years, rate → value." },
  { slug: "book-budget-how", emoji: "📚", title: isKo ? "독서 예산 가이드" : "Book Budget How-To", desc: isKo ? "권당·월 n권 월/연 예산." : "Per book, monthly → budget." },
  { slug: "study-hours-how", emoji: "📖", title: isKo ? "목표 학습시간 가이드" : "Study Hours How-To", desc: isKo ? "시험일·총 시간 일일 권장." : "Exam days, total → daily." },
  { slug: "percent-change-how", emoji: "📊", title: isKo ? "퍼센트 변화 가이드" : "Percent Change How-To", desc: isKo ? "이전·현재 → 증감 %." : "Before, after → change %." },
  { slug: "percent-of-how", emoji: "%", title: isKo ? "A의 B% 가이드" : "Percent Of How-To", desc: isKo ? "전체·비율 → 해당 금액." : "Total, rate → amount." },
  { slug: "reverse-percent-how", emoji: "↩️", title: isKo ? "역산 퍼센트 가이드" : "Reverse Percent How-To", desc: isKo ? "결과·비율 → 원래 값." : "Result, rate → original." },
  { slug: "margin-markup-how", emoji: "📐", title: isKo ? "마진 vs 마크업 가이드" : "Margin vs Markup How-To", desc: isKo ? "원가·판가 → 마진/마크업 %." : "Cost, price → margin/markup %." },
  { slug: "split-percent-how", emoji: "✂️", title: isKo ? "비율 N빵 가이드" : "Split by Ratio How-To", desc: isKo ? "총액·비율 → 각 금액." : "Total, ratio → each." },
  { slug: "tax-bracket-how", emoji: "🧾", title: isKo ? "세율 구간 가이드" : "Tax Bracket How-To", desc: isKo ? "과세소득 → 구간별 세율 참고." : "Taxable income → brackets." },
  { slug: "allocation-how", emoji: "🥧", title: isKo ? "자산 배분 가이드" : "Allocation How-To", desc: isKo ? "총액·비율% → 항목별." : "Total, % → per item." },
  { slug: "growth-rate-how", emoji: "📈", title: isKo ? "성장률 계산 가이드" : "Growth Rate How-To", desc: isKo ? "전기·당기 → 성장률 %." : "Prev, current → growth %." },
  { slug: "area-convert-how", emoji: "📐", title: isKo ? "면적 변환 가이드" : "Area Convert How-To", desc: isKo ? "㎡·평·sqft·ha 변환." : "m², pyeong, sqft, ha." },
  { slug: "volume-convert-how", emoji: "🧪", title: isKo ? "부피 변환 가이드" : "Volume Convert How-To", desc: isKo ? "L·mL·gal·cc 변환." : "L, mL, gal, cc." },
  { slug: "speed-convert-how", emoji: "🚗", title: isKo ? "속도 변환 가이드" : "Speed Convert How-To", desc: isKo ? "km/h·m/s·mph 변환." : "km/h, m/s, mph." },
  { slug: "data-size-how", emoji: "💾", title: isKo ? "데이터 용량 가이드" : "Data Size How-To", desc: isKo ? "KB·MB·GB·TB 변환." : "KB, MB, GB, TB." },
  { slug: "timezone-diff-how", emoji: "🌍", title: isKo ? "시간대 차이 가이드" : "Timezone Diff How-To", desc: isKo ? "UTC offset 차이." : "Two offsets → diff." },
  { slug: "pressure-convert-how", emoji: "🔧", title: isKo ? "압력 변환 가이드" : "Pressure Convert How-To", desc: isKo ? "Pa·bar·psi·atm 변환." : "Pa, bar, psi, atm." },
  { slug: "energy-convert-how", emoji: "⚡", title: isKo ? "에너지 변환 가이드" : "Energy Convert How-To", desc: isKo ? "kcal·kJ·Wh 변환." : "kcal, kJ, Wh." },
  { slug: "loan-payoff-date-how", emoji: "📅", title: isKo ? "대출 상환 완료일 가이드" : "Loan Payoff Date How-To", desc: isKo ? "월 상환·잔액 → 완료일." : "Monthly, balance → date." },
  { slug: "solar-payback-how", emoji: "☀️", title: isKo ? "태양광 회수 가이드" : "Solar Payback How-To", desc: isKo ? "설치비·연 절감 → 년수." : "Cost, saving → years." },
  { slug: "carbon-footprint-how", emoji: "🌱", title: isKo ? "탄소발자국 가이드" : "Carbon Footprint How-To", desc: isKo ? "이동·전기 → CO2 kg." : "Travel, electricity → CO2." },
  { slug: "habit-streak-how", emoji: "🔥", title: isKo ? "습관 연속 일수 가이드" : "Habit Streak How-To", desc: isKo ? "시작일·오늘 → 연속일." : "Start, today → streak." },
  { slug: "dice-how", emoji: "🎲", title: isKo ? "주사위 뽑기 가이드" : "Dice How-To", desc: isKo ? "n면체·개수 → 랜덤." : "Sides, count → random." },
  { slug: "marathon-pace-how", emoji: "🏃", title: isKo ? "마라톤 페이스 가이드" : "Marathon Pace How-To", desc: isKo ? "목표 시간·거리 → pace." : "Target time, dist → pace." },
  { slug: "readability-how", emoji: "📖", title: isKo ? "글 난이도 가이드" : "Readability How-To", desc: isKo ? "텍스트 → 독해 수준." : "Text → reading level." },
  { slug: "battery-life-how", emoji: "🔋", title: isKo ? "배터리 수명 비용 가이드" : "Battery Life Cost How-To", desc: isKo ? "기기 가격·년수 → 연 비용." : "Price, years → annual." },
  { slug: "discount-stack-how", emoji: "🏷️", title: isKo ? "할인 중첩 가이드" : "Discount Stack How-To", desc: isKo ? "정가·할인% → 최종가." : "Price, discount % → final." },
  { slug: "rent-ratio-how", emoji: "🏠", title: isKo ? "월세 부담비율 가이드" : "Rent Ratio How-To", desc: isKo ? "월소득·월세 → 부담률 %." : "Income, rent → burden %." },
  { slug: "coin-flip-how", emoji: "🪙", title: isKo ? "동전 던지기 가이드" : "Coin Flip How-To", desc: isKo ? "앞/뒤 랜덤." : "Heads or tails." },
  { slug: "rps-how", emoji: "✊", title: isKo ? "가위바위보 가이드" : "RPS How-To", desc: isKo ? "랜덤 대결." : "Random vs you." },
  { slug: "random-name-how", emoji: "👤", title: isKo ? "이름 랜덤 뽑기 가이드" : "Random Name How-To", desc: isKo ? "목록에서 1명." : "Pick one from list." },
  { slug: "random-number-how", emoji: "🔢", title: isKo ? "숫자 랜덤 가이드" : "Random Number How-To", desc: isKo ? "최소~최대 범위." : "Min to max." },
  { slug: "team-split-how", emoji: "⚽", title: isKo ? "팀 나누기 가이드" : "Team Split How-To", desc: isKo ? "이름 → A팀 B팀." : "Names → team A/B." },
  { slug: "spin-wheel-how", emoji: "🎡", title: isKo ? "돌림판 가이드" : "Spin Wheel How-To", desc: isKo ? "항목 → 랜덤 선택." : "Items → random pick." },
  { slug: "card-draw-how", emoji: "🃏", title: isKo ? "카드 한 장 가이드" : "Card Draw How-To", desc: isKo ? "52장에서 1장." : "One from 52." },
  { slug: "bingo-caller-how", emoji: "🎱", title: isKo ? "빙고 숫자 가이드" : "Bingo Caller How-To", desc: isKo ? "1~75 호출." : "1–75 call." },
  { slug: "truth-dare-how", emoji: "🎯", title: isKo ? "진실 또는 도전 가이드" : "Truth or Dare How-To", desc: isKo ? "랜덤 제시." : "Random pick." },
  { slug: "yes-no-how", emoji: "❓", title: isKo ? "예/아니오 가이드" : "Yes or No How-To", desc: isKo ? "랜덤." : "Random." },
  { slug: "random-pair-how", emoji: "👥", title: isKo ? "두 명 매칭 가이드" : "Random Pair How-To", desc: isKo ? "이름 2명씩 랜덤." : "Pair names." },
  { slug: "order-random-how", emoji: "🔀", title: isKo ? "순서 랜덤 가이드" : "Order Random How-To", desc: isKo ? "이름 → 발표 순서." : "Names → order." },
  { slug: "lottery-six-how", emoji: "🎰", title: isKo ? "로또 6개 번호 가이드" : "Lottery Six How-To", desc: isKo ? "1~45 중 6개." : "6 from 1–45." },
  { slug: "word-random-how", emoji: "📝", title: isKo ? "단어 랜덤 가이드" : "Word Random How-To", desc: isKo ? "목록에서 1개." : "One from list." },
  { slug: "color-random-how", emoji: "🎨", title: isKo ? "랜덤 색상 가이드" : "Random Color How-To", desc: isKo ? "HEX 코드." : "HEX code." },
  { slug: "penalty-random-how", emoji: "😅", title: isKo ? "벌칙 랜덤 가이드" : "Penalty Random How-To", desc: isKo ? "목록에서 1개." : "One from list." },
  { slug: "random-first-how", emoji: "🏁", title: isKo ? "누가 먼저 가이드" : "Random First How-To", desc: isKo ? "N명 중 1명." : "One of N." },
  { slug: "elimination-order-how", emoji: "📋", title: isKo ? "탈락 순서 가이드" : "Elimination Order How-To", desc: isKo ? "N명 순서 랜덤." : "Random order." },
  { slug: "emoji-random-how", emoji: "😀", title: isKo ? "이모지 랜덤 가이드" : "Emoji Random How-To", desc: isKo ? "카테고리별." : "By category." },
  { slug: "random-line-how", emoji: "📄", title: isKo ? "한 줄 랜덤 가이드" : "Random Line How-To", desc: isKo ? "여러 줄에서 1줄." : "One line from text." },
  { slug: "countdown-timer-how", emoji: "⏱️", title: isKo ? "카운트다운 타이머 가이드" : "Countdown Timer How-To", desc: isKo ? "분·초." : "Min, sec." },
  { slug: "stopwatch-how", emoji: "⏱️", title: isKo ? "스톱워치 가이드" : "Stopwatch How-To", desc: isKo ? "시작/일시/리셋." : "Start/pause/reset." },
  { slug: "turn-timer-how", emoji: "🔄", title: isKo ? "턴 타이머 가이드" : "Turn Timer How-To", desc: isKo ? "N초 턴 제한." : "N sec per turn." },
  { slug: "scoreboard-how", emoji: "📊", title: isKo ? "스코어보드 가이드" : "Scoreboard How-To", desc: isKo ? "팀별 점수 +/-." : "Team score +/-." },
  { slug: "life-counter-how", emoji: "❤️", title: isKo ? "생명 카운터 가이드" : "Life Counter How-To", desc: isKo ? "HP 트래킹." : "HP tracking." },
  { slug: "game-timer-how", emoji: "🎮", title: isKo ? "게임 타이머 가이드" : "Game Timer How-To", desc: isKo ? "플레이어별 N분." : "N min per player." },
  { slug: "score-keeper-how", emoji: "📋", title: isKo ? "점수 기록 가이드" : "Score Keeper How-To", desc: isKo ? "2~4인 점수." : "2–4 player score." },
  { slug: "timer-bomb-how", emoji: "💣", title: isKo ? "폭탄 타이머 가이드" : "Timer Bomb How-To", desc: isKo ? "랜덤 시간 후 알림." : "Random time then boom." },
  { slug: "quick-draw-how", emoji: "🤠", title: isKo ? "빠른 손 가이드" : "Quick Draw How-To", desc: isKo ? "준비 후 GO 랜덤." : "Ready then GO." },
  { slug: "reaction-test-how", emoji: "⚡", title: isKo ? "반응 속도 가이드" : "Reaction Test How-To", desc: isKo ? "클릭 반응 ms." : "Click reaction ms." },
  { slug: "dice-d20-how", emoji: "🎲", title: isKo ? "d20 주사위 가이드" : "d20 Dice How-To", desc: isKo ? "RPG 1d20." : "RPG 1d20." },
  { slug: "dice-2d6-how", emoji: "🎲", title: isKo ? "2d6 가이드" : "2d6 How-To", desc: isKo ? "두 개 6면체 합." : "Two d6 sum." },
  { slug: "dice-d100-how", emoji: "🎲", title: isKo ? "d100 가이드" : "d100 How-To", desc: isKo ? "1~100." : "1–100." },
  { slug: "dice-fate-how", emoji: "🔮", title: isKo ? "운세 주사위 가이드" : "Fate Dice How-To", desc: isKo ? "긍정/부정/중립." : "Positive/negative/neutral." },
  { slug: "card-deck-how", emoji: "🃏", title: isKo ? "카드 덱 뽑기 가이드" : "Card Deck How-To", desc: isKo ? "52장에서 1장." : "One from 52." },
  { slug: "uno-draw-how", emoji: "🃏", title: isKo ? "UNO 드로우 가이드" : "UNO Draw How-To", desc: isKo ? "1~4장 랜덤." : "1–4 cards." },
  { slug: "rps-lizard-spock-how", emoji: "✋", title: isKo ? "가위바위보 확장 가이드" : "RPS Lizard Spock How-To", desc: isKo ? "5가지." : "Five choices." },
  { slug: "coin-flip-3-how", emoji: "🪙", title: isKo ? "동전 3번 가이드" : "Coin Flip 3 How-To", desc: isKo ? "3회 던지기." : "Flip 3 times." },
  { slug: "dice-pool-how", emoji: "🎲", title: isKo ? "다이스 풀 가이드" : "Dice Pool How-To", desc: isKo ? "nD6 중 5 이상 개수." : "nD6 count ≥5." },
  { slug: "card-hand-how", emoji: "🃏", title: isKo ? "카드 5장 가이드" : "Card Hand How-To", desc: isKo ? "5장 핸드 랜덤." : "Random 5 cards." },
  { slug: "mafia-role-how", emoji: "🕵️", title: isKo ? "마피아 역할 가이드" : "Mafia Role How-To", desc: isKo ? "시민/마피아 배정." : "Citizen/mafia assign." },
  { slug: "werewolf-role-how", emoji: "🐺", title: isKo ? "늑대인간 역할 가이드" : "Werewolf Role How-To", desc: isKo ? "역할 랜덤 배정." : "Role random assign." },
  { slug: "charade-word-how", emoji: "🎭", title: isKo ? "제시어 (몸으로) 가이드" : "Charade Word How-To", desc: isKo ? "제시어 랜덤." : "Random word." },
  { slug: "pictionary-word-how", emoji: "🖌️", title: isKo ? "그림 제시어 가이드" : "Pictionary Word How-To", desc: isKo ? "그리기 게임용." : "Drawing game word." },
  { slug: "secret-santa-how", emoji: "🎅", title: isKo ? "시크릿 산타 가이드" : "Secret Santa How-To", desc: isKo ? "이름 → 누가 누구에게." : "Who gives to whom." },
  { slug: "dinner-picker-how", emoji: "🍽️", title: isKo ? "오늘 뭐 먹지 가이드" : "Dinner Picker How-To", desc: isKo ? "메뉴 랜덤." : "Random menu." },
  { slug: "movie-picker-how", emoji: "🎬", title: isKo ? "영화 고르기 가이드" : "Movie Picker How-To", desc: isKo ? "목록에서 1편." : "One from list." },
  { slug: "song-random-how", emoji: "🎵", title: isKo ? "노래 랜덤 가이드" : "Song Random How-To", desc: isKo ? "목록에서 1곡." : "One from list." },
  { slug: "tier-picker-how", emoji: "🏆", title: isKo ? "등급 랜덤 가이드" : "Tier Picker How-To", desc: isKo ? "S/A/B/C." : "S/A/B/C/D." },
  { slug: "mood-random-how", emoji: "🌈", title: isKo ? "기분 랜덤 가이드" : "Mood Random How-To", desc: isKo ? "이모지 기분 1개." : "Random mood emoji." },
  { slug: "nickname-gen-how", emoji: "🎮", title: isKo ? "닉네임 생성기 가이드" : "Nickname Gen How-To", desc: isKo ? "랜덤 닉네임." : "Random nickname." },
  { slug: "couple-name-how", emoji: "💕", title: isKo ? "커플 이름 합성 가이드" : "Couple Name How-To", desc: isKo ? "두 이름 → 커플명." : "Two names → couple name." },
  { slug: "mbti-random-how", emoji: "🧠", title: isKo ? "MBTI 랜덤 가이드" : "MBTI Random How-To", desc: isKo ? "16가지 중 1개." : "One of 16." },
  { slug: "lucky-number-how", emoji: "🍀", title: isKo ? "행운의 숫자 가이드" : "Lucky Number How-To", desc: isKo ? "1~99 랜덤." : "1–99 random." },
  { slug: "fortune-cookie-how", emoji: "🥠", title: isKo ? "포춘 쿠키 가이드" : "Fortune Cookie How-To", desc: isKo ? "한줄 메시지." : "One-line message." },
  { slug: "compliment-random-how", emoji: "💝", title: isKo ? "칭찬 한마디 가이드" : "Compliment Random How-To", desc: isKo ? "칭찬 문구 랜덤." : "Random compliment." },
  { slug: "excuse-generator-how", emoji: "😅", title: isKo ? "변명 생성기 가이드" : "Excuse Generator How-To", desc: isKo ? "재미 변명 한줄." : "Fun excuse one-liner." },
  { slug: "decision-wheel-how", emoji: "🎡", title: isKo ? "결정 돌림판 가이드" : "Decision Wheel How-To", desc: isKo ? "예/아니오/다시." : "Yes/No/Again." },
  { slug: "bottle-spin-how", emoji: "🍾", title: isKo ? "병 돌리기 가이드" : "Bottle Spin How-To", desc: isKo ? "방향 랜덤." : "Random direction." },
  { slug: "random-date-how", emoji: "📅", title: isKo ? "랜덤 날짜 가이드" : "Random Date How-To", desc: isKo ? "올해 안 특정일." : "Random date this year." },
  { slug: "tarot-single-how", emoji: "🃏", title: isKo ? "타로 한 장 가이드" : "Tarot Single How-To", desc: isKo ? "카드+한줄 해석." : "Card + one-line." },
  { slug: "horoscope-daily-how", emoji: "⭐", title: isKo ? "오늘의 별자리 가이드" : "Horoscope Daily How-To", desc: isKo ? "별자리별 한줄 운세." : "One-line per sign." },
  { slug: "mood-ring-how", emoji: "💍", title: isKo ? "무드링 가이드" : "Mood Ring How-To", desc: isKo ? "색상+기분." : "Color + mood." },
  { slug: "random-advice-how", emoji: "💡", title: isKo ? "랜덤 조언 가이드" : "Random Advice How-To", desc: isKo ? "조언 한줄." : "One-line advice." },
  { slug: "would-you-rather-how", emoji: "🤔", title: isKo ? "둘 중 하나 가이드" : "Would You Rather How-To", desc: isKo ? "질문 랜덤." : "Random question." },
  { slug: "never-have-i-how", emoji: "🙈", title: isKo ? "나는 한번도 가이드" : "Never Have I How-To", desc: isKo ? "문장 랜덤." : "Random sentence." },
  { slug: "this-or-that-how", emoji: "⚖️", title: isKo ? "이것 or 저것 가이드" : "This or That How-To", desc: isKo ? "A/B 선택 랜덤." : "A or B random." },
  { slug: "random-challenge-how", emoji: "🎯", title: isKo ? "오늘의 챌린지 가이드" : "Random Challenge How-To", desc: isKo ? "챌린지 1가지." : "One challenge." },
  { slug: "gratitude-pick-how", emoji: "🙏", title: isKo ? "감사 뽑기 가이드" : "Gratitude Pick How-To", desc: isKo ? "감사할 것 1가지." : "One thing grateful." },
  { slug: "hobby-suggest-how", emoji: "🎨", title: isKo ? "취미 추천 가이드" : "Hobby Suggest How-To", desc: isKo ? "취미 1개 랜덤." : "One hobby random." },
  { slug: "weekend-idea-how", emoji: "📆", title: isKo ? "주말 뭐할지 가이드" : "Weekend Idea How-To", desc: isKo ? "할 일 아이디어 1개." : "One weekend idea." },
  { slug: "coffee-order-how", emoji: "☕", title: isKo ? "커피 메뉴 가이드" : "Coffee Order How-To", desc: isKo ? "메뉴 랜덤." : "Random menu." },
  { slug: "workout-random-how", emoji: "💪", title: isKo ? "오늘의 운동 가이드" : "Workout Random How-To", desc: isKo ? "운동 종목 1개." : "One workout." },
  { slug: "book-suggest-how", emoji: "📚", title: isKo ? "읽을 책 가이드" : "Book Suggest How-To", desc: isKo ? "장르/테마 랜덤." : "Genre/theme random." },
  { slug: "movie-genre-how", emoji: "🎬", title: isKo ? "볼 영화 가이드" : "Movie Genre How-To", desc: isKo ? "장르 랜덤." : "Random genre." },
  { slug: "korean-name-how", emoji: "✏️", title: isKo ? "한글 이름 생성 가이드" : "Korean Name How-To", desc: isKo ? "이름 랜덤 생성." : "Random name gen." },
  { slug: "team-name-gen-how", emoji: "👥", title: isKo ? "팀 이름 생성 가이드" : "Team Name Gen How-To", desc: isKo ? "팀명 랜덤." : "Random team name." },
  { slug: "slogan-random-how", emoji: "💬", title: isKo ? "슬로건 랜덤 가이드" : "Slogan Random How-To", desc: isKo ? "캐치프레이즈 한줄." : "One-line slogan." },
  { slug: "daily-quote-how", emoji: "📜", title: isKo ? "오늘의 명언 가이드" : "Daily Quote How-To", desc: isKo ? "명언 한줄." : "One-line quote." },
  { slug: "emoji-combo-how", emoji: "😀", title: isKo ? "이모지 조합 가이드" : "Emoji Combo How-To", desc: isKo ? "이모지 2~3개." : "2–3 emojis." },
  { slug: "first-letter-how", emoji: "🔤", title: isKo ? "첫글자 단어 가이드" : "First Letter How-To", desc: isKo ? "알파벳+단어 랜덤." : "Letter + word random." },
  { slug: "random-food-how", emoji: "🍽️", title: isKo ? "오늘 뭐 먹지 사용법" : "Random Food How-To", desc: isKo ? "음식 종류 랜덤." : "음식 종류 랜덤." },
  { slug: "magic-8-ball-how", emoji: "🔮", title: isKo ? "매직 8볼 사용법" : "Magic 8 Ball How-To", desc: isKo ? "예/아니오/다시 답변." : "예/아니오/다시 답변." },
  { slug: "pet-name-gen-how", emoji: "🐾", title: isKo ? "반려동물 이름 생성 사용법" : "Pet Name Gen How-To", desc: isKo ? "이름 랜덤 생성." : "이름 랜덤 생성." },
  { slug: "band-name-gen-how", emoji: "🎸", title: isKo ? "밴드 이름 생성 사용법" : "Band Name Gen How-To", desc: isKo ? "밴드명 랜덤." : "밴드명 랜덤." },
  { slug: "dinner-roulette-how", emoji: "🎲", title: isKo ? "저녁 룰렛 사용법" : "Dinner Roulette How-To", desc: isKo ? "저녁 메뉴 랜덤." : "저녁 메뉴 랜덤." },
  { slug: "affirmation-daily-how", emoji: "✨", title: isKo ? "오늘의 긍정 한마디 사용법" : "Affirmation Daily How-To", desc: isKo ? "긍정 확언 문장." : "긍정 확언 문장." },
  { slug: "birth-flower-how", emoji: "🌸", title: isKo ? "생일 꽃 사용법" : "Birth Flower How-To", desc: isKo ? "월별 탄생화 랜덤." : "월별 탄생화 랜덤." },
  { slug: "icebreaker-how", emoji: "💬", title: isKo ? "아이스브레이커 질문 사용법" : "Icebreaker How-To", desc: isKo ? "대화 시작 질문." : "대화 시작 질문." },
  { slug: "dare-random-how", emoji: "😈", title: isKo ? "랜덤 질문 (진실게임) 사용법" : "Dare Random How-To", desc: isKo ? "진실 또는 도전 질문." : "진실 또는 도전 질문." },
  { slug: "color-palette-how", emoji: "🎨", title: isKo ? "랜덤 컬러 팔레트 사용법" : "Color Palette How-To", desc: isKo ? "색상 이름 3개." : "색상 이름 3개." },
  { slug: "number-lucky-how", emoji: "🍀", title: isKo ? "오늘의 행운 숫자 사용법" : "Number Lucky How-To", desc: isKo ? "1~100 랜덤." : "1~100 랜덤." },
  { slug: "conversation-starter-how", emoji: "🗣️", title: isKo ? "대화 시작 질문 사용법" : "Conversation Starter How-To", desc: isKo ? "질문 한 줄." : "질문 한 줄." },
  { slug: "recipe-roulette-how", emoji: "👨‍🍳", title: isKo ? "요리 룰렛 사용법" : "Recipe Roulette How-To", desc: isKo ? "요리 종류 랜덤." : "요리 종류 랜덤." },
  { slug: "gift-idea-how", emoji: "🎁", title: isKo ? "선물 아이디어 사용법" : "Gift Idea How-To", desc: isKo ? "선물 1가지." : "선물 1가지." },
  { slug: "date-idea-how", emoji: "💕", title: isKo ? "데이트 아이디어 사용법" : "Date Idea How-To", desc: isKo ? "데이트 1가지." : "데이트 1가지." },
  { slug: "motivation-daily-how", emoji: "🔥", title: isKo ? "오늘의 동기부여 사용법" : "Motivation Daily How-To", desc: isKo ? "동기부여 한 줄." : "동기부여 한 줄." },
  { slug: "mantra-daily-how", emoji: "🧘", title: isKo ? "오늘의 멘트 사용법" : "Mantra Daily How-To", desc: isKo ? "멘트 한 줄." : "멘트 한 줄." },
  { slug: "two-truths-lie-how", emoji: "🤥", title: isKo ? "두 진실 한 거짓 사용법" : "Two Truths Lie How-To", desc: isKo ? "질문 3개 (둘은 진실, 하나는 거짓)." : "질문 3개 (둘은 진실, 하나는 거짓)." },
  { slug: "random-superpower-how", emoji: "🦸", title: isKo ? "랜덤 슈퍼파워 사용법" : "Random Superpower How-To", desc: isKo ? "초능력 1가지." : "초능력 1가지." },
  { slug: "random-country-how", emoji: "🌍", title: isKo ? "랜덤 나라 사용법" : "Random Country How-To", desc: isKo ? "나라 1개." : "나라 1개." },
  { slug: "random-job-how", emoji: "💼", title: isKo ? "랜덤 직업 사용법" : "Random Job How-To", desc: isKo ? "직업 1개." : "직업 1개." },
  { slug: "tongue-twister-how", emoji: "👅", title: isKo ? "쉬운 말맛힘 사용법" : "Tongue Twister How-To", desc: isKo ? "말맛힘 문장." : "말맛힘 문장." },
  { slug: "riddle-daily-how", emoji: "🧩", title: isKo ? "오늘의 수수께끼 사용법" : "Riddle Daily How-To", desc: isKo ? "수수께끼 한 개." : "수수께끼 한 개." },
  { slug: "roast-mild-how", emoji: "😏", title: isKo ? "친근한 놀림 한마디 사용법" : "Roast Mild How-To", desc: isKo ? "가벼운 놀림." : "가벼운 놀림." },
  { slug: "pep-talk-how", emoji: "💪", title: isKo ? "격려 한마디 사용법" : "Pep Talk How-To", desc: isKo ? "격려 문장." : "격려 문장." },
  { slug: "cocktail-random-how", emoji: "🍹", title: isKo ? "칵테일 랜덤 사용법" : "Cocktail Random How-To", desc: isKo ? "칵테일 1개." : "칵테일 1개." },
  { slug: "dessert-roulette-how", emoji: "🍰", title: isKo ? "디저트 룰렛 사용법" : "Dessert Roulette How-To", desc: isKo ? "디저트 1개." : "디저트 1개." },
  { slug: "travel-destination-how", emoji: "✈️", title: isKo ? "여행지 랜덤 사용법" : "Travel Destination How-To", desc: isKo ? "여행지 1곳." : "여행지 1곳." },
  { slug: "weekend-trip-how", emoji: "🗺️", title: isKo ? "주말 여행 아이디어 사용법" : "Weekend Trip How-To", desc: isKo ? "주말 여행 1가지." : "주말 여행 1가지." },
  { slug: "indoor-activity-how", emoji: "🏠", title: isKo ? "실내 활동 추천 사용법" : "Indoor Activity How-To", desc: isKo ? "실내 활동 1가지." : "실내 활동 1가지." },
  { slug: "outdoor-activity-how", emoji: "🌳", title: isKo ? "야외 활동 추천 사용법" : "Outdoor Activity How-To", desc: isKo ? "야외 활동 1가지." : "야외 활동 1가지." },
  { slug: "rainy-day-how", emoji: "🌧️", title: isKo ? "비오는 날 할 일 사용법" : "Rainy Day How-To", desc: isKo ? "비 오는 날 활동." : "비 오는 날 활동." },
  { slug: "playlist-mood-how", emoji: "🎵", title: isKo ? "플레이리스트 무드 사용법" : "Playlist Mood How-To", desc: isKo ? "무드 1가지." : "무드 1가지." },
  { slug: "study-tip-how", emoji: "📚", title: isKo ? "공부 팁 한줄 사용법" : "Study Tip How-To", desc: isKo ? "공부 팁." : "공부 팁." },
  { slug: "sleep-tip-how", emoji: "😴", title: isKo ? "수면 팁 한줄 사용법" : "Sleep Tip How-To", desc: isKo ? "수면 팁." : "수면 팁." },
  { slug: "focus-tip-how", emoji: "🎯", title: isKo ? "집중 팁 한줄 사용법" : "Focus Tip How-To", desc: isKo ? "집중 팁." : "집중 팁." },
  { slug: "random-act-kindness-how", emoji: "💝", title: isKo ? "랜덤 친절 행동 사용법" : "Random Act Kindness How-To", desc: isKo ? "친절한 행동 1가지." : "친절한 행동 1가지." },
  { slug: "self-care-idea-how", emoji: "🛁", title: isKo ? "셀프케어 아이디어 사용법" : "Self Care Idea How-To", desc: isKo ? "셀프케어 1가지." : "셀프케어 1가지." },
  { slug: "gratitude-daily-how", emoji: "🙏", title: isKo ? "오늘 감사할 것 사용법" : "Gratitude Daily How-To", desc: isKo ? "감사할 대상 1가지." : "감사할 대상 1가지." },
  { slug: "letter-to-self-how", emoji: "✉️", title: isKo ? "미래의 나에게 사용법" : "Letter To Self How-To", desc: isKo ? "한 줄 메시지." : "한 줄 메시지." },
  { slug: "enneagram-random-how", emoji: "9️⃣", title: isKo ? "에니어그램 랜덤 사용법" : "Enneagram Random How-To", desc: isKo ? "1~9번 중 1개." : "1~9번 중 1개." },
  { slug: "love-language-how", emoji: "💕", title: isKo ? "사랑의 언어 랜덤 사용법" : "Love Language How-To", desc: isKo ? "사랑의 언어 1가지." : "사랑의 언어 1가지." },
  { slug: "spirit-animal-how", emoji: "🦊", title: isKo ? "스피릿 애니멀 사용법" : "Spirit Animal How-To", desc: isKo ? "동물 1마리." : "동물 1마리." },
  { slug: "hogwarts-house-how", emoji: "⚡", title: isKo ? "호그와트 기숙사 사용법" : "Hogwarts House How-To", desc: isKo ? "기숙사 1개." : "기숙사 1개." },
  { slug: "harry-potter-random-how", emoji: "🪄", title: isKo ? "해리포터 랜덤 사용법" : "Harry Potter Random How-To", desc: isKo ? "캐릭터·아이템." : "캐릭터·아이템." },
  { slug: "kdrama-pick-how", emoji: "📺", title: isKo ? "드라마 추천 사용법" : "Kdrama Pick How-To", desc: isKo ? "장르 1개." : "장르 1개." },
  { slug: "anime-pick-how", emoji: "🎌", title: isKo ? "애니 추천 사용법" : "Anime Pick How-To", desc: isKo ? "장르 1개." : "장르 1개." },
  { slug: "podcast-genre-how", emoji: "🎙️", title: isKo ? "팟캐스트 장르 사용법" : "Podcast Genre How-To", desc: isKo ? "장르 1개." : "장르 1개." },
  { slug: "writing-prompt-how", emoji: "✍️", title: isKo ? "글쓰기 주제 사용법" : "Writing Prompt How-To", desc: isKo ? "주제 1개." : "주제 1개." },
  { slug: "drawing-prompt-how", emoji: "🖌️", title: isKo ? "그림 주제 사용법" : "Drawing Prompt How-To", desc: isKo ? "그림 주제 1개." : "그림 주제 1개." },
  { slug: "coding-project-idea-how", emoji: "💻", title: isKo ? "코딩 프로젝트 아이디어 사용법" : "Coding Project Idea How-To", desc: isKo ? "프로젝트 1개." : "프로젝트 1개." },
  { slug: "startup-idea-how", emoji: "🚀", title: isKo ? "스타트업 아이디어 사용법" : "Startup Idea How-To", desc: isKo ? "아이디어 1개." : "아이디어 1개." },
  { slug: "debate-topic-how", emoji: "🎤", title: isKo ? "토론 주제 사용법" : "Debate Topic How-To", desc: isKo ? "주제 1개." : "주제 1개." },
  { slug: "question-of-day-how", emoji: "❓", title: isKo ? "오늘의 질문 사용법" : "Question Of Day How-To", desc: isKo ? "질문 1개." : "질문 1개." },
  { slug: "poll-idea-how", emoji: "📊", title: isKo ? "투표/설문 아이디어 사용법" : "Poll Idea How-To", desc: isKo ? "설문 주제 1개." : "설문 주제 1개." },
  { slug: "rpg-class-how", emoji: "⚔️", title: isKo ? "RPG 클래스 랜덤 사용법" : "Rpg Class How-To", desc: isKo ? "클래스 1개." : "클래스 1개." },
  { slug: "character-trait-how", emoji: "🎭", title: isKo ? "캐릭터 성향 랜덤 사용법" : "Character Trait How-To", desc: isKo ? "성향 1개." : "성향 1개." },
  { slug: "baby-name-ko-how", emoji: "👶", title: isKo ? "아기 이름 (한글) 사용법" : "Baby Name Ko How-To", desc: isKo ? "이름 1개." : "이름 1개." },
  { slug: "wedding-vow-idea-how", emoji: "💒", title: isKo ? "결혼 서약 문구 사용법" : "Wedding Vow Idea How-To", desc: isKo ? "서약 한 줄." : "서약 한 줄." },
  { slug: "apology-msg-how", emoji: "😔", title: isKo ? "사과 메시지 랜덤 사용법" : "Apology Msg How-To", desc: isKo ? "사과 문장." : "사과 문장." },
  { slug: "thank-you-note-how", emoji: "💌", title: isKo ? "감사 메시지 랜덤 사용법" : "Thank You Note How-To", desc: isKo ? "감사 문장." : "감사 문장." },
  { slug: "random-recipe-how", emoji: "📖", title: isKo ? "요리 종류 랜덤 사용법" : "Random Recipe How-To", desc: isKo ? "요리 1가지." : "요리 1가지." },
  { slug: "random-exercise-how", emoji: "🏃", title: isKo ? "운동 종류 랜덤 사용법" : "Random Exercise How-To", desc: isKo ? "운동 1가지." : "운동 1가지." },
  { slug: "random-instrument-how", emoji: "🎸", title: isKo ? "악기 랜덤 사용법" : "Random Instrument How-To", desc: isKo ? "악기 1개." : "악기 1개." },
  { slug: "random-art-style-how", emoji: "🖼️", title: isKo ? "미술 스타일 랜덤 사용법" : "Random Art Style How-To", desc: isKo ? "스타일 1개." : "스타일 1개." },
  { slug: "random-plant-how", emoji: "🌱", title: isKo ? "식물 랜덤 사용법" : "Random Plant How-To", desc: isKo ? "식물 1개." : "식물 1개." },
  { slug: "random-flag-how", emoji: "🏳️", title: isKo ? "나라 국기 랜덤 사용법" : "Random Flag How-To", desc: isKo ? "나라 1개." : "나라 1개." },
  { slug: "omen-today-how", emoji: "🔮", title: isKo ? "오늘의 징조 (재미) 사용법" : "Omen Today How-To", desc: isKo ? "징조 한 줄." : "징조 한 줄." },
  { slug: "lucky-charm-how", emoji: "🍀", title: isKo ? "행운의 부적 사용법" : "Lucky Charm How-To", desc: isKo ? "부적 1개." : "부적 1개." },
  { slug: "zodiac-compat-how", emoji: "♈", title: isKo ? "별자리 궁합 사용법" : "Zodiac Compat How-To", desc: isKo ? "궁합 한 줄." : "궁합 한 줄." },
  { slug: "patronus-idea-how", emoji: "🦌", title: isKo ? "패트로누스 아이디어 사용법" : "Patronus Idea How-To", desc: isKo ? "동물 1마리." : "동물 1마리." },
  { slug: "marvel-hero-how", emoji: "🦸", title: isKo ? "마블 히어로 랜덤 사용법" : "Marvel Hero How-To", desc: isKo ? "히어로 1명." : "히어로 1명." },
  { slug: "disney-character-how", emoji: "🏰", title: isKo ? "디즈니 캐릭터 사용법" : "Disney Character How-To", desc: isKo ? "캐릭터 1명." : "캐릭터 1명." },
  { slug: "ghibli-character-how", emoji: "龙", title: isKo ? "지브리 캐릭터 사용법" : "Ghibli Character How-To", desc: isKo ? "캐릭터 1명." : "캐릭터 1명." },
  { slug: "netflix-pick-how", emoji: "📺", title: isKo ? "넷플릭스 추천 사용법" : "Netflix Pick How-To", desc: isKo ? "장르 1개." : "장르 1개." },
  { slug: "hashtag-random-how", emoji: "#️⃣", title: isKo ? "해시태그 랜덤 사용법" : "Hashtag Random How-To", desc: isKo ? "해시태그 3개." : "해시태그 3개." },
  { slug: "caption-idea-how", emoji: "📝", title: isKo ? "SNS 캡션 아이디어 사용법" : "Caption Idea How-To", desc: isKo ? "캡션 한 줄." : "캡션 한 줄." },
  { slug: "bio-idea-how", emoji: "👤", title: isKo ? "프로필 소개 아이디어 사용법" : "Bio Idea How-To", desc: isKo ? "소개 한 줄." : "소개 한 줄." },
  { slug: "content-idea-how", emoji: "💡", title: isKo ? "콘텐츠 아이디어 사용법" : "Content Idea How-To", desc: isKo ? "아이디어 1개." : "아이디어 1개." },
  { slug: "blog-topic-how", emoji: "📄", title: isKo ? "블로그 주제 사용법" : "Blog Topic How-To", desc: isKo ? "주제 1개." : "주제 1개." },
  { slug: "vlog-idea-how", emoji: "🎬", title: isKo ? "브이로그 아이디어 사용법" : "Vlog Idea How-To", desc: isKo ? "아이디어 1개." : "아이디어 1개." },
  { slug: "meeting-icebreaker-how", emoji: "🤝", title: isKo ? "회의 아이스브레이커 사용법" : "Meeting Icebreaker How-To", desc: isKo ? "질문 1개." : "질문 1개." },
  { slug: "interview-question-how", emoji: "📋", title: isKo ? "면접 질문 랜덤 사용법" : "Interview Question How-To", desc: isKo ? "질문 1개." : "질문 1개." },
  { slug: "salary-tip-how", emoji: "💰", title: isKo ? "연봉 협상 팁 사용법" : "Salary Tip How-To", desc: isKo ? "팁 한 줄." : "팁 한 줄." },
  { slug: "morning-routine-how", emoji: "🌅", title: isKo ? "아침 루틴 아이디어 사용법" : "Morning Routine How-To", desc: isKo ? "루틴 1가지." : "루틴 1가지." },
  { slug: "evening-routine-how", emoji: "🌙", title: isKo ? "저녁 루틴 아이디어 사용법" : "Evening Routine How-To", desc: isKo ? "루틴 1가지." : "루틴 1가지." },
  { slug: "habit-to-start-how", emoji: "✅", title: isKo ? "시작할 습관 사용법" : "Habit To Start How-To", desc: isKo ? "습관 1가지." : "습관 1가지." },
  { slug: "bucket-list-one-how", emoji: "📌", title: isKo ? "버킷리스트 1가지 사용법" : "Bucket List One How-To", desc: isKo ? "버킷리스트 1개." : "버킷리스트 1개." },
  { slug: "new-year-resolution-how", emoji: "🎆", title: isKo ? "새해 결심 아이디어 사용법" : "New Year Resolution How-To", desc: isKo ? "결심 1가지." : "결심 1가지." },
  { slug: "gift-under-50-how", emoji: "🎀", title: isKo ? "5만원 이하 선물 사용법" : "Gift Under 50 How-To", desc: isKo ? "선물 1개." : "선물 1개." },
  { slug: "holiday-idea-how", emoji: "🎄", title: isKo ? "기념일 아이디어 사용법" : "Holiday Idea How-To", desc: isKo ? "아이디어 1개." : "아이디어 1개." },
  { slug: "birthday-idea-how", emoji: "🎂", title: isKo ? "생일 아이디어 사용법" : "Birthday Idea How-To", desc: isKo ? "아이디어 1개." : "아이디어 1개." },
  { slug: "anniversary-idea-how", emoji: "💍", title: isKo ? "기념일 데이트 사용법" : "Anniversary Idea How-To", desc: isKo ? "데이트 1가지." : "데이트 1가지." },
  { slug: "random-emoji-story-how", emoji: "📖", title: isKo ? "이모지 스토리 사용법" : "Random Emoji Story How-To", desc: isKo ? "이모지 2~3개." : "이모지 2~3개." },
  { slug: "random-hex-how", emoji: "🎨", title: isKo ? "랜덤 HEX 색상 사용법" : "Random Hex How-To", desc: isKo ? "HEX 코드 1개." : "HEX 코드 1개." },
  { slug: "random-question-how", emoji: "❓", title: isKo ? "랜덤 질문 사용법" : "Random Question How-To", desc: isKo ? "질문 1개." : "질문 1개." },
  { slug: "option-roulette-how", emoji: "🎡", title: isKo ? "선택 룰렛 사용법" : "Option Roulette How-To", desc: isKo ? "A/B/C 중 하나." : "A/B/C 중 하나." },
  { slug: "choice-picker-how", emoji: "✋", title: isKo ? "고르기 도우미 사용법" : "Choice Picker How-To", desc: isKo ? "1 또는 2." : "1 또는 2." },
  { slug: "kind-message-how", emoji: "💝", title: isKo ? "따뜻한 한마디 사용법" : "Kind Message How-To", desc: isKo ? "한마디 1줄." : "한마디 1줄." },
  { slug: "joke-clean-how", emoji: "😄", title: isKo ? "청결한 농담 한줄 사용법" : "Joke Clean How-To", desc: isKo ? "농담 1줄." : "농담 1줄." },
  { slug: "test-001-how", emoji: "📋", title: isKo ? "스트레스 체크 1 사용법" : "스트레스 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-002-how", emoji: "💭", title: isKo ? "습관 진단 1 사용법" : "습관 진단 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-003-how", emoji: "🎯", title: isKo ? "관계 유형 1 사용법" : "관계 유형 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-004-how", emoji: "📊", title: isKo ? "커리어 성향 1 사용법" : "커리어 성향 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-005-how", emoji: "🔍", title: isKo ? "금융 지식 1 사용법" : "금융 지식 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-006-how", emoji: "💡", title: isKo ? "건강 점수 1 사용법" : "건강 점수 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-007-how", emoji: "❤️", title: isKo ? "수면 품질 1 사용법" : "수면 품질 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-008-how", emoji: "🧠", title: isKo ? "식습관 체크 1 사용법" : "식습관 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-009-how", emoji: "⚖️", title: isKo ? "운동 습관 1 사용법" : "운동 습관 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-010-how", emoji: "🌱", title: isKo ? "기분 진단 1 사용법" : "기분 진단 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-011-how", emoji: "⏰", title: isKo ? "자신감 테스트 1 사용법" : "자신감 테스트 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-012-how", emoji: "😴", title: isKo ? "창의성 체크 1 사용법" : "창의성 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-013-how", emoji: "🍽️", title: isKo ? "시간관리 1 사용법" : "시간관리 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-014-how", emoji: "🏃", title: isKo ? "소통 스타일 1 사용법" : "소통 스타일 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-015-how", emoji: "😊", title: isKo ? "번아웃 위험도 1 사용법" : "번아웃 위험도 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-016-how", emoji: "💪", title: isKo ? "일중독 체크 1 사용법" : "일중독 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-017-how", emoji: "🌈", title: isKo ? "우울감 체크 1 사용법" : "우울감 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-018-how", emoji: "📈", title: isKo ? "불안 수준 1 사용법" : "불안 수준 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-019-how", emoji: "🤝", title: isKo ? "자존감 테스트 1 사용법" : "자존감 테스트 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-020-how", emoji: "🧪", title: isKo ? "감정조절 1 사용법" : "감정조절 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-021-how", emoji: "📋", title: isKo ? "결단력 체크 1 사용법" : "결단력 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-022-how", emoji: "💭", title: isKo ? "리더십 스타일 1 사용법" : "리더십 스타일 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-023-how", emoji: "🎯", title: isKo ? "팀워크 성향 1 사용법" : "팀워크 성향 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-024-how", emoji: "📊", title: isKo ? "갈등해결 1 사용법" : "갈등해결 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-025-how", emoji: "🔍", title: isKo ? "재무 성향 1 사용법" : "재무 성향 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-026-how", emoji: "💡", title: isKo ? "절약 지수 1 사용법" : "절약 지수 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-027-how", emoji: "❤️", title: isKo ? "투자 성향 1 사용법" : "투자 성향 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-028-how", emoji: "🧠", title: isKo ? "생활만족도 1 사용법" : "생활만족도 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-029-how", emoji: "⚖️", title: isKo ? "워라밸 체크 1 사용법" : "워라밸 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-030-how", emoji: "🌱", title: isKo ? "목표의식 1 사용법" : "목표의식 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-031-how", emoji: "⏰", title: isKo ? "학습 스타일 1 사용법" : "학습 스타일 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-032-how", emoji: "😴", title: isKo ? "집중력 체크 1 사용법" : "집중력 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-033-how", emoji: "🍽️", title: isKo ? "에너지 레벨 1 사용법" : "에너지 레벨 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-034-how", emoji: "🏃", title: isKo ? "회복력 테스트 1 사용법" : "회복력 테스트 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-035-how", emoji: "😊", title: isKo ? "감사 성향 1 사용법" : "감사 성향 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-036-how", emoji: "💪", title: isKo ? "낙관성 체크 1 사용법" : "낙관성 체크 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-037-how", emoji: "🌈", title: isKo ? "호기심 수준 1 사용법" : "호기심 수준 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-038-how", emoji: "📈", title: isKo ? "도전 성향 1 사용법" : "도전 성향 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-039-how", emoji: "🤝", title: isKo ? "인내심 테스트 1 사용법" : "인내심 테스트 1 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-040-how", emoji: "🧪", title: isKo ? "스트레스 체크 2 사용법" : "스트레스 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-041-how", emoji: "📋", title: isKo ? "습관 진단 2 사용법" : "습관 진단 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-042-how", emoji: "💭", title: isKo ? "관계 유형 2 사용법" : "관계 유형 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-043-how", emoji: "🎯", title: isKo ? "커리어 성향 2 사용법" : "커리어 성향 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-044-how", emoji: "📊", title: isKo ? "금융 지식 2 사용법" : "금융 지식 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-045-how", emoji: "🔍", title: isKo ? "건강 점수 2 사용법" : "건강 점수 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-046-how", emoji: "💡", title: isKo ? "수면 품질 2 사용법" : "수면 품질 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-047-how", emoji: "❤️", title: isKo ? "식습관 체크 2 사용법" : "식습관 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-048-how", emoji: "🧠", title: isKo ? "운동 습관 2 사용법" : "운동 습관 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-049-how", emoji: "⚖️", title: isKo ? "기분 진단 2 사용법" : "기분 진단 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-050-how", emoji: "🌱", title: isKo ? "자신감 테스트 2 사용법" : "자신감 테스트 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-051-how", emoji: "⏰", title: isKo ? "창의성 체크 2 사용법" : "창의성 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-052-how", emoji: "😴", title: isKo ? "시간관리 2 사용법" : "시간관리 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-053-how", emoji: "🍽️", title: isKo ? "소통 스타일 2 사용법" : "소통 스타일 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-054-how", emoji: "🏃", title: isKo ? "번아웃 위험도 2 사용법" : "번아웃 위험도 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-055-how", emoji: "😊", title: isKo ? "일중독 체크 2 사용법" : "일중독 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-056-how", emoji: "💪", title: isKo ? "우울감 체크 2 사용법" : "우울감 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-057-how", emoji: "🌈", title: isKo ? "불안 수준 2 사용법" : "불안 수준 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-058-how", emoji: "📈", title: isKo ? "자존감 테스트 2 사용법" : "자존감 테스트 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-059-how", emoji: "🤝", title: isKo ? "감정조절 2 사용법" : "감정조절 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-060-how", emoji: "🧪", title: isKo ? "결단력 체크 2 사용법" : "결단력 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-061-how", emoji: "📋", title: isKo ? "리더십 스타일 2 사용법" : "리더십 스타일 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-062-how", emoji: "💭", title: isKo ? "팀워크 성향 2 사용법" : "팀워크 성향 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-063-how", emoji: "🎯", title: isKo ? "갈등해결 2 사용법" : "갈등해결 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-064-how", emoji: "📊", title: isKo ? "재무 성향 2 사용법" : "재무 성향 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-065-how", emoji: "🔍", title: isKo ? "절약 지수 2 사용법" : "절약 지수 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-066-how", emoji: "💡", title: isKo ? "투자 성향 2 사용법" : "투자 성향 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-067-how", emoji: "❤️", title: isKo ? "생활만족도 2 사용법" : "생활만족도 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-068-how", emoji: "🧠", title: isKo ? "워라밸 체크 2 사용법" : "워라밸 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-069-how", emoji: "⚖️", title: isKo ? "목표의식 2 사용법" : "목표의식 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-070-how", emoji: "🌱", title: isKo ? "학습 스타일 2 사용법" : "학습 스타일 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-071-how", emoji: "⏰", title: isKo ? "집중력 체크 2 사용법" : "집중력 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-072-how", emoji: "😴", title: isKo ? "에너지 레벨 2 사용법" : "에너지 레벨 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-073-how", emoji: "🍽️", title: isKo ? "회복력 테스트 2 사용법" : "회복력 테스트 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-074-how", emoji: "🏃", title: isKo ? "감사 성향 2 사용법" : "감사 성향 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-075-how", emoji: "😊", title: isKo ? "낙관성 체크 2 사용법" : "낙관성 체크 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-076-how", emoji: "💪", title: isKo ? "호기심 수준 2 사용법" : "호기심 수준 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-077-how", emoji: "🌈", title: isKo ? "도전 성향 2 사용법" : "도전 성향 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-078-how", emoji: "📈", title: isKo ? "인내심 테스트 2 사용법" : "인내심 테스트 2 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-079-how", emoji: "🤝", title: isKo ? "스트레스 체크 3 사용법" : "스트레스 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-080-how", emoji: "🧪", title: isKo ? "습관 진단 3 사용법" : "습관 진단 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-081-how", emoji: "📋", title: isKo ? "관계 유형 3 사용법" : "관계 유형 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-082-how", emoji: "💭", title: isKo ? "커리어 성향 3 사용법" : "커리어 성향 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-083-how", emoji: "🎯", title: isKo ? "금융 지식 3 사용법" : "금융 지식 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-084-how", emoji: "📊", title: isKo ? "건강 점수 3 사용법" : "건강 점수 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-085-how", emoji: "🔍", title: isKo ? "수면 품질 3 사용법" : "수면 품질 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-086-how", emoji: "💡", title: isKo ? "식습관 체크 3 사용법" : "식습관 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-087-how", emoji: "❤️", title: isKo ? "운동 습관 3 사용법" : "운동 습관 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-088-how", emoji: "🧠", title: isKo ? "기분 진단 3 사용법" : "기분 진단 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-089-how", emoji: "⚖️", title: isKo ? "자신감 테스트 3 사용법" : "자신감 테스트 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-090-how", emoji: "🌱", title: isKo ? "창의성 체크 3 사용법" : "창의성 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-091-how", emoji: "⏰", title: isKo ? "시간관리 3 사용법" : "시간관리 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-092-how", emoji: "😴", title: isKo ? "소통 스타일 3 사용법" : "소통 스타일 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-093-how", emoji: "🍽️", title: isKo ? "번아웃 위험도 3 사용법" : "번아웃 위험도 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-094-how", emoji: "🏃", title: isKo ? "일중독 체크 3 사용법" : "일중독 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-095-how", emoji: "😊", title: isKo ? "우울감 체크 3 사용법" : "우울감 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-096-how", emoji: "💪", title: isKo ? "불안 수준 3 사용법" : "불안 수준 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-097-how", emoji: "🌈", title: isKo ? "자존감 테스트 3 사용법" : "자존감 테스트 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-098-how", emoji: "📈", title: isKo ? "감정조절 3 사용법" : "감정조절 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-099-how", emoji: "🤝", title: isKo ? "결단력 체크 3 사용법" : "결단력 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-100-how", emoji: "🧪", title: isKo ? "리더십 스타일 3 사용법" : "리더십 스타일 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-101-how", emoji: "📋", title: isKo ? "팀워크 성향 3 사용법" : "팀워크 성향 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-102-how", emoji: "💭", title: isKo ? "갈등해결 3 사용법" : "갈등해결 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-103-how", emoji: "🎯", title: isKo ? "재무 성향 3 사용법" : "재무 성향 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-104-how", emoji: "📊", title: isKo ? "절약 지수 3 사용법" : "절약 지수 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-105-how", emoji: "🔍", title: isKo ? "투자 성향 3 사용법" : "투자 성향 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-106-how", emoji: "💡", title: isKo ? "생활만족도 3 사용법" : "생활만족도 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-107-how", emoji: "❤️", title: isKo ? "워라밸 체크 3 사용법" : "워라밸 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-108-how", emoji: "🧠", title: isKo ? "목표의식 3 사용법" : "목표의식 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-109-how", emoji: "⚖️", title: isKo ? "학습 스타일 3 사용법" : "학습 스타일 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-110-how", emoji: "🌱", title: isKo ? "집중력 체크 3 사용법" : "집중력 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-111-how", emoji: "⏰", title: isKo ? "에너지 레벨 3 사용법" : "에너지 레벨 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-112-how", emoji: "😴", title: isKo ? "회복력 테스트 3 사용법" : "회복력 테스트 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-113-how", emoji: "🍽️", title: isKo ? "감사 성향 3 사용법" : "감사 성향 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-114-how", emoji: "🏃", title: isKo ? "낙관성 체크 3 사용법" : "낙관성 체크 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-115-how", emoji: "😊", title: isKo ? "호기심 수준 3 사용법" : "호기심 수준 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-116-how", emoji: "💪", title: isKo ? "도전 성향 3 사용법" : "도전 성향 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-117-how", emoji: "🌈", title: isKo ? "인내심 테스트 3 사용법" : "인내심 테스트 3 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-118-how", emoji: "📈", title: isKo ? "스트레스 체크 4 사용법" : "스트레스 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-119-how", emoji: "🤝", title: isKo ? "습관 진단 4 사용법" : "습관 진단 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-120-how", emoji: "🧪", title: isKo ? "관계 유형 4 사용법" : "관계 유형 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-121-how", emoji: "📋", title: isKo ? "커리어 성향 4 사용법" : "커리어 성향 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-122-how", emoji: "💭", title: isKo ? "금융 지식 4 사용법" : "금융 지식 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-123-how", emoji: "🎯", title: isKo ? "건강 점수 4 사용법" : "건강 점수 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-124-how", emoji: "📊", title: isKo ? "수면 품질 4 사용법" : "수면 품질 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-125-how", emoji: "🔍", title: isKo ? "식습관 체크 4 사용법" : "식습관 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-126-how", emoji: "💡", title: isKo ? "운동 습관 4 사용법" : "운동 습관 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-127-how", emoji: "❤️", title: isKo ? "기분 진단 4 사용법" : "기분 진단 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-128-how", emoji: "🧠", title: isKo ? "자신감 테스트 4 사용법" : "자신감 테스트 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-129-how", emoji: "⚖️", title: isKo ? "창의성 체크 4 사용법" : "창의성 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-130-how", emoji: "🌱", title: isKo ? "시간관리 4 사용법" : "시간관리 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-131-how", emoji: "⏰", title: isKo ? "소통 스타일 4 사용법" : "소통 스타일 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-132-how", emoji: "😴", title: isKo ? "번아웃 위험도 4 사용법" : "번아웃 위험도 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-133-how", emoji: "🍽️", title: isKo ? "일중독 체크 4 사용법" : "일중독 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-134-how", emoji: "🏃", title: isKo ? "우울감 체크 4 사용법" : "우울감 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-135-how", emoji: "😊", title: isKo ? "불안 수준 4 사용법" : "불안 수준 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-136-how", emoji: "💪", title: isKo ? "자존감 테스트 4 사용법" : "자존감 테스트 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-137-how", emoji: "🌈", title: isKo ? "감정조절 4 사용법" : "감정조절 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-138-how", emoji: "📈", title: isKo ? "결단력 체크 4 사용법" : "결단력 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-139-how", emoji: "🤝", title: isKo ? "리더십 스타일 4 사용법" : "리더십 스타일 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-140-how", emoji: "🧪", title: isKo ? "팀워크 성향 4 사용법" : "팀워크 성향 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-141-how", emoji: "📋", title: isKo ? "갈등해결 4 사용법" : "갈등해결 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-142-how", emoji: "💭", title: isKo ? "재무 성향 4 사용법" : "재무 성향 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-143-how", emoji: "🎯", title: isKo ? "절약 지수 4 사용법" : "절약 지수 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-144-how", emoji: "📊", title: isKo ? "투자 성향 4 사용법" : "투자 성향 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-145-how", emoji: "🔍", title: isKo ? "생활만족도 4 사용법" : "생활만족도 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-146-how", emoji: "💡", title: isKo ? "워라밸 체크 4 사용법" : "워라밸 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-147-how", emoji: "❤️", title: isKo ? "목표의식 4 사용법" : "목표의식 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-148-how", emoji: "🧠", title: isKo ? "학습 스타일 4 사용법" : "학습 스타일 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-149-how", emoji: "⚖️", title: isKo ? "집중력 체크 4 사용법" : "집중력 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-150-how", emoji: "🌱", title: isKo ? "에너지 레벨 4 사용법" : "에너지 레벨 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-151-how", emoji: "⏰", title: isKo ? "회복력 테스트 4 사용법" : "회복력 테스트 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-152-how", emoji: "😴", title: isKo ? "감사 성향 4 사용법" : "감사 성향 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-153-how", emoji: "🍽️", title: isKo ? "낙관성 체크 4 사용법" : "낙관성 체크 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-154-how", emoji: "🏃", title: isKo ? "호기심 수준 4 사용법" : "호기심 수준 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-155-how", emoji: "😊", title: isKo ? "도전 성향 4 사용법" : "도전 성향 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-156-how", emoji: "💪", title: isKo ? "인내심 테스트 4 사용법" : "인내심 테스트 4 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-157-how", emoji: "🌈", title: isKo ? "스트레스 체크 5 사용법" : "스트레스 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-158-how", emoji: "📈", title: isKo ? "습관 진단 5 사용법" : "습관 진단 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-159-how", emoji: "🤝", title: isKo ? "관계 유형 5 사용법" : "관계 유형 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-160-how", emoji: "🧪", title: isKo ? "커리어 성향 5 사용법" : "커리어 성향 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-161-how", emoji: "📋", title: isKo ? "금융 지식 5 사용법" : "금융 지식 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-162-how", emoji: "💭", title: isKo ? "건강 점수 5 사용법" : "건강 점수 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-163-how", emoji: "🎯", title: isKo ? "수면 품질 5 사용법" : "수면 품질 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-164-how", emoji: "📊", title: isKo ? "식습관 체크 5 사용법" : "식습관 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-165-how", emoji: "🔍", title: isKo ? "운동 습관 5 사용법" : "운동 습관 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-166-how", emoji: "💡", title: isKo ? "기분 진단 5 사용법" : "기분 진단 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-167-how", emoji: "❤️", title: isKo ? "자신감 테스트 5 사용법" : "자신감 테스트 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-168-how", emoji: "🧠", title: isKo ? "창의성 체크 5 사용법" : "창의성 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-169-how", emoji: "⚖️", title: isKo ? "시간관리 5 사용법" : "시간관리 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-170-how", emoji: "🌱", title: isKo ? "소통 스타일 5 사용법" : "소통 스타일 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-171-how", emoji: "⏰", title: isKo ? "번아웃 위험도 5 사용법" : "번아웃 위험도 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-172-how", emoji: "😴", title: isKo ? "일중독 체크 5 사용법" : "일중독 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-173-how", emoji: "🍽️", title: isKo ? "우울감 체크 5 사용법" : "우울감 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-174-how", emoji: "🏃", title: isKo ? "불안 수준 5 사용법" : "불안 수준 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-175-how", emoji: "😊", title: isKo ? "자존감 테스트 5 사용법" : "자존감 테스트 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-176-how", emoji: "💪", title: isKo ? "감정조절 5 사용법" : "감정조절 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-177-how", emoji: "🌈", title: isKo ? "결단력 체크 5 사용법" : "결단력 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-178-how", emoji: "📈", title: isKo ? "리더십 스타일 5 사용법" : "리더십 스타일 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-179-how", emoji: "🤝", title: isKo ? "팀워크 성향 5 사용법" : "팀워크 성향 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-180-how", emoji: "🧪", title: isKo ? "갈등해결 5 사용법" : "갈등해결 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-181-how", emoji: "📋", title: isKo ? "재무 성향 5 사용법" : "재무 성향 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-182-how", emoji: "💭", title: isKo ? "절약 지수 5 사용법" : "절약 지수 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-183-how", emoji: "🎯", title: isKo ? "투자 성향 5 사용법" : "투자 성향 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-184-how", emoji: "📊", title: isKo ? "생활만족도 5 사용법" : "생활만족도 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-185-how", emoji: "🔍", title: isKo ? "워라밸 체크 5 사용법" : "워라밸 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-186-how", emoji: "💡", title: isKo ? "목표의식 5 사용법" : "목표의식 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-187-how", emoji: "❤️", title: isKo ? "학습 스타일 5 사용법" : "학습 스타일 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-188-how", emoji: "🧠", title: isKo ? "집중력 체크 5 사용법" : "집중력 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-189-how", emoji: "⚖️", title: isKo ? "에너지 레벨 5 사용법" : "에너지 레벨 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-190-how", emoji: "🌱", title: isKo ? "회복력 테스트 5 사용법" : "회복력 테스트 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-191-how", emoji: "⏰", title: isKo ? "감사 성향 5 사용법" : "감사 성향 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-192-how", emoji: "😴", title: isKo ? "낙관성 체크 5 사용법" : "낙관성 체크 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-193-how", emoji: "🍽️", title: isKo ? "호기심 수준 5 사용법" : "호기심 수준 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-194-how", emoji: "🏃", title: isKo ? "도전 성향 5 사용법" : "도전 성향 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-195-how", emoji: "😊", title: isKo ? "인내심 테스트 5 사용법" : "인내심 테스트 5 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-196-how", emoji: "💪", title: isKo ? "스트레스 체크 6 사용법" : "스트레스 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-197-how", emoji: "🌈", title: isKo ? "습관 진단 6 사용법" : "습관 진단 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-198-how", emoji: "📈", title: isKo ? "관계 유형 6 사용법" : "관계 유형 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-199-how", emoji: "🤝", title: isKo ? "커리어 성향 6 사용법" : "커리어 성향 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-200-how", emoji: "🧪", title: isKo ? "금융 지식 6 사용법" : "금융 지식 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-201-how", emoji: "📋", title: isKo ? "건강 점수 6 사용법" : "건강 점수 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-202-how", emoji: "💭", title: isKo ? "수면 품질 6 사용법" : "수면 품질 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-203-how", emoji: "🎯", title: isKo ? "식습관 체크 6 사용법" : "식습관 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-204-how", emoji: "📊", title: isKo ? "운동 습관 6 사용법" : "운동 습관 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-205-how", emoji: "🔍", title: isKo ? "기분 진단 6 사용법" : "기분 진단 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-206-how", emoji: "💡", title: isKo ? "자신감 테스트 6 사용법" : "자신감 테스트 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-207-how", emoji: "❤️", title: isKo ? "창의성 체크 6 사용법" : "창의성 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-208-how", emoji: "🧠", title: isKo ? "시간관리 6 사용법" : "시간관리 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-209-how", emoji: "⚖️", title: isKo ? "소통 스타일 6 사용법" : "소통 스타일 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-210-how", emoji: "🌱", title: isKo ? "번아웃 위험도 6 사용법" : "번아웃 위험도 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-211-how", emoji: "⏰", title: isKo ? "일중독 체크 6 사용법" : "일중독 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-212-how", emoji: "😴", title: isKo ? "우울감 체크 6 사용법" : "우울감 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-213-how", emoji: "🍽️", title: isKo ? "불안 수준 6 사용법" : "불안 수준 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-214-how", emoji: "🏃", title: isKo ? "자존감 테스트 6 사용법" : "자존감 테스트 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-215-how", emoji: "😊", title: isKo ? "감정조절 6 사용법" : "감정조절 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-216-how", emoji: "💪", title: isKo ? "결단력 체크 6 사용법" : "결단력 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-217-how", emoji: "🌈", title: isKo ? "리더십 스타일 6 사용법" : "리더십 스타일 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-218-how", emoji: "📈", title: isKo ? "팀워크 성향 6 사용법" : "팀워크 성향 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-219-how", emoji: "🤝", title: isKo ? "갈등해결 6 사용법" : "갈등해결 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-220-how", emoji: "🧪", title: isKo ? "재무 성향 6 사용법" : "재무 성향 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-221-how", emoji: "📋", title: isKo ? "절약 지수 6 사용법" : "절약 지수 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-222-how", emoji: "💭", title: isKo ? "투자 성향 6 사용법" : "투자 성향 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-223-how", emoji: "🎯", title: isKo ? "생활만족도 6 사용법" : "생활만족도 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-224-how", emoji: "📊", title: isKo ? "워라밸 체크 6 사용법" : "워라밸 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-225-how", emoji: "🔍", title: isKo ? "목표의식 6 사용법" : "목표의식 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-226-how", emoji: "💡", title: isKo ? "학습 스타일 6 사용법" : "학습 스타일 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-227-how", emoji: "❤️", title: isKo ? "집중력 체크 6 사용법" : "집중력 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-228-how", emoji: "🧠", title: isKo ? "에너지 레벨 6 사용법" : "에너지 레벨 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-229-how", emoji: "⚖️", title: isKo ? "회복력 테스트 6 사용법" : "회복력 테스트 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-230-how", emoji: "🌱", title: isKo ? "감사 성향 6 사용법" : "감사 성향 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-231-how", emoji: "⏰", title: isKo ? "낙관성 체크 6 사용법" : "낙관성 체크 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-232-how", emoji: "😴", title: isKo ? "호기심 수준 6 사용법" : "호기심 수준 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-233-how", emoji: "🍽️", title: isKo ? "도전 성향 6 사용법" : "도전 성향 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-234-how", emoji: "🏃", title: isKo ? "인내심 테스트 6 사용법" : "인내심 테스트 6 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-235-how", emoji: "😊", title: isKo ? "스트레스 체크 7 사용법" : "스트레스 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-236-how", emoji: "💪", title: isKo ? "습관 진단 7 사용법" : "습관 진단 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-237-how", emoji: "🌈", title: isKo ? "관계 유형 7 사용법" : "관계 유형 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-238-how", emoji: "📈", title: isKo ? "커리어 성향 7 사용법" : "커리어 성향 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-239-how", emoji: "🤝", title: isKo ? "금융 지식 7 사용법" : "금융 지식 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-240-how", emoji: "🧪", title: isKo ? "건강 점수 7 사용법" : "건강 점수 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-241-how", emoji: "📋", title: isKo ? "수면 품질 7 사용법" : "수면 품질 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-242-how", emoji: "💭", title: isKo ? "식습관 체크 7 사용법" : "식습관 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-243-how", emoji: "🎯", title: isKo ? "운동 습관 7 사용법" : "운동 습관 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-244-how", emoji: "📊", title: isKo ? "기분 진단 7 사용법" : "기분 진단 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-245-how", emoji: "🔍", title: isKo ? "자신감 테스트 7 사용법" : "자신감 테스트 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-246-how", emoji: "💡", title: isKo ? "창의성 체크 7 사용법" : "창의성 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-247-how", emoji: "❤️", title: isKo ? "시간관리 7 사용법" : "시간관리 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-248-how", emoji: "🧠", title: isKo ? "소통 스타일 7 사용법" : "소통 스타일 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-249-how", emoji: "⚖️", title: isKo ? "번아웃 위험도 7 사용법" : "번아웃 위험도 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-250-how", emoji: "🌱", title: isKo ? "일중독 체크 7 사용법" : "일중독 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-251-how", emoji: "⏰", title: isKo ? "우울감 체크 7 사용법" : "우울감 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-252-how", emoji: "😴", title: isKo ? "불안 수준 7 사용법" : "불안 수준 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-253-how", emoji: "🍽️", title: isKo ? "자존감 테스트 7 사용법" : "자존감 테스트 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-254-how", emoji: "🏃", title: isKo ? "감정조절 7 사용법" : "감정조절 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-255-how", emoji: "😊", title: isKo ? "결단력 체크 7 사용법" : "결단력 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-256-how", emoji: "💪", title: isKo ? "리더십 스타일 7 사용법" : "리더십 스타일 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-257-how", emoji: "🌈", title: isKo ? "팀워크 성향 7 사용법" : "팀워크 성향 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-258-how", emoji: "📈", title: isKo ? "갈등해결 7 사용법" : "갈등해결 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-259-how", emoji: "🤝", title: isKo ? "재무 성향 7 사용법" : "재무 성향 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-260-how", emoji: "🧪", title: isKo ? "절약 지수 7 사용법" : "절약 지수 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-261-how", emoji: "📋", title: isKo ? "투자 성향 7 사용법" : "투자 성향 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-262-how", emoji: "💭", title: isKo ? "생활만족도 7 사용법" : "생활만족도 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-263-how", emoji: "🎯", title: isKo ? "워라밸 체크 7 사용법" : "워라밸 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-264-how", emoji: "📊", title: isKo ? "목표의식 7 사용법" : "목표의식 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-265-how", emoji: "🔍", title: isKo ? "학습 스타일 7 사용법" : "학습 스타일 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-266-how", emoji: "💡", title: isKo ? "집중력 체크 7 사용법" : "집중력 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-267-how", emoji: "❤️", title: isKo ? "에너지 레벨 7 사용법" : "에너지 레벨 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-268-how", emoji: "🧠", title: isKo ? "회복력 테스트 7 사용법" : "회복력 테스트 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-269-how", emoji: "⚖️", title: isKo ? "감사 성향 7 사용법" : "감사 성향 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-270-how", emoji: "🌱", title: isKo ? "낙관성 체크 7 사용법" : "낙관성 체크 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-271-how", emoji: "⏰", title: isKo ? "호기심 수준 7 사용법" : "호기심 수준 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-272-how", emoji: "😴", title: isKo ? "도전 성향 7 사용법" : "도전 성향 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-273-how", emoji: "🍽️", title: isKo ? "인내심 테스트 7 사용법" : "인내심 테스트 7 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-274-how", emoji: "🏃", title: isKo ? "스트레스 체크 8 사용법" : "스트레스 체크 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-275-how", emoji: "😊", title: isKo ? "습관 진단 8 사용법" : "습관 진단 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-276-how", emoji: "💪", title: isKo ? "관계 유형 8 사용법" : "관계 유형 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-277-how", emoji: "🌈", title: isKo ? "커리어 성향 8 사용법" : "커리어 성향 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-278-how", emoji: "📈", title: isKo ? "금융 지식 8 사용법" : "금융 지식 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-279-how", emoji: "🤝", title: isKo ? "건강 점수 8 사용법" : "건강 점수 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-280-how", emoji: "🧪", title: isKo ? "수면 품질 8 사용법" : "수면 품질 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-281-how", emoji: "📋", title: isKo ? "식습관 체크 8 사용법" : "식습관 체크 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-282-how", emoji: "💭", title: isKo ? "운동 습관 8 사용법" : "운동 습관 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-283-how", emoji: "🎯", title: isKo ? "기분 진단 8 사용법" : "기분 진단 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-284-how", emoji: "📊", title: isKo ? "자신감 테스트 8 사용법" : "자신감 테스트 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-285-how", emoji: "🔍", title: isKo ? "창의성 체크 8 사용법" : "창의성 체크 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-286-how", emoji: "💡", title: isKo ? "시간관리 8 사용법" : "시간관리 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-287-how", emoji: "❤️", title: isKo ? "소통 스타일 8 사용법" : "소통 스타일 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-288-how", emoji: "🧠", title: isKo ? "번아웃 위험도 8 사용법" : "번아웃 위험도 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-289-how", emoji: "⚖️", title: isKo ? "일중독 체크 8 사용법" : "일중독 체크 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-290-how", emoji: "🌱", title: isKo ? "우울감 체크 8 사용법" : "우울감 체크 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-291-how", emoji: "⏰", title: isKo ? "불안 수준 8 사용법" : "불안 수준 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-292-how", emoji: "😴", title: isKo ? "자존감 테스트 8 사용법" : "자존감 테스트 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-293-how", emoji: "🍽️", title: isKo ? "감정조절 8 사용법" : "감정조절 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-294-how", emoji: "🏃", title: isKo ? "결단력 체크 8 사용법" : "결단력 체크 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-295-how", emoji: "😊", title: isKo ? "리더십 스타일 8 사용법" : "리더십 스타일 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-296-how", emoji: "💪", title: isKo ? "팀워크 성향 8 사용법" : "팀워크 성향 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-297-how", emoji: "🌈", title: isKo ? "갈등해결 8 사용법" : "갈등해결 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-298-how", emoji: "📈", title: isKo ? "재무 성향 8 사용법" : "재무 성향 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-299-how", emoji: "🤝", title: isKo ? "절약 지수 8 사용법" : "절약 지수 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "test-300-how", emoji: "🧪", title: isKo ? "투자 성향 8 사용법" : "투자 성향 8 How-To", desc: isKo ? "간단 체크." : "간단 체크." },
  { slug: "game-001-how", emoji: "🎯", title: isKo ? "간식 룰렛 1 사용법" : "간식 룰렛 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-002-how", emoji: "🍿", title: isKo ? "영화 장르 1 사용법" : "영화 장르 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-003-how", emoji: "🎵", title: isKo ? "노래 추천 1 사용법" : "노래 추천 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-004-how", emoji: "📖", title: isKo ? "책 테마 1 사용법" : "책 테마 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-005-how", emoji: "🎮", title: isKo ? "취미 뽑기 1 사용법" : "취미 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-006-how", emoji: "✈️", title: isKo ? "주말 룰렛 1 사용법" : "주말 룰렛 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-007-how", emoji: "🍹", title: isKo ? "여행지 뽑기 1 사용법" : "여행지 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-008-how", emoji: "🍰", title: isKo ? "음료 룰렛 1 사용법" : "음료 룰렛 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-009-how", emoji: "⚽", title: isKo ? "디저트 룰렛 1 사용법" : "디저트 룰렛 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-010-how", emoji: "🎬", title: isKo ? "운동 뽑기 1 사용법" : "운동 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-011-how", emoji: "🛍️", title: isKo ? "드라마 추천 1 사용법" : "드라마 추천 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-012-how", emoji: "🎲", title: isKo ? "쇼핑 카테고리 1 사용법" : "쇼핑 카테고리 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-013-how", emoji: "🎯", title: isKo ? "점심 룰렛 1 사용법" : "점심 룰렛 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-014-how", emoji: "🍿", title: isKo ? "저녁 메뉴 1 사용법" : "저녁 메뉴 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-015-how", emoji: "🎵", title: isKo ? "카페 메뉴 1 사용법" : "카페 메뉴 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-016-how", emoji: "📖", title: isKo ? "과일 뽑기 1 사용법" : "과일 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-017-how", emoji: "🎮", title: isKo ? "색상 뽑기 1 사용법" : "색상 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-018-how", emoji: "✈️", title: isKo ? "숫자 뽑기 1 사용법" : "숫자 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-019-how", emoji: "🍹", title: isKo ? "요일 뽑기 1 사용법" : "요일 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-020-how", emoji: "🍰", title: isKo ? "계절 뽑기 1 사용법" : "계절 뽑기 1 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-021-how", emoji: "⚽", title: isKo ? "간식 룰렛 2 사용법" : "간식 룰렛 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-022-how", emoji: "🎬", title: isKo ? "영화 장르 2 사용법" : "영화 장르 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-023-how", emoji: "🛍️", title: isKo ? "노래 추천 2 사용법" : "노래 추천 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-024-how", emoji: "🎲", title: isKo ? "책 테마 2 사용법" : "책 테마 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-025-how", emoji: "🎯", title: isKo ? "취미 뽑기 2 사용법" : "취미 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-026-how", emoji: "🍿", title: isKo ? "주말 룰렛 2 사용법" : "주말 룰렛 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-027-how", emoji: "🎵", title: isKo ? "여행지 뽑기 2 사용법" : "여행지 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-028-how", emoji: "📖", title: isKo ? "음료 룰렛 2 사용법" : "음료 룰렛 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-029-how", emoji: "🎮", title: isKo ? "디저트 룰렛 2 사용법" : "디저트 룰렛 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-030-how", emoji: "✈️", title: isKo ? "운동 뽑기 2 사용법" : "운동 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-031-how", emoji: "🍹", title: isKo ? "드라마 추천 2 사용법" : "드라마 추천 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-032-how", emoji: "🍰", title: isKo ? "쇼핑 카테고리 2 사용법" : "쇼핑 카테고리 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-033-how", emoji: "⚽", title: isKo ? "점심 룰렛 2 사용법" : "점심 룰렛 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-034-how", emoji: "🎬", title: isKo ? "저녁 메뉴 2 사용법" : "저녁 메뉴 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-035-how", emoji: "🛍️", title: isKo ? "카페 메뉴 2 사용법" : "카페 메뉴 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-036-how", emoji: "🎲", title: isKo ? "과일 뽑기 2 사용법" : "과일 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-037-how", emoji: "🎯", title: isKo ? "색상 뽑기 2 사용법" : "색상 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-038-how", emoji: "🍿", title: isKo ? "숫자 뽑기 2 사용법" : "숫자 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-039-how", emoji: "🎵", title: isKo ? "요일 뽑기 2 사용법" : "요일 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-040-how", emoji: "📖", title: isKo ? "계절 뽑기 2 사용법" : "계절 뽑기 2 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-041-how", emoji: "🎮", title: isKo ? "간식 룰렛 3 사용법" : "간식 룰렛 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-042-how", emoji: "✈️", title: isKo ? "영화 장르 3 사용법" : "영화 장르 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-043-how", emoji: "🍹", title: isKo ? "노래 추천 3 사용법" : "노래 추천 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-044-how", emoji: "🍰", title: isKo ? "책 테마 3 사용법" : "책 테마 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-045-how", emoji: "⚽", title: isKo ? "취미 뽑기 3 사용법" : "취미 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-046-how", emoji: "🎬", title: isKo ? "주말 룰렛 3 사용법" : "주말 룰렛 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-047-how", emoji: "🛍️", title: isKo ? "여행지 뽑기 3 사용법" : "여행지 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-048-how", emoji: "🎲", title: isKo ? "음료 룰렛 3 사용법" : "음료 룰렛 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-049-how", emoji: "🎯", title: isKo ? "디저트 룰렛 3 사용법" : "디저트 룰렛 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-050-how", emoji: "🍿", title: isKo ? "운동 뽑기 3 사용법" : "운동 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-051-how", emoji: "🎵", title: isKo ? "드라마 추천 3 사용법" : "드라마 추천 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-052-how", emoji: "📖", title: isKo ? "쇼핑 카테고리 3 사용법" : "쇼핑 카테고리 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-053-how", emoji: "🎮", title: isKo ? "점심 룰렛 3 사용법" : "점심 룰렛 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-054-how", emoji: "✈️", title: isKo ? "저녁 메뉴 3 사용법" : "저녁 메뉴 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-055-how", emoji: "🍹", title: isKo ? "카페 메뉴 3 사용법" : "카페 메뉴 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-056-how", emoji: "🍰", title: isKo ? "과일 뽑기 3 사용법" : "과일 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-057-how", emoji: "⚽", title: isKo ? "색상 뽑기 3 사용법" : "색상 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-058-how", emoji: "🎬", title: isKo ? "숫자 뽑기 3 사용법" : "숫자 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-059-how", emoji: "🛍️", title: isKo ? "요일 뽑기 3 사용법" : "요일 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-060-how", emoji: "🎲", title: isKo ? "계절 뽑기 3 사용법" : "계절 뽑기 3 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-061-how", emoji: "🎯", title: isKo ? "간식 룰렛 4 사용법" : "간식 룰렛 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-062-how", emoji: "🍿", title: isKo ? "영화 장르 4 사용법" : "영화 장르 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-063-how", emoji: "🎵", title: isKo ? "노래 추천 4 사용법" : "노래 추천 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-064-how", emoji: "📖", title: isKo ? "책 테마 4 사용법" : "책 테마 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-065-how", emoji: "🎮", title: isKo ? "취미 뽑기 4 사용법" : "취미 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-066-how", emoji: "✈️", title: isKo ? "주말 룰렛 4 사용법" : "주말 룰렛 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-067-how", emoji: "🍹", title: isKo ? "여행지 뽑기 4 사용법" : "여행지 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-068-how", emoji: "🍰", title: isKo ? "음료 룰렛 4 사용법" : "음료 룰렛 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-069-how", emoji: "⚽", title: isKo ? "디저트 룰렛 4 사용법" : "디저트 룰렛 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-070-how", emoji: "🎬", title: isKo ? "운동 뽑기 4 사용법" : "운동 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-071-how", emoji: "🛍️", title: isKo ? "드라마 추천 4 사용법" : "드라마 추천 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-072-how", emoji: "🎲", title: isKo ? "쇼핑 카테고리 4 사용법" : "쇼핑 카테고리 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-073-how", emoji: "🎯", title: isKo ? "점심 룰렛 4 사용법" : "점심 룰렛 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-074-how", emoji: "🍿", title: isKo ? "저녁 메뉴 4 사용법" : "저녁 메뉴 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-075-how", emoji: "🎵", title: isKo ? "카페 메뉴 4 사용법" : "카페 메뉴 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-076-how", emoji: "📖", title: isKo ? "과일 뽑기 4 사용법" : "과일 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-077-how", emoji: "🎮", title: isKo ? "색상 뽑기 4 사용법" : "색상 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-078-how", emoji: "✈️", title: isKo ? "숫자 뽑기 4 사용법" : "숫자 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-079-how", emoji: "🍹", title: isKo ? "요일 뽑기 4 사용법" : "요일 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-080-how", emoji: "🍰", title: isKo ? "계절 뽑기 4 사용법" : "계절 뽑기 4 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-081-how", emoji: "⚽", title: isKo ? "간식 룰렛 5 사용법" : "간식 룰렛 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-082-how", emoji: "🎬", title: isKo ? "영화 장르 5 사용법" : "영화 장르 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-083-how", emoji: "🛍️", title: isKo ? "노래 추천 5 사용법" : "노래 추천 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-084-how", emoji: "🎲", title: isKo ? "책 테마 5 사용법" : "책 테마 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-085-how", emoji: "🎯", title: isKo ? "취미 뽑기 5 사용법" : "취미 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-086-how", emoji: "🍿", title: isKo ? "주말 룰렛 5 사용법" : "주말 룰렛 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-087-how", emoji: "🎵", title: isKo ? "여행지 뽑기 5 사용법" : "여행지 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-088-how", emoji: "📖", title: isKo ? "음료 룰렛 5 사용법" : "음료 룰렛 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-089-how", emoji: "🎮", title: isKo ? "디저트 룰렛 5 사용법" : "디저트 룰렛 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-090-how", emoji: "✈️", title: isKo ? "운동 뽑기 5 사용법" : "운동 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-091-how", emoji: "🍹", title: isKo ? "드라마 추천 5 사용법" : "드라마 추천 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-092-how", emoji: "🍰", title: isKo ? "쇼핑 카테고리 5 사용법" : "쇼핑 카테고리 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-093-how", emoji: "⚽", title: isKo ? "점심 룰렛 5 사용법" : "점심 룰렛 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-094-how", emoji: "🎬", title: isKo ? "저녁 메뉴 5 사용법" : "저녁 메뉴 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-095-how", emoji: "🛍️", title: isKo ? "카페 메뉴 5 사용법" : "카페 메뉴 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-096-how", emoji: "🎲", title: isKo ? "과일 뽑기 5 사용법" : "과일 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-097-how", emoji: "🎯", title: isKo ? "색상 뽑기 5 사용법" : "색상 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-098-how", emoji: "🍿", title: isKo ? "숫자 뽑기 5 사용법" : "숫자 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-099-how", emoji: "🎵", title: isKo ? "요일 뽑기 5 사용법" : "요일 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-100-how", emoji: "📖", title: isKo ? "계절 뽑기 5 사용법" : "계절 뽑기 5 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-101-how", emoji: "🎮", title: isKo ? "간식 룰렛 6 사용법" : "간식 룰렛 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-102-how", emoji: "✈️", title: isKo ? "영화 장르 6 사용법" : "영화 장르 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-103-how", emoji: "🍹", title: isKo ? "노래 추천 6 사용법" : "노래 추천 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-104-how", emoji: "🍰", title: isKo ? "책 테마 6 사용법" : "책 테마 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-105-how", emoji: "⚽", title: isKo ? "취미 뽑기 6 사용법" : "취미 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-106-how", emoji: "🎬", title: isKo ? "주말 룰렛 6 사용법" : "주말 룰렛 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-107-how", emoji: "🛍️", title: isKo ? "여행지 뽑기 6 사용법" : "여행지 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-108-how", emoji: "🎲", title: isKo ? "음료 룰렛 6 사용법" : "음료 룰렛 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-109-how", emoji: "🎯", title: isKo ? "디저트 룰렛 6 사용법" : "디저트 룰렛 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-110-how", emoji: "🍿", title: isKo ? "운동 뽑기 6 사용법" : "운동 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-111-how", emoji: "🎵", title: isKo ? "드라마 추천 6 사용법" : "드라마 추천 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-112-how", emoji: "📖", title: isKo ? "쇼핑 카테고리 6 사용법" : "쇼핑 카테고리 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-113-how", emoji: "🎮", title: isKo ? "점심 룰렛 6 사용법" : "점심 룰렛 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-114-how", emoji: "✈️", title: isKo ? "저녁 메뉴 6 사용법" : "저녁 메뉴 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-115-how", emoji: "🍹", title: isKo ? "카페 메뉴 6 사용법" : "카페 메뉴 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-116-how", emoji: "🍰", title: isKo ? "과일 뽑기 6 사용법" : "과일 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-117-how", emoji: "⚽", title: isKo ? "색상 뽑기 6 사용법" : "색상 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-118-how", emoji: "🎬", title: isKo ? "숫자 뽑기 6 사용법" : "숫자 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-119-how", emoji: "🛍️", title: isKo ? "요일 뽑기 6 사용법" : "요일 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  { slug: "game-120-how", emoji: "🎲", title: isKo ? "계절 뽑기 6 사용법" : "계절 뽑기 6 How-To", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기." },
  {
    slug: "today-well-done",
    emoji: "🌱",
    title: isKo ? "오늘, 잘했어 가이드" : "Today, Well Done Guide",
    desc: isKo ? "오늘의 성과를 한 줄로 요약하고 내일을 위한 작은 행동을 정하세요." : "Summarize today's wins in one line and set a small action for tomorrow.",
  },
  {
    slug: "today-todo",
    emoji: "✅",
    title: isKo ? "오늘의 할 일 가이드" : "Today's To-Do Guide",
    desc: isKo ? "중요한 작업을 포착하고 깔끔한 완료 체크로 하루를 마무리하세요." : "Capture focus tasks and wrap your day with clean completion checks.",
  },
  {
    slug: "daily-condition-check",
    emoji: "📝",
    title: isKo ? "일일 컨디션 체크 가이드" : "Daily Condition Check Guide",
    desc: isKo ? "5가지 빠른 체크로 컨디션을 한 줄로 요약하세요." : "Use five quick checks to summarize your condition in one line.",
  },
  {
    slug: "dream-diary",
    emoji: "💭",
    title: isKo ? "꿈 일기 가이드" : "Dream Diary Guide",
    desc: isKo ? "꿈을 로컬에 기록하고 태그로 정리하세요." : "Record dreams locally and organize them with tags.",
  },
  {
    slug: "rest-check",
    emoji: "🛋️",
    title: isKo ? "지금 쉬어야 할까? 가이드" : "Should I Rest Now? Guide",
    desc: isKo ? "짧은 설문으로 휴식 여부를 결정하고 회복 루틴을 선택하세요." : "Use a short survey to decide on rest and pick a recovery routine.",
  },
  {
    slug: "sleep-helper",
    emoji: "🌙",
    title: isKo ? "수면 도우미 가이드" : "Sleep Helper Guide",
    desc: isKo ? "화이트 노이즈 믹스, 앰비언트 사운드, 타이머로 잠들기." : "Fall asleep with white noise mixes, ambient sounds, and timers.",
  },
  {
    slug: "chef-judge-choice",
    emoji: "👨‍🍳",
    title: isKo ? "셰프 판단: 오늘의 선택 가이드" : "Chef Judge: Today's Choice Guide",
    desc: isKo ? "밈 스타일의 판단 코멘트로 오늘의 선택을 빠르게 결정하세요." : "Get meme-style judging comments to decide today's choice fast.",
  },
  {
    slug: "music-now",
    emoji: "🎵",
    title: isKo ? "지금 이 순간 음악 가이드" : "Music for This Moment Guide",
    desc: isKo ? "시간대와 리듬에 맞는 음악 무드를 선택하세요." : "Pick a music mood that fits the time of day and your rhythm.",
  },
  {
    slug: "winter-ruin-top1",
    emoji: "❄️",
    title: isKo ? "겨울 트리거 톱 1 가이드" : "Winter Trigger Top 1 Guide",
    desc: isKo ? "겨울 무너짐 패턴을 발견하고 10분 루틴으로 해결하세요." : "Spot your winter crash pattern and fix it with a 10-minute routine.",
  },
  {
    slug: "chat-random",
    emoji: "💬",
    title: isKo ? "랜덤 채팅 가이드" : "Random Chat Guide",
    desc: isKo ? "익명 1:1 랜덤 채팅. WebSocket 기반." : "Anonymous 1:1 random chat. WebSocket-based.",
  },
  {
    slug: "cheoreomcheoreom",
    emoji: "🌿",
    title: isKo ? "처음처럼 가이드" : "Like the First Time Guide",
    desc: isKo ? "잊고 지냈던 순간을 다시 떠올리게 하는 하루 한 질문." : "One question a day to recall moments you've forgotten.",
  },
  {
    slug: "flow-community",
    emoji: "🧵",
    title: isKo ? "FLOW 커뮤니티 가이드" : "FLOW Community Guide",
    desc: isKo ? "스레드 스타일 FLOW 게시판에서 게시하고 토론하는 방법." : "How to post and discuss on the thread-style FLOW board.",
  },
  {
    slug: "next-2026",
    emoji: "🔮",
    title: isKo ? "미래의 나 2026 가이드" : "Future Me 2026 Guide",
    desc: isKo ? "습관, 돈, 관계, 집중으로 형성된 내년 경로를 해석하세요." : "Interpret next-year routes shaped by habits, money, relationships, and focus.",
  },
  {
    slug: "life-spending-report",
    emoji: "🧾",
    title: isKo ? "인생 소비 보고서 가이드" : "Life Spending Report Guide",
    desc: isKo ? "돈, 시간, 감정 소비에 대한 3분 보고서를 받으세요." : "Get a 3-minute report on money, time, and emotion spending.",
  },
  {
    slug: "coffee-addiction-test",
    emoji: "☕",
    title: isKo ? "커피 중독 테스트 가이드" : "Coffee Addiction Test Guide",
    desc: isKo ? "카페인 한계, 중독 신호, 테스트 기준을 한눈에 확인하세요." : "Caffeine limits, addiction signals, and the test criteria at a glance.",
  },
  {
    slug: "bmi-diet-plan",
    emoji: "📏",
    title: isKo ? "BMI 설문 다이어트 계획 가이드" : "BMI Survey Diet Plan Guide",
    desc: isKo ? "빠른 탭으로 BMI와 생활 패턴을 확인하고 현실적인 계획을 받으세요." : "Check BMI and lifestyle patterns in quick taps to get a realistic plan.",
  },
  {
    slug: "beauty-bankruptcy-test",
    emoji: "💄",
    title: isKo ? "뷰티 파산 테스트 가이드" : "Beauty Bankruptcy Test Guide",
    desc: isKo ? "뷰티와 패션 지출이 자산에 미치는 영향과 계산 방법." : "How beauty and fashion spending affects your assets and how it's calculated.",
  },
  {
    slug: "cosmetics-routine-check",
    emoji: "💄",
    title: isKo ? "화장품 루틴 체크 가이드" : "Cosmetics Routine Check Guide",
    desc: isKo ? "현재 제품/기능을 확인하여 공백이나 과부하를 파악하고 최소 계획을 받으세요." : "Check current products/features to see gaps or overloads and get a minimal plan.",
  },
  {
    slug: "asset-shield-index",
    emoji: "🛡️",
    title: isKo ? "자산 방패 지수 가이드" : "Asset Shield Index Guide",
    desc: isKo ? "현금 흐름, 비상 자금, 분산 투자 체크로 회복력을 평가하세요." : "Assess resilience with cash flow, emergency funds, and diversification checks.",
  },
  {
    slug: "asset-allocation-check",
    emoji: "🧮",
    title: isKo ? "자산 배분 체크 가이드" : "Asset Allocation Check Guide",
    desc: isKo ? "현금, 금, 부동산, 주식, 암호화폐에 걸친 포트폴리오 유형을 검토하세요." : "Review your portfolio type across cash, gold, real estate, stocks, and crypto.",
  },
  {
    slug: "invest-confidence-builder",
    emoji: "📈",
    title: isKo ? "투자 자신감 구축 가이드" : "Investment Confidence Builder Guide",
    desc: isKo ? "수익보다 추론을 기록하여 결정을 안정화하세요." : "Stabilize decisions by logging your reasoning rather than returns.",
  },
  {
    slug: "bitcoin-regret-calculator",
    emoji: "💸",
    title: isKo ? "비트코인 후회 계산기 가이드" : "Bitcoin Regret Calculator Guide",
    desc: isKo ? "후회 시뮬레이션, 데이터 가정, 투자 주의사항 포함." : "Includes regret simulation, data assumptions, and investment cautions.",
  },
  {
    slug: "daily-productivity-check",
    emoji: "⚡",
    title: isKo ? "일일 생산성 체크 가이드" : "Daily Productivity Check Guide",
    desc: isKo ? "오늘의 집중력과 에너지를 평가하는 빠른 체크리스트." : "A quick checklist to assess today's focus and energy.",
  },
  {
    slug: "missed-house-opportunity",
    emoji: "🏠",
    title: isKo ? "놓친 집 기회 가이드" : "Missed House Opportunity Guide",
    desc: isKo ? "가격 상승의 기회비용과 현실적인 다음 단계." : "Opportunity cost of price growth and realistic next steps.",
  },
  {
    slug: "birthrate-reality-test",
    emoji: "👶",
    title: isKo ? "출산율 현실 테스트 가이드" : "Birthrate Reality Test Guide",
    desc: isKo ? "질문을 따라 변화를 느끼고 결과를 해석/공유하세요." : "Follow the questions to feel the shift and interpret/share the results.",
  },
  {
    slug: "better-birth-odds",
    emoji: "🌍",
    title: isKo ? "더 나은 출생 확률 가이드" : "Better Birth Odds Guide",
    desc: isKo ? "출생 조건을 비교하고 확률 결과를 해석/공유하세요." : "Compare birth conditions and interpret/share your probability results.",
  },
  {
    slug: "palm-reading-analysis",
    emoji: "✋",
    title: isKo ? "손금 분석 가이드" : "Palm Reading Analysis Guide",
    desc: isKo ? "사진 한 장으로 손금을 분석하고 주요 신호를 해석하세요." : "Analyze palm lines from a single photo and interpret key signals.",
  },
  {
    slug: "soccer-combo",
    emoji: "⚽",
    title: isKo ? "축구 조합 가이드" : "Soccer Combo Guide",
    desc: isKo ? "두 성향을 섞어 자신과 닮은 축구선수를 찾으세요." : "Mix two personalities to find the footballer you resemble.",
  },
  {
    slug: "neon-pinball-random",
    emoji: "🎱",
    title: isKo ? "네온 핀볼 랜덤 뽑기 가이드" : "Neon Pinball Random Draw Guide",
    desc: isKo ? "굴러가는 핀볼로 랜덤 당첨자를 선택하고 결과를 공유하세요." : "Use rolling pinballs to pick random winners and share results.",
  },
  {
    slug: "neox-arcade-shooter",
    emoji: "🚀",
    title: isKo ? "NEOX 아케이드 슈터 가이드" : "NEOX Arcade Shooter Guide",
    desc: isKo ? "네온 탄막을 피하며 최고 점수에 도전하는 NEOX 활용 가이드." : "Guide to NEOX: dodge neon barrages and chase high scores.",
  },
  {
    slug: "one-line-fortune",
    emoji: "🔮",
    title: isKo ? "한 줄 운세 가이드" : "One-Line Fortune Guide",
    desc: isKo ? "기분에 맞춰 일일 운세를 선택하고 빠르게 해석하세요." : "Pick a daily fortune based on your mood and interpret it fast.",
  },
  {
    slug: "saju-sintojungbi",
    emoji: "🔮",
    title: isKo ? "사주 & 신토정비 가이드" : "Saju & Sintojungbi Guide",
    desc: isKo ? "생년월일/시간을 사용하여 사주와 연/월 흐름을 읽으세요." : "Use birth date/time to read your four pillars and yearly/monthly flow.",
  },
  {
    slug: "heal-card",
    emoji: "💌",
    title: isKo ? "우연이 아닐 수도 가이드" : "Maybe Not a Coincidence Guide",
    desc: isKo ? "클릭 한 번으로 위로 카드를 받고 쉽게 공유하세요." : "Get a comfort card with one click and share it easily.",
  },
  {
    slug: "need-one-line",
    emoji: "🧭",
    title: isKo ? "내가 필요한 한 줄 가이드" : "The One Line I Need Guide",
    desc: isKo ? "감정과 상황을 클릭하여 오늘 필요한 한 줄을 받으세요." : "Click your emotion and situation to receive the line you need today.",
  },
  {
    slug: "motivate",
    emoji: "🔥",
    title: isKo ? "동기부여 리셋 가이드" : "Motivation Reset Guide",
    desc: isKo ? "마음가짐을 리셋하고 빠르게 재집중하기 위한 짧은 한 줄을 받으세요." : "Get a short line to reset your mindset and refocus quickly.",
  },
  {
    slug: "daily-wisdom",
    emoji: "📜",
    title: isKo ? "일일 지혜 가이드" : "Daily Wisdom Guide",
    desc: isKo ? "성경에서 영감을 받은 일일 한 줄을 선택하고 공유하세요." : "Choose a daily line inspired by scripture and share it.",
  },
  {
    slug: "temple-daily-quote",
    emoji: "🛕",
    title: isKo ? "절 일일 명언 가이드" : "Temple Daily Quote Guide",
    desc: isKo ? "불교 가르침을 현대 언어로 표현한 일일 한 줄을 선택하고 공유하세요." : "Pick and share daily lines based on Buddhist teachings in modern language.",
  },
  {
    slug: "hairloss-roadmap",
    emoji: "🌿",
    title: isKo ? "탈모 개선 로드맵 가이드" : "Hairloss Improvement Roadmap Guide",
    desc: isKo ? "설문으로 상태를 확인하고 오늘부터 바꿀 행동 TOP 3를 확인하세요." : "Check your status with a quick survey and get the top 3 actions to start today.",
  },
  ];
}

export function getAllServices(lang = "en") {
  const isKo = lang === "ko";

  return [
    {
      href: "https://today.funnyfunny.cloud",
      icon: "🌱",
      title: isKo ? "오늘, 잘했어" : "Today, Well Done",
      desc: isKo ? "오늘 내가 잘한 일은?" : "What did I do well today?",
      tags: isKo
        ? ["리마인더", "칭찬", "루틴", "회고"]
        : ["reminder", "praise", "routine", "reflection"],
    },
    {
      href: "https://todo.funnyfunny.cloud/",
      icon: "✅",
      title: isKo ? "오늘의 할 일 · 집중할 일만 체크" : "Today's To-Do",
      desc: isKo
        ? "집중할 일만 남기고 깔끔하게 체크하자."
        : "Keep only focus tasks and check them off cleanly.",
      tags: isKo
        ? ["할일", "작업", "체크리스트", "집중"]
        : ["todo", "tasks", "checklist", "focus"],
    },
    {
      href: "https://dream.funnyfunny.cloud/",
      icon: "💭",
      title: isKo ? "꿈 일기 — 꿈 기록·태그 정리" : "Dream Diary",
      desc: isKo
        ? "태그로 정리하는 로컬 꿈 기록장."
        : "A local dream journal with tagging.",
      tags: isKo
        ? ["꿈", "일기", "기록", "로컬"]
        : ["dreams", "journal", "records", "local"],
    },
    {
      href: "https://happy.funnyfunny.cloud/",
      icon: "🌿",
      title: isKo ? "처음처럼 — 하루 한 질문 기억" : "Like the First Time",
      desc: isKo
        ? "잊고 지냈던 순간을 다시 떠올리게 하는 하루 한 질문."
        : "One question a day to recall moments you've forgotten.",
      tags: isKo
        ? ["초심", "기억", "행복", "질문"]
        : ["beginner's mind", "memory", "happiness", "reflection"],
    },
    {
      href: "https://rest.funnyfunny.cloud",
      icon: "🛋️",
      title: isKo ? "이 정도면 쉬어야 할까?" : "Should I Rest Now?",
      desc: isKo
        ? "지금 쉬어도 될지 확인하는 짧은 설문."
        : "A short survey to check if you should rest now.",
      tags: isKo
        ? ["휴식", "컨디션", "설문", "번아웃"]
        : ["rest", "condition", "survey", "burnout"],
    },
    {
      href: "https://melancholy.funnyfunny.cloud",
      icon: "🌙",
      title: isKo ? "마음 컨디션 체크 · 기운 회복 가이드" : "Mind Condition Check · Energy Recovery Guide",
      desc: isKo
        ? "진단이 아닌, 오늘의 마음을 정리하고 기운을 회복하는 짧은 체크와 응원."
        : "Not a diagnosis, but a brief check to organize today's feelings and recover energy.",
      tags: isKo
        ? ["마음", "컨디션", "우울", "회복", "정신건강"]
        : ["mind", "condition", "melancholy", "recovery", "mental-health"],
    },
    {
      href: "https://dailycheck.funnyfunny.cloud/",
      icon: "📝",
      title: isKo ? "하루 컨디션 체크" : "Daily Condition Check",
      desc: isKo
        ? "5가지 체크로 오늘의 컨디션을 한 줄로 정리."
        : "Summarize today’s condition in one line with 5 checks.",
      tags: isKo
        ? ["컨디션", "상태", "체크", "요약", "한줄"]
        : ["condition", "status", "check", "summary", "one-line"],
    },
    {
      href: "https://sleep.funnyfunny.cloud",
      icon: "🌙",
      title: isKo ? "잠들기 도우미" : "Sleep Helper",
      desc: isKo
        ? "코골이와 주변 소음을 덮는 수면 사운드 플레이어."
        : "Sleep sound player that masks snoring and noise.",
      tags: isKo
        ? ["수면", "백색소음", "환경음", "휴식"]
        : ["sleep", "white-noise", "ambient", "rest"],
    },
    {
      href: "https://motivate.funnyfunny.cloud/",
      icon: "🔥",
      title: isKo ? "동기부여 리셋 — 마음 한 문장" : "Motivation Reset",
      desc: isKo
        ? "마음을 리셋할 짧은 한 문장 받기."
        : "Get a short line to reset your mindset.",
      tags: isKo
        ? ["동기부여", "마음가짐", "리셋", "집중"]
        : ["motivation", "mindset", "reset", "focus"],
    },
    {
      href: "https://flow.funnyfunny.cloud/",
      icon: "🧵",
      title: isKo ? "FLOW 커뮤니티" : "FLOW Community",
      desc: isKo
        ? "의견을 공유하는 스레드형 게시판."
        : "A thread-style board for sharing opinions.",
      tags: isKo
        ? ["커뮤니티", "게시판", "토론"]
        : ["community", "board", "discussion"],
    },
    {
      href: "https://chat.funnyfunny.cloud/",
      icon: "💬",
      title: isKo ? "랜덤 채팅" : "Random Chat",
      desc: isKo
        ? "익명으로 무작위 상대와 1:1 대화."
        : "1:1 anonymous chat with random strangers.",
      tags: isKo
        ? ["채팅", "익명", "랜덤", "대화"]
        : ["chat", "anonymous", "random", "conversation"],
    },
    {
      href: "https://coffee.funnyfunny.cloud",
      icon: "☕",
      title: isKo ? "커피 중독 테스트" : "Coffee Addiction Test",
      desc: isKo
        ? "카페인 의존도와 회복 횟수 확인."
        : "Check caffeine dependence and revival count.",
      tags: isKo
        ? ["카페인", "커피", "건강", "중독"]
        : ["caffeine", "coffee", "health", "addiction"],
    },
    {
      href: "https://beauty.funnyfunny.cloud",
      icon: "💄",
      title: isKo ? "꾸밈비 파산 테스트" : "Beauty Bankruptcy Test",
      desc: isKo
        ? "뷰티 지출의 영향력을 체감하기."
        : "Feel the impact of your beauty spending.",
      tags: isKo
        ? ["뷰티", "지출", "소비"]
        : ["beauty", "spending", "consumption"],
    },
    {
      href: "https://cosmetics.funnyfunny.cloud",
      icon: "🧴",
      title: isKo ? "화장품 루틴 체크" : "Cosmetics Routine Check",
      desc: isKo
        ? "루틴의 부족·과잉을 확인하고 최소 추천 받기."
        : "Check routine gaps or overloads and get a minimal recommendation.",
      tags: isKo
        ? ["화장품", "루틴", "스킨케어", "체크"]
        : ["cosmetics", "routine", "skincare", "check"],
    },
    {
      href: "https://next.funnyfunny.cloud",
      icon: "🔮",
      title: isKo ? "2026년의 나" : "Future Me 2026",
      desc: isKo
        ? "습관, 돈, 관계, 집중력이 만드는 1년 후 루트."
        : "Your one-year route shaped by habits, money, relationships, and focus.",
      tags: isKo
        ? ["미래", "습관", "집중", "관계"]
        : ["future", "habits", "focus", "relationships"],
    },
    {
      href: "https://year.funnyfunny.cloud",
      icon: "🧾",
      title: isKo ? "올해 나의 인생 소비 보고서" : "Life Spending Report",
      desc: isKo
        ? "돈, 시간, 감정 흐름을 3분 안에 요약."
        : "A 3-minute summary of money, time, and emotion flow.",
      tags: isKo
        ? ["연말", "지출", "시간", "감정"]
        : ["year-end", "spending", "time", "emotion"],
    },
    {
      href: "https://winter.funnyfunny.cloud",
      icon: "❄️",
      title: isKo ? "이번 겨울, 나를 망치는 것 TOP 1" : "Winter Trigger Top 1",
      desc: isKo
        ? "겨울 루틴을 무너뜨리는 최고의 트리거 찾기."
        : "Find the top trigger that breaks your winter routine.",
      tags: isKo
        ? ["겨울", "습관", "컨디션", "리셋"]
        : ["winter", "habits", "condition", "reset"],
    },
    {
      href: "https://energy.funnyfunny.cloud",
      icon: "⚡",
      title: isKo ? "생명 에너지 밸런스" : "Life Energy Balance",
      desc: isKo
        ? "번아웃 지점과 회복 가이드 확인."
        : "Identify burnout points and recovery guides.",
      tags: isKo
        ? ["에너지", "번아웃", "회복"]
        : ["energy", "burnout", "recovery"],
    },
    {
      href: "https://product.funnyfunny.cloud",
      icon: "🚀",
      title: isKo ? "하루 생산성 체크" : "Daily Productivity Check",
      desc: isKo
        ? "집중, 에너지, 결정 상태를 빠르게 확인."
        : "Quickly check focus, energy, and decision state.",
      tags: isKo
        ? ["생산성", "집중", "루틴"]
        : ["productivity", "focus", "routine"],
    },
    {
      href: "https://mental.funnyfunny.cloud",
      icon: "🧠",
      title: isKo ? "하루 뇌력 지수" : "Daily Mental Stamina Index",
      desc: isKo
        ? "오늘의 뇌 에너지와 집중 상태 평가."
        : "Assess today’s brain energy and focus state.",
      tags: isKo
        ? ["정신", "집중", "컨디션"]
        : ["mental", "focus", "condition"],
    },
    {
      href: "https://commute.funnyfunny.cloud/",
      icon: "⏰",
      title: isKo
        ? "출퇴근 비용·시간 계산기"
        : "Commute Cost & Time Calculator",
      desc: isKo
        ? "출퇴근 비용과 시간을 계산하고 활용 아이디어 받기."
        : "Calculate commute cost and time, and get usage ideas.",
      tags: isKo
        ? ["출퇴근", "시간", "비용", "교통", "루틴"]
        : ["commute", "time", "cost", "transport", "routine"],
    },
    {
      href: "https://human.funnyfunny.cloud",
      icon: "🙃",
      title: isKo ? "나를 고갈시키는 사람들" : "People Who Drain Me",
      desc: isKo
        ? "이 테스트는 당신을 평가하지 않습니다."
        : "This test does not evaluate you.",
      tags: isKo
        ? ["관계", "성격", "유형"]
        : ["relationships", "personality", "types"],
    },
    {
      href: "https://ego.funnyfunny.cloud",
      icon: "🧬",
      title: isKo ? "EGO 테스트" : "EGO Test",
      desc: isKo
        ? "성격 테스트가 아닙니다. 갈등, 스트레스, 선택 속의 자아를 분석합니다."
        : "Not a personality test. Analyze ego under conflict, stress, and choices.",
      tags: isKo ? ["자아", "스트레스", "갈등"] : ["ego", "stress", "conflict"],
    },
    {
      href: "https://money.funnyfunny.cloud",
      icon: "🛡️",
      title: isKo ? "자산 방탄 지수" : "Asset Shield Index",
      desc: isKo
        ? "경제 하락에 대한 회복력 측정."
        : "Measure your resilience against economic downturns.",
      tags: isKo ? ["금융", "리스크", "자산"] : ["finance", "risk", "assets"],
    },
    {
      href: "https://specific.funnyfunny.cloud/",
      icon: "🧮",
      title: isKo ? "자산 비중 진단" : "Asset Allocation Check",
      desc: isKo
        ? "현금, 금, 부동산, 주식, 코인 비중 확인."
        : "Check your cash, gold, real estate, stock, and crypto ratios.",
      tags: isKo
        ? ["자산", "포트폴리오", "배분", "진단", "금융"]
        : ["assets", "portfolio", "allocation", "diagnosis", "finance"],
    },
    {
      href: "https://life.funnyfunny.cloud",
      icon: "⏰",
      title: isKo ? "인생 시간 대시보드" : "Life Time Dashboard",
      desc: isKo
        ? "여유 시간, 수면, 커리어에 남은 시간."
        : "Remaining time for free time, sleep, and career.",
      tags: isKo ? ["시간", "대시보드", "인생"] : ["time", "dashboard", "life"],
    },
    {
      href: "https://soul.funnyfunny.cloud",
      icon: "🔮",
      title: isKo ? "SoulPrint" : "SoulPrint",
      desc: isKo
        ? "출생 데이터 기반의 독특한 성격 분석."
        : "A unique personality analysis based on birth data.",
      tags: isKo
        ? ["성격", "출생", "분석"]
        : ["personality", "birth", "analysis"],
    },
    {
      href: "https://saju.funnyfunny.cloud/",
      icon: "🔮",
      title: isKo ? "사주풀이 · 신토정비결" : "Saju & Sintojungbi",
      desc: isKo
        ? "생년월일/시간으로 사주팔자와 연월 흐름 읽기."
        : "Read four pillars and yearly/monthly flow by birth date/time.",
      tags: isKo
        ? ["사주", "운세", "신토정비결", "해석"]
        : ["saju", "fortune", "sintojungbi", "reading"],
    },
    {
      href: "https://senseyear.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "출생연도 바이브 테스트" : "Birth-Year Vibe Test",
      desc: isKo
        ? "12가지 빠른 질문으로 나의 바이브 찾기."
        : "Find your vibe through 12 quick questions.",
      tags: isKo
        ? ["바이브", "테스트", "성격"]
        : ["vibe", "test", "personality"],
    },
    {
      href: "https://alcohol.funnyfunny.cloud",
      icon: "🍺",
      title: isKo ? "알코올 MBTI" : "Alcohol MBTI",
      desc: isKo ? "음주 스타일 MBTI." : "Drinking style MBTI.",
      tags: isKo
        ? ["음주", "알코올", "스타일"]
        : ["drinking", "alcohol", "style"],
    },
    {
      href: "https://lazy.funnyfunny.cloud",
      icon: "😴",
      title: isKo ? "무기력 진단" : "Laziness Diagnostic",
      desc: isKo
        ? "7가지 요인으로 무기력 원인 찾기."
        : "Find causes of lethargy across 7 factors.",
      tags: isKo
        ? ["무기력", "게으름", "진단"]
        : ["lethargy", "laziness", "diagnosis"],
    },
    {
      href: "https://average.funnyfunny.cloud",
      icon: "📊",
      title: isKo ? "한국 평균 vs 나" : "Korea Average vs Me",
      desc: isKo
        ? "소득, 지출, 습관을 국가 평균과 비교."
        : "Compare your income, spending, and habits to national averages.",
      tags: isKo
        ? ["평균", "통계", "비교"]
        : ["average", "stats", "comparison"],
    },
    {
      href: "https://drain.funnyfunny.cloud",
      icon: "⚡",
      title: isKo ? "생명 에너지 누수 진단" : "Life Energy Leak Diagnostic",
      desc: isKo
        ? "지금 에너지가 어디서 새고 있나?"
        : "Where is your energy leaking right now?",
      tags: isKo ? ["에너지", "피로", "누수"] : ["energy", "fatigue", "leak"],
    },
    {
      href: "https://maldives.funnyfunny.cloud",
      icon: "🏝️",
      title: isKo ? "몰디브 매치" : "Maldives Match",
      desc: isKo
        ? "나의 몰디브 여행 스타일 찾기."
        : "Find your Maldives travel style.",
      tags: isKo
        ? ["여행", "리조트", "몰디브"]
        : ["travel", "resort", "maldives"],
    },
    {
      href: "https://bit.funnyfunny.cloud",
      icon: "💸",
      title: isKo ? "비트코인 안 산 죄" : "Bitcoin Regret",
      desc: isKo
        ? "그때 샀다면 지금 얼마일까?"
        : "If you bought then, how much would it be now?",
      tags: isKo
        ? ["비트코인", "투자", "기회비용"]
        : ["bitcoin", "investment", "opportunity-cost"],
    },
    {
      href: "https://house.funnyfunny.cloud",
      icon: "🏠",
      title: isKo ? "집 못 산 죄" : "Missed House Opportunity",
      desc: isKo ? "지금 격차는 얼마나 클까?" : "How big is the gap now?",
      tags: isKo
        ? ["부동산", "투자", "시뮬레이터"]
        : ["real-estate", "investment", "simulator"],
    },
    {
      href: "https://invest.funnyfunny.cloud",
      icon: "📈",
      title: isKo ? "투자 확신 빌더 — 투자 심리 점검" : "Investment Confidence Builder",
      desc: isKo
        ? "수익률이 아니라 판단을 기록해 흔들림 줄이기."
        : "Log your judgment, not returns, to reduce wobbles.",
      tags: isKo
        ? ["투자", "결정", "기록", "확신", "마음가짐"]
        : ["investing", "decision", "logging", "confidence", "mindset"],
    },
    {
      href: "https://space.funnyfunny.cloud",
      icon: "📐",
      title: isKo ? "평수 계산기" : "Pyeong Calculator",
      desc: isKo
        ? "평을 제곱미터로 변환하고 대표 평형 확인."
        : "Convert pyeong to square meters and check typical sizes.",
      tags: isKo
        ? ["부동산", "평", "면적", "계산기"]
        : ["real-estate", "pyeong", "area", "calculator"],
    },
    {
      href: "https://nospend.funnyfunny.cloud",
      icon: "💸",
      title: isKo ? "안 산 것의 총 자산" : "Total Wealth of What I Didn't Buy",
      desc: isKo
        ? '"안 샀으면"을 숫자로 바꾸기.'
        : 'Turn "if only I hadn\'t bought it" into numbers.',
      tags: isKo
        ? ["저축", "총자산", "기회비용"]
        : ["saving", "total-wealth", "opportunity-cost"],
    },
    {
      href: "https://n.funnyfunny.cloud/",
      icon: "🍽️",
      title: isKo ? "N빵 계산기 — 1인당 비용 계산" : "Split-the-Bill Calculator",
      desc: isKo
        ? "장소, 인원, 총액 입력으로 1인당 비용 계산·복사."
        : "Enter venue, headcount, and total to calculate and copy per-person cost.",
      tags: isKo
        ? ["계산기", "비용", "식사", "나눔", "복사"]
        : ["calculator", "cost", "meal", "split", "copy"],
    },
    {
      href: "https://tax.funnyfunny.cloud",
      icon: "🧾",
      title: isKo ? "세금 계산기" : "Tax Calculator",
      desc: isKo
        ? "직장인/프리랜서/개인사업자 세금·보험·경비 추정 및 월 실수령액 확인."
        : "Estimate taxes, insurance, and expenses for employees, freelancers, and self-employed.",
      tags: isKo
        ? ["세금", "계산기", "직장인", "프리랜서", "사업자", "보험", "경비"]
        : ["tax", "calculator", "employee", "freelancer", "self-employed", "insurance", "expenses"],
    },
    {
      href: "https://inlaw.funnyfunny.cloud",
      icon: "💬",
      title: isKo ? "고부번역기" : "In-Law Translator",
      desc: isKo
        ? "고부갈등의 말을 번역하고, 감정을 정리하고, 선택지를 제시."
        : "Translate words, organize emotions, and offer choices for in-law conflicts.",
      tags: isKo
        ? ["고부", "번역", "갈등", "중재", "감정", "선택지", "도구"]
        : ["in-law", "translator", "conflict", "mediation", "emotions", "choices", "tool"],
    },
    {
      href: "https://fridge.funnyfunny.cloud",
      icon: "🥕",
      title: isKo ? "냉장고 구조대 — 재료로 만드는 요리" : "Fridge Rescue",
      desc: isKo
        ? "냉장고에 있는 재료로 지금 가능한 요리를 구조합니다."
        : "Rescue recipes you can make right now with ingredients in your fridge.",
      tags: isKo
        ? ["냉장고", "요리", "레시피", "재료", "구조", "음식"]
        : ["fridge", "cooking", "recipe", "ingredients", "rescue", "food"],
    },
    {
      href: "https://hwatu.funnyfunny.cloud",
      icon: "🎴",
      title: isKo ? "화투로 보는 오늘의 운세" : "Today's Fortune by Hwatu Cards",
      desc: isKo
        ? "화투 한 장으로 알아보는 오늘의 운세와 행운."
        : "Discover today's fortune and luck with a single Hwatu card.",
      tags: isKo
        ? ["화투", "운세", "오늘", "행운", "카드", "점", "미신"]
        : ["hwatu", "fortune", "today", "luck", "card", "divination", "mystical"],
    },
    {
      href: "https://edu.funnyfunny.cloud",
      icon: "🎓",
      title: isKo ? "사교육 지옥도" : "Private Education Hell Map",
      desc: isKo
        ? "교육비 인생 시뮬레이터."
        : "An education cost life simulator.",
      tags: isKo
        ? ["교육", "지출", "시뮬레이션"]
        : ["education", "spending", "simulation"],
    },
    {
      href: "https://baby.funnyfunny.cloud/",
      icon: "👶",
      title: isKo ? "출산율 체감 테스트" : "Birthrate Reality Test",
      desc: isKo
        ? "이건 미래 예측이 아니라 현재일 수 있습니다."
        : "This may be the present, not a future prediction.",
      tags: isKo
        ? ["출산율", "인구", "사회", "테스트"]
        : ["birthrate", "population", "society", "test"],
    },
    {
      href: "https://miracle.funnyfunny.cloud/",
      icon: "🌍",
      title: isKo ? "더 좋은 조건에서 태어날 확률" : "Better Birth Odds",
      desc: isKo
        ? "출생 조건을 비교하고 더 나은 환경 확률 확인."
        : "Compare birth conditions and check your odds of a better environment.",
      tags: isKo
        ? ["출생", "확률", "국가", "비교", "사회"]
        : ["birth", "probability", "country", "comparison", "society"],
    },
    {
      href: "https://health.funnyfunny.cloud",
      icon: "🩺",
      title: isKo ? "건강수명 & 은퇴 준비" : "Healthspan & Retirement",
      desc: isKo
        ? "건강수명에 대한 재미있는 접근."
        : "A playful take on healthspan.",
      tags: isKo
        ? ["건강", "은퇴", "장수"]
        : ["health", "retirement", "longevity"],
    },
    {
      href: "https://hairloss.funnyfunny.cloud/",
      icon: "🌿",
      title: isKo ? "탈모 개선 로드맵" : "Hairloss Improvement Roadmap",
      desc: isKo
        ? "설문으로 상태를 파악하고 오늘부터 바꿀 행동 TOP 3 확인."
        : "Use a quick survey to get the top 3 actions to start today.",
      tags: isKo
        ? ["탈모", "두피", "루틴", "개선", "건강"]
        : ["hairloss", "scalp", "routine", "improvement", "health"],
    },
    {
      href: "https://bmi.funnyfunny.cloud/",
      icon: "📏",
      title: isKo ? "BMI 설문형 다이어트 플랜" : "BMI Survey Diet Plan",
      desc: isKo
        ? "한 번씩만 딸각. 숫자 한 번 입력. 놀랍도록 도움됨."
        : "Tap once each. Enter numbers once. Surprisingly helpful.",
      tags: isKo
        ? ["BMI", "다이어트", "설문", "플랜"]
        : ["BMI", "diet", "survey", "plan"],
    },
    {
      href: "https://cook.funnyfunny.cloud",
      icon: "🍱",
      title: isKo ? "오늘 뭐 먹지?" : "What to Eat Today?",
      desc: isKo
        ? "오늘의 랜덤 메뉴 추천."
        : "Random menu recommendations for the day.",
      tags: isKo
        ? ["음식", "추천", "랜덤"]
        : ["food", "recommendation", "random"],
    },
    {
      href: "https://chef.funnyfunny.cloud/",
      icon: "👨‍🍳",
      title: isKo ? "셰프 심사위원: 오늘의 선택" : "Chef Judge: Today's Choice",
      desc: isKo
        ? "선택을 돕는 밈 스타일 심사 멘트."
        : "Meme-style judging comments for your choice.",
      tags: isKo
        ? ["셰프", "심사", "선택", "밈"]
        : ["chef", "judge", "choice", "meme"],
    },
    {
      href: "https://pick.funnyfunny.cloud",
      icon: "🍿",
      title: isKo ? "OTT 픽" : "OTT Pick",
      desc: isKo
        ? "검색 없이 바로 영화·드라마 추천."
        : "Instant movie and drama recommendations without searching.",
      tags: isKo
        ? ["영화", "드라마", "OTT", "추천"]
        : ["movies", "drama", "OTT", "recommendation"],
    },
    {
      href: "https://lotto.funnyfunny.cloud/",
      icon: "🎟️",
      title: isKo ? "로또 번호 뽑기" : "Lotto Number Picker",
      desc: isKo
        ? "원클릭 로또 번호 조합."
        : "One-click lotto number combinations.",
      tags: isKo
        ? ["로또", "추천", "번호", "랜덤"]
        : ["lotto", "recommendation", "numbers", "random"],
    },
    {
      href: "https://anju.funnyfunny.cloud",
      icon: "🍢",
      title: isKo ? "오늘의 안주 페어링" : "Today's Snack Pairing",
      desc: isKo
        ? "술과 함께할 랜덤 안주 추천."
        : "Random snack pairing for drinks.",
      tags: isKo ? ["안주", "술", "랜덤"] : ["snack", "drinks", "random"],
    },
    {
      href: "https://cafe.funnyfunny.cloud",
      icon: "☕",
      title: isKo ? "카페 지출 역전" : "Cafe Spending Reversal",
      desc: isKo
        ? "30세까지 커피가 얼마나 들었을까?"
        : "How much did coffee cost you by age 30?",
      tags: isKo
        ? ["카페", "지출", "소비"]
        : ["cafe", "spending", "consumption"],
    },
    {
      href: "https://drink.funnyfunny.cloud",
      icon: "🍺",
      title: isKo ? "그 술, 지금 얼마?" : "That Drink, Now How Much?",
      desc: isKo
        ? "월 음주비 vs 투자했을 때 금액."
        : "Monthly alcohol spend vs invested amount.",
      tags: isKo
        ? ["알코올", "투자", "비용"]
        : ["alcohol", "investment", "cost"],
    },
    {
      href: "https://waste.funnyfunny.cloud",
      icon: "♻️",
      title: isKo ? "낭비 지수" : "Waste Index",
      desc: isKo
        ? "쓴 돈을 낭비 점수로 변환."
        : "Convert money spent into a waste score.",
      tags: isKo ? ["낭비", "돈", "습관"] : ["waste", "money", "habits"],
    },
    {
      href: "https://joke.funnyfunny.cloud",
      icon: "🤣",
      title: isKo ? "오늘의 아재 개그" : "Dad Jokes of the Day",
      desc: isKo
        ? "공유하기 좋은 짧은 웃음."
        : "Shareable jokes for a quick laugh.",
      tags: isKo ? ["아재개그", "유머", "밈"] : ["dad-jokes", "humor", "meme"],
    },
    {
      href: "https://fortune.funnyfunny.cloud",
      icon: "🔮",
      title: isKo ? "오늘의 한 줄 운세" : "One-Line Fortune",
      desc: isKo
        ? "기분에 따라 뽑는 하루 한 줄 운세."
        : "A daily fortune line based on your mood.",
      tags: isKo ? ["운세", "기분", "한줄"] : ["fortune", "mood", "one-line"],
    },
    {
      href: "https://wisdom.funnyfunny.cloud",
      icon: "📜",
      title: isKo ? "오늘의 지혜" : "Daily Wisdom",
      desc: isKo
        ? "성경에서 영감을 받은 하루 한 문장."
        : "A daily line inspired by scripture.",
      tags: isKo
        ? ["지혜", "성경", "명언", "하루"]
        : ["wisdom", "scripture", "quote", "daily"],
    },
    {
      href: "https://heal.funnyfunny.cloud",
      icon: "💌",
      title: isKo ? "우연이 아닐지도" : "Maybe Not a Coincidence",
      desc: isKo ? "원클릭 위로 카드." : "A comfort card with one click.",
      tags: isKo ? ["위로", "힐링", "카드"] : ["comfort", "healing", "card"],
    },
    {
      href: "https://need.funnyfunny.cloud/",
      icon: "🧭",
      title: isKo ? "지금 나에게 가장 필요한 한마디" : "The One Line I Need",
      desc: isKo
        ? "감정과 상황을 클릭해 오늘의 한 문장 받기."
        : "Click your emotion and situation for today’s line.",
      tags: isKo
        ? ["감정", "상황", "위로", "한줄"]
        : ["emotion", "situation", "comfort", "one-line"],
    },
    {
      href: "https://temple.funnyfunny.cloud/",
      icon: "🛕",
      title: isKo ? "하루 한 문장 (Temple)" : "Temple Daily Quote",
      desc: isKo
        ? "불교 가르침을 오늘의 언어로 풀어낸 하루 한 문장."
        : "Daily lines based on Buddhist teachings in modern language.",
      tags: isKo
        ? ["불교", "명상", "명언", "하루"]
        : ["buddhism", "meditation", "quote", "daily"],
    },
    {
      href: "https://mind.funnyfunny.cloud",
      icon: "🧠",
      title: isKo ? "오늘의 마음챙김" : "Today's Mindfulness",
      desc: isKo ? "차분함을 위한 한 줄 명언." : "A one-line quote for calm.",
      tags: isKo
        ? ["마음챙김", "명언", "힐링"]
        : ["mindfulness", "quote", "healing"],
    },
    {
      href: "https://beat.funnyfunny.cloud",
      icon: "🥁",
      title: isKo ? "드럼 비트 연습" : "Drum Beat Trainer",
      desc: isKo
        ? "메트로놈 + 기본 패턴 연습."
        : "Metronome plus basic pattern practice.",
      tags: isKo ? ["드럼", "리듬", "연습"] : ["drum", "rhythm", "practice"],
    },
    {
      href: "https://audio.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "Simple Audio Editor" : "Simple Audio Editor",
      desc: isKo
        ? "브라우저에서 바로 오디오 편집."
        : "Audio editing directly in the browser.",
      tags: isKo ? ["오디오", "편집", "도구"] : ["audio", "editing", "tool"],
    },
    {
      href: "https://wav.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "WAV → MP3 변환기" : "WAV to MP3 Converter",
      desc: isKo
        ? "브라우저에서 안전하게 WAV를 MP3로 변환."
        : "Convert WAV to MP3 safely in the browser.",
      tags: isKo ? ["오디오", "변환", "도구"] : ["audio", "converter", "tool"],
    },
    {
      href: "https://mr.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "MR 메이커 · 보컬 제거기" : "MR Maker · Vocal Remover",
      desc: isKo
        ? "보컬만 듣기 / MR만 듣기. 스테레오 분리 후 미리듣기·다운로드."
        : "Listen to vocals only or MR only. Separate stereo, preview and download.",
      tags: isKo ? ["MR", "보컬제거", "카라오케", "오디오"] : ["MR", "vocal remover", "karaoke", "audio"],
    },
    {
      href: "https://music.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "지금 이 시간에 어울리는 음악" : "Music for This Moment",
      desc: isKo
        ? "오늘의 리듬에 맞는 음악 무드."
        : "Music moods that fit today’s rhythm.",
      tags: isKo
        ? ["음악", "무드", "추천", "플레이리스트"]
        : ["music", "mood", "recommendation", "playlist"],
    },
    {
      href: "https://vocal.funnyfunny.cloud",
      icon: "🎤",
      title: isKo ? "두성터득기" : "Head Voice Trainer",
      desc: isKo
        ? "호흡과 공명 루틴으로 두성 연습."
        : "Breathing and resonance routines for head voice.",
      tags: isKo
        ? ["보컬", "두성", "연습"]
        : ["vocal", "head-voice", "practice"],
    },
    {
      href: "https://video.funnyfunny.cloud",
      icon: "🎬",
      title: isKo ? "AutoCut Studio" : "AutoCut Studio",
      desc: isKo
        ? "침묵 감지로 하이라이트·점프컷 타임라인 자동 생성."
        : "Auto-create highlight and jump-cut timelines via silence detection.",
      tags: isKo
        ? ["영상편집", "유튜브", "점프컷", "하이라이트"]
        : ["video-editing", "youtube", "jump-cut", "highlights"],
    },
    {
      href: "https://file.funnyfunny.cloud/",
      icon: "🗜️",
      title: isKo
        ? "로컬 이미지 최적화 & 파일 인사이트"
        : "Local Image Optimizer & File Insights",
      desc: isKo
        ? "WebP/JPEG 재인코딩, 자동 리사이즈, 로컬 파일 정보·해시·미리보기 확인."
        : "Re-encode WebP/JPEG, auto-resize, and view local file info, hashes, and previews.",
      tags: isKo
        ? ["이미지", "최적화", "로컬", "파일정보", "해시"]
        : ["image", "optimizer", "local", "file-info", "hash"],
    },
    {
      href: "http://heic.funnyfunny.cloud/",
      icon: "📷",
      title: isKo ? "HEIC to JPG 변환기" : "HEIC to JPG Converter",
      desc: isKo
        ? "압축, 리사이즈, ZIP 내보내기로 HEIC를 JPG/WebP/PNG로 변환."
        : "Convert HEIC to JPG/WebP/PNG with compression, resize, and ZIP export.",
      tags: isKo
        ? ["HEIC", "JPG", "변환", "압축", "리사이즈", "ZIP", "WebP", "PNG"]
        : [
            "HEIC",
            "JPG",
            "convert",
            "compress",
            "resize",
            "ZIP",
            "WebP",
            "PNG",
          ],
    },
    {
      href: "https://hwp.funnyfunny.cloud/",
      icon: "📄",
      title: isKo ? "HWPX 텍스트 추출기" : "HWPX Text Extractor",
      desc: isKo
        ? "HWPX에서 텍스트만 추출하고 PDF/DOCX로 저장."
        : "Extract text from HWPX and export to PDF/DOCX.",
      tags: isKo
        ? ["HWPX", "텍스트", "추출", "PDF", "DOCX"]
        : ["HWPX", "text", "extract", "PDF", "DOCX"],
    },
    {
      href: "https://mood.funnyfunny.cloud/",
      icon: "🌈",
      title: isKo ? "기분전환도우미" : "Mood Shift",
      desc: isKo
        ? "기분이 애매할 때 딸깍 누르면 조금이라도 바뀌는. 위로·조언 없이 기분만 살짝 옮겨주는 서비스."
        : "When you feel in-between, one tap can shift it a little. No advice, no pressure—just a nudge.",
      tags: isKo
        ? ["기분전환", "무드", "가벼운 위로", "기분 리셋"]
        : ["mood", "shift", "reset", "light relief"],
    },
    {
      href: "https://meta.funnyfunny.cloud",
      icon: "🧰",
      title: isKo
        ? "Meta Kit — SEO · OG · Favicon"
        : "Meta Kit — SEO · OG · Favicon",
      desc: isKo
        ? "메타 태그, OG/Twitter 카드, 파비콘 입력 후 생성·복사. OG 텍스트는 영문만 사용."
        : "Enter meta tags, OG/Twitter cards, and favicons to generate and copy. OG text uses English.",
      tags: isKo
        ? ["메타태그", "OG", "SEO", "파비콘", "OG이미지"]
        : ["meta-tags", "OG", "SEO", "favicon", "OG-image"],
    },
    {
      href: "https://image.funnyfunny.cloud",
      icon: "🖼️",
      title: isKo ? "이미지 합치기 & PDF 변환" : "Image Merge & PDF Converter",
      desc: isKo
        ? "드래그로 순서 정렬 후 한 장 이미지 또는 PDF로 저장."
        : "Drag to reorder and save as one image or PDF.",
      tags: isKo
        ? ["이미지", "PDF", "합치기", "편집"]
        : ["image", "PDF", "merge", "edit"],
    },
    {
      href: "https://pdfimg.funnyfunny.cloud/",
      icon: "📄",
      title: isKo ? "PDF → 이미지 변환기" : "PDF to Images Converter",
      desc: isKo
        ? "서버 업로드 없이 브라우저에서 PDF를 페이지별 PNG/JPEG로 변환."
        : "Convert PDF pages to PNG/JPEG images in your browser. No uploads; processed locally.",
      tags: isKo
        ? ["PDF", "이미지", "PNG", "JPEG", "변환", "로컬"]
        : ["PDF", "image", "PNG", "JPEG", "convert", "local"],
    },
    {
      href: "https://ocr.funnyfunny.cloud",
      icon: "🔍",
      title: isKo ? "이미지 텍스트 추출" : "Image Text Extractor",
      desc: isKo
        ? "사진에서 텍스트 자동 추출."
        : "Extract text from photos automatically.",
      tags: isKo
        ? ["OCR", "텍스트", "사진", "변환"]
        : ["OCR", "text", "photo", "convert"],
    },
    {
      href: "https://imtranslate.funnyfunny.cloud",
      icon: "🖼️",
      title: isKo ? "이미지 번역기" : "Image Translator",
      desc: isKo
        ? "이미지에서 글자 추출(OCR) 후 한·영 번역. 스크린샷·메뉴판·문서 사진에 적합."
        : "Extract text from images (OCR) then translate between Korean and English.",
      tags: isKo
        ? ["이미지", "OCR", "번역", "한영"]
        : ["image", "OCR", "translate", "Korean", "English"],
    },
    {
      href: "https://charcount.funnyfunny.cloud",
      icon: "📝",
      title: isKo ? "글자 수 세기" : "Character & Word Counter",
      desc: isKo
        ? "자기소개서·논문·과제용 글자 수, 단어 수, 바이트 실시간 집계. 공백 포함/제외, 목표 글자 수."
        : "Real-time character, word, and byte count. Include/exclude spaces, set a goal.",
      tags: isKo
        ? ["글자 수", "단어 수", "자소서", "논문", "과제"]
        : ["character count", "word count", "byte", "essay"],
    },
    {
      href: "https://qrcode.funnyfunny.cloud",
      icon: "📱",
      title: isKo ? "QR 코드 만들기" : "QR Code Generator",
      desc: isKo
        ? "URL·텍스트로 QR 코드를 무료로 생성하고 이미지로 저장."
        : "Generate QR codes from URL or text and download as image.",
      tags: isKo
        ? ["QR코드", "qr 만들기", "qr 생성"]
        : ["QR code", "generator", "create"],
    },
    {
      href: "https://datecalc.funnyfunny.cloud",
      icon: "📅",
      title: isKo ? "날짜 차이·며칠째·D-day" : "Date Difference & D-day",
      desc: isKo
        ? "두 날짜 차이, 기념일 며칠째, 목표일까지 D-day 계산."
        : "Calculate days between two dates, nth day from start, and D-day to target.",
      tags: isKo
        ? ["날짜 차이", "며칠째", "D-day", "기념일"]
        : ["date difference", "days between", "D-day", "countdown"],
    },
    {
      href: "https://loancalc.funnyfunny.cloud",
      icon: "💰",
      title: isKo ? "대출 이자·상환 계산기" : "Loan Repayment Calculator",
      desc: isKo
        ? "대출원금·이자율·기간으로 월 상환액·총 이자 계산. 원리금 균등·원금 균등."
        : "Calculate monthly payment and total interest. Equal payment or equal principal.",
      tags: isKo
        ? ["대출", "이자", "상환", "원리금균등", "주담대"]
        : ["loan", "interest", "repayment", "mortgage"],
    },
    {
      href: "https://electric.funnyfunny.cloud",
      icon: "⚡",
      title: isKo ? "전기요금 계산기" : "Electricity Bill Calculator",
      desc: isKo
        ? "사용량(kWh)으로 한달 전기요금 예상. 주택용 누진제 기준."
        : "Estimate monthly electricity bill from kWh. Residential tiered rate.",
      tags: isKo
        ? ["전기요금", "전기세", "kWh", "누진제"]
        : ["electricity", "utility", "bill", "kWh"],
    },
    {
      href: "https://platformfee.funnyfunny.cloud",
      icon: "📊",
      title: isKo ? "크몽·숨고 수수료 계산기" : "Platform Fee Calculator",
      desc: isKo
        ? "크몽·숨고 매출 기준 플랫폼 수수료·실수령액 계산."
        : "Calculate platform fee and net earnings for Kmong/Ssobo.",
      tags: isKo
        ? ["크몽", "숨고", "수수료", "프리랜서", "실수령"]
        : ["kmong", "ssobo", "platform fee", "freelancer"],
    },
    {
      href: "https://severance.funnyfunny.cloud",
      icon: "🏦",
      title: isKo ? "퇴직금 계산기" : "Severance Pay Calculator",
      desc: isKo
        ? "평균임금·근속연수로 예상 퇴직금 계산. 1년당 30일분."
        : "Estimate severance from average wage and years of service.",
      tags: isKo
        ? ["퇴직금", "퇴직금 계산", "평균임금", "근속연수"]
        : ["severance", "retirement", "average wage"],
    },
    {
      href: "https://vat.funnyfunny.cloud",
      icon: "🧾",
      title: isKo ? "부가세 계산기" : "VAT Calculator",
      desc: isKo
        ? "공급가·부가세·합계 변환. 일반 10%, 간이 1.5%."
        : "Convert supply price, VAT, and total. 10% or 1.5% simplified.",
      tags: isKo
        ? ["부가세", "VAT", "공급가", "세액", "간이과세"]
        : ["VAT", "tax", "supply price", "Korea"],
    },
    {
      href: "https://gas.funnyfunny.cloud",
      icon: "🔥",
      title: isKo ? "가스요금 계산기" : "Gas Bill Calculator",
      desc: isKo
        ? "사용량(㎥)으로 한달 가스요금 예상. 주택용 도시가스."
        : "Estimate monthly gas bill from m³ usage. Residential.",
      tags: isKo
        ? ["가스요금", "가스비", "도시가스", "㎥"]
        : ["gas", "utility", "bill", "city gas"],
    },
    {
      href: "https://saving.funnyfunny.cloud",
      icon: "🏦",
      title: isKo ? "예금·적금 이자 계산기" : "Savings & Deposit Interest Calculator",
      desc: isKo
        ? "단리·복리 예금 이자·만기금액, 월 납입 적금 만기금액 계산."
        : "Simple/compound deposit interest and maturity; monthly savings maturity.",
      tags: isKo
        ? ["예금", "적금", "이자", "단리", "복리", "만기"]
        : ["savings", "deposit", "interest", "compound", "maturity"],
    },
    {
      href: "https://exchange.funnyfunny.cloud",
      icon: "💱",
      title: isKo ? "환율 계산기" : "Exchange Rate Calculator",
      desc: isKo
        ? "금액·환율로 원화↔외화 변환."
        : "Convert between KRW and foreign currency with amount and rate.",
      tags: isKo
        ? ["환율", "환전", "원화", "외화", "변환"]
        : ["exchange", "currency", "KRW", "conversion"],
    },
    {
      href: "https://unit.funnyfunny.cloud",
      icon: "📐",
      title: isKo ? "단위 변환기" : "Unit Converter",
      desc: isKo
        ? "길이·무게·온도·면적 한 페이지에서 변환. cm↔inch, kg↔lb, ㎡↔평."
        : "Convert length, weight, temperature, area. cm↔inch, kg↔lb, ㎡↔pyeong.",
      tags: isKo
        ? ["단위", "변환", "길이", "무게", "온도", "면적", "평"]
        : ["unit", "converter", "length", "weight", "temperature", "area"],
    },
    {
      href: "https://savings-goal.funnyfunny.cloud",
      icon: "🎯",
      title: isKo ? "목표 저축·월 저축액 계산기" : "Savings Goal & Monthly Amount Calculator",
      desc: isKo
        ? "목표 금액·기간으로 필요 월 저축액 계산."
        : "Calculate required monthly savings for a goal amount and period.",
      tags: isKo
        ? ["목표 저축", "월 저축액", "저축 계획"]
        : ["savings goal", "monthly savings", "planning"],
    },
    {
      href: "https://salary-tax.funnyfunny.cloud",
      icon: "🧾",
      title: isKo ? "간이 세금·실수령 계산기" : "Simple Tax & Take-Home Calculator",
      desc: isKo
        ? "연봉 입력으로 세금·4대보험 공제 후 실수령 참고."
        : "Estimate take-home pay from annual salary (tax & insurance).",
      tags: isKo
        ? ["세금", "실수령", "연봉", "4대보험"]
        : ["tax", "take-home", "salary", "deduction"],
    },
    {
      href: "https://yield.funnyfunny.cloud",
      icon: "📈",
      title: isKo ? "수익률 계산기" : "Yield Calculator",
      desc: isKo
        ? "원금·수익·기간으로 단리·복리 연환산 수익률 계산."
        : "Calculate simple and compound annualized yield from principal and return.",
      tags: isKo
        ? ["수익률", "연환산", "투자", "복리"]
        : ["yield", "return", "investment", "compound"],
    },
    {
      href: "https://age-now.funnyfunny.cloud",
      icon: "🎂",
      title: isKo ? "만 나이·D-day 계산기" : "Age & D-day Calculator",
      desc: isKo
        ? "생년월일로 만 나이, 연 나이, 다음 생일 D-day."
        : "Get international age, Korean age, and next birthday D-day from birth date.",
      tags: isKo
        ? ["만 나이", "연 나이", "D-day", "생일"]
        : ["age", "birthday", "D-day", "calculator"],
    },
    {
      href: "https://discount.funnyfunny.cloud",
      icon: "🏷️",
      title: isKo ? "할인·퍼센트 계산기" : "Discount & Percent Calculator",
      desc: isKo
        ? "정가·할인율 → 할인액·최종가 / 할인가 → 할인율 역산."
        : "Calculate discount amount and final price, or reverse discount rate from price.",
      tags: isKo
        ? ["할인", "퍼센트", "정가", "할인가"]
        : ["discount", "percent", "sale", "price"],
    },
    {
      href: "https://bmi-check.funnyfunny.cloud",
      icon: "⚖️",
      title: isKo ? "BMI 계산기" : "BMI Calculator",
      desc: isKo
        ? "키·몸무게로 BMI와 저체중·정상·과체중·비만 판정."
        : "Calculate BMI and weight category from height and weight.",
      tags: isKo
        ? ["BMI", "비만도", "체중", "키"]
        : ["BMI", "weight", "height", "health"],
    },
    {
      href: "https://wage.funnyfunny.cloud",
      icon: "💵",
      title: isKo ? "일급·시급 계산기" : "Daily & Hourly Wage Calculator",
      desc: isKo
        ? "월급·일급·시급 중 하나로 나머지 환산."
        : "Convert between monthly, daily, and hourly wage.",
      tags: isKo
        ? ["일급", "시급", "월급", "급여"]
        : ["wage", "hourly", "monthly", "salary"],
    },
    {
      href: "https://dsr.funnyfunny.cloud",
      icon: "🏠",
      title: isKo ? "DSR·대출 한도 계산기" : "DSR & Loan Limit Calculator",
      desc: isKo
        ? "연소득·기존 상환액으로 DSR 기준 추가 대출 한도 참고."
        : "Estimate additional loan capacity under DSR cap from income and existing repayments.",
      tags: isKo
        ? ["DSR", "대출 한도", "상환비율", "연소득"]
        : ["DSR", "loan limit", "debt service ratio", "income"],
    },
    {
      href: "https://tip.funnyfunny.cloud",
      icon: "💵",
      title: isKo ? "팁 계산기" : "Tip Calculator",
      desc: isKo
        ? "결제 금액·팁 %로 팁 금액·총 결제액 계산."
        : "Calculate tip amount and total from bill and tip percentage.",
      tags: isKo
        ? ["팁", "팁 계산", "해외", "외식"]
        : ["tip", "gratuity", "travel", "dining"],
    },
    {
      href: "https://annual-leave.funnyfunny.cloud",
      icon: "📅",
      title: isKo ? "연차·휴가 일수 계산기" : "Annual Leave Calculator",
      desc: isKo
        ? "입사일·근속으로 발생 연차 일수 (근로기준법 기준)."
        : "Calculate accrued annual leave days from join date and tenure.",
      tags: isKo
        ? ["연차", "휴가", "근로기준법", "입사일"]
        : ["annual leave", "vacation", "tenure", "labor"],
    },
    {
      href: "https://moving.funnyfunny.cloud",
      icon: "📦",
      title: isKo ? "이사 비용 계산기" : "Moving Cost Calculator",
      desc: isKo
        ? "평수·거리·유형으로 이사비 대략 참고."
        : "Estimate moving cost from size, distance, and type.",
      tags: isKo
        ? ["이사", "이사비", "평수", "거리"]
        : ["moving", "relocation", "cost", "estimate"],
    },
    {
      href: "https://tdee.funnyfunny.cloud",
      icon: "🔥",
      title: isKo ? "BMR·TDEE 계산기" : "BMR & TDEE Calculator",
      desc: isKo
        ? "기초대사량·일일 소모 칼로리 (Mifflin-St Jeor)."
        : "Calculate BMR and daily calorie expenditure (Mifflin-St Jeor).",
      tags: isKo
        ? ["BMR", "TDEE", "칼로리", "기초대사량"]
        : ["BMR", "TDEE", "calorie", "metabolism"],
    },
    {
      href: "https://rent.funnyfunny.cloud",
      icon: "🏠",
      title: isKo ? "보증금·월세·전세 환산 계산기" : "Rent & Deposit Converter",
      desc: isKo
        ? "보증금+월세 ↔ 전세금 대략 환산."
        : "Convert between deposit+monthly rent and jeonse (lump-sum deposit).",
      tags: isKo
        ? ["보증금", "월세", "전세", "환산"]
        : ["deposit", "rent", "jeonse", "convert"],
    },
    {
      href: "https://realtor-fee.funnyfunny.cloud",
      icon: "🏢",
      title: isKo ? "부동산 중개수수료 계산기" : "Realtor Fee Calculator",
      desc: isKo
        ? "거래 금액별 중개수수료 상한 (공인중개사법)."
        : "Calculate maximum realtor fee by transaction amount (Korea).",
      tags: isKo
        ? ["중개수수료", "부동산", "매매", "전세", "월세"]
        : ["realtor fee", "real estate", "transaction", "Korea"],
    },
    {
      href: "https://parking.funnyfunny.cloud",
      icon: "🅿️",
      title: isKo ? "주차 시간·요금 계산기" : "Parking Time & Fee Calculator",
      desc: isKo
        ? "입차·출차 시간과 요금제로 주차비 계산."
        : "Calculate parking fee from in/out time and rate.",
      tags: isKo
        ? ["주차", "주차요금", "입출차"]
        : ["parking", "parking fee", "calculator"],
    },
    {
      href: "https://standard-weight.funnyfunny.cloud",
      icon: "⚖️",
      title: isKo ? "표준체중·권장 체중 계산기" : "Standard Weight Calculator",
      desc: isKo
        ? "키·성별로 표준체중·BMI 정상 범위(18.5~24.9) kg."
        : "Calculate standard weight and healthy BMI range from height and gender.",
      tags: isKo
        ? ["표준체중", "권장 체중", "BMI", "키"]
        : ["standard weight", "BMI", "height", "health"],
    },
    {
      href: "https://installment.funnyfunny.cloud",
      icon: "💳",
      title: isKo ? "할부 이자·수수료 계산기" : "Installment Fee Calculator",
      desc: isKo
        ? "할부 원금·개월·수수료율로 수수료·월 납부액 계산."
        : "Calculate installment fee and monthly payment from principal, months, and rate.",
      tags: isKo
        ? ["할부", "수수료", "카드", "이자"]
        : ["installment", "fee", "credit card", "interest"],
    },
    {
      href: "https://unemployment.funnyfunny.cloud",
      icon: "📋",
      title: isKo ? "실업급여·구직급여 계산기" : "Unemployment Benefit Calculator",
      desc: isKo
        ? "퇴직 전 급여·가입 기간으로 수급 기간·일액 참고."
        : "Estimate unemployment benefit period and daily amount from wage and tenure.",
      tags: isKo
        ? ["실업급여", "구직급여", "고용보험"]
        : ["unemployment", "benefit", "employment insurance"],
    },
    {
      href: "https://unit-price.funnyfunny.cloud",
      icon: "🧮",
      title: isKo ? "단가 계산기" : "Unit Price Calculator",
      desc: isKo
        ? "총액·수량·단가 중 두 값으로 나머지 계산."
        : "Calculate total, quantity, or unit price from the other two.",
      tags: isKo
        ? ["단가", "총액", "수량", "가격"]
        : ["unit price", "total", "quantity", "price"],
    },
    {
      href: "https://parental-leave.funnyfunny.cloud",
      icon: "👶",
      title: isKo ? "출산휴가·육아휴직 급여 계산기" : "Parental Leave Pay Calculator",
      desc: isKo
        ? "월급·휴가 기간으로 출산휴가·육아휴직 급여 참고."
        : "Estimate parental leave pay from monthly wage and leave period.",
      tags: isKo
        ? ["출산휴가", "육아휴직", "급여", "고용보험"]
        : ["parental leave", "maternity", "pay", "employment"],
    },
    {
      href: "https://pension-monthly.funnyfunny.cloud",
      icon: "📊",
      title: isKo ? "연금·월 수령액 계산기" : "Pension Monthly Withdrawal Calculator",
      desc: isKo
        ? "연금 잔액·이자·수령 기간으로 월 수령액 계산."
        : "Calculate monthly pension withdrawal from balance, rate, and period.",
      tags: isKo
        ? ["연금", "월 수령", "퇴직연금", "개인연금"]
        : ["pension", "monthly withdrawal", "retirement", "annuity"],
    },
    {
      href: "https://compare.funnyfunny.cloud",
      icon: "↔️",
      title: isKo ? "두 값 비교 계산기" : "Compare Two Values Calculator",
      desc: isKo
        ? "A vs B → 차이·차이 % 계산."
        : "Calculate difference and percentage difference between two values.",
      tags: isKo
        ? ["비교", "차이", "퍼센트", "A vs B"]
        : ["compare", "difference", "percent", "vs"],
    },
    {
      href: "https://tax-refund.funnyfunny.cloud",
      icon: "🧾",
      title: isKo ? "세금 환급·추가납부 계산기" : "Tax Refund & Additional Tax Calculator",
      desc: isKo
        ? "산출세액 vs 이미 낸 세금 → 환급 또는 추가납부."
        : "Compare calculated tax vs paid tax to get refund or additional amount.",
      tags: isKo
        ? ["세금", "환급", "추가납부", "연말정산"]
        : ["tax", "refund", "additional tax", "year-end"],
    },
    {
      href: "https://weekly-rest.funnyfunny.cloud",
      icon: "📅",
      title: isKo ? "주휴수당 계산기" : "Weekly Rest Pay Calculator",
      desc: isKo
        ? "주 15시간 이상 근로 시 1일분 주휴수당 계산."
        : "Calculate weekly rest pay (1 day) when working 15+ hours per week.",
      tags: isKo
        ? ["주휴수당", "근로기준법", "알바", "시급"]
        : ["weekly rest", "labor", "part-time", "hourly"],
    },
    {
      href: "https://inflation.funnyfunny.cloud",
      icon: "📉",
      title: isKo ? "인플레이션·미래 가치 계산기" : "Inflation & Future Value Calculator",
      desc: isKo
        ? "현재 금액·인플률·기간 → N년 후 같은 구매력(명목 금액)."
        : "Current amount, inflation rate, years → future nominal amount for same purchasing power.",
      tags: isKo
        ? ["인플레이션", "미래 가치", "구매력"]
        : ["inflation", "future value", "purchasing power"],
    },
    {
      href: "https://leave-balance.funnyfunny.cloud",
      icon: "📋",
      title: isKo ? "연차 잔여 일수 계산기" : "Leave Balance Calculator",
      desc: isKo
        ? "올해 연차 일수 − 사용 일수 = 잔여."
        : "Annual leave balance = total days minus used days.",
      tags: isKo
        ? ["연차", "잔여", "휴가"]
        : ["leave", "balance", "vacation"],
    },
    {
      href: "https://debt-ratio.funnyfunny.cloud",
      icon: "📊",
      title: isKo ? "부채 비율 계산기" : "Debt Ratio Calculator",
      desc: isKo
        ? "총 자산·총 부채 → 부채비율 %·순자산."
        : "Total assets and debt → debt ratio % and net worth.",
      tags: isKo
        ? ["부채비율", "자산", "부채", "순자산"]
        : ["debt ratio", "assets", "debt", "net worth"],
    },
    {
      href: "https://savings-rate.funnyfunny.cloud",
      icon: "💰",
      title: isKo ? "저축률 계산기" : "Savings Rate Calculator",
      desc: isKo
        ? "소득·저축액 → 저축률 %."
        : "Income and savings → savings rate %.",
      tags: isKo
        ? ["저축률", "소득", "저축"]
        : ["savings rate", "income", "savings"],
    },
    {
      href: "https://real-rate.funnyfunny.cloud",
      icon: "📐",
      title: isKo ? "실질 이자율 계산기" : "Real Interest Rate Calculator",
      desc: isKo
        ? "명목 이자율 − 인플레이션 ≈ 실질 이자율."
        : "Nominal rate minus inflation ≈ real interest rate.",
      tags: isKo
        ? ["실질 이자율", "명목", "인플레이션"]
        : ["real rate", "nominal", "inflation"],
    },
    {
      href: "https://funnyfunny.cloud/tools/due-date/",
      icon: "📅",
      title: isKo ? "기준일 ± N일 계산기" : "Due Date Calculator",
      desc: isKo ? "기준일에서 N일 전·후 날짜 계산." : "Base date ± N days → result date.",
      tags: isKo ? ["기준일", "D-day", "날짜"] : ["due date", "date", "days"],
    },
    {
      href: "https://funnyfunny.cloud/tools/interest-simple/",
      icon: "💰",
      title: isKo ? "단리 이자 계산기" : "Simple Interest Calculator",
      desc: isKo ? "원금·연이자율·일수 → 단리 이자·만기 합계." : "Principal, annual rate, days → interest and maturity.",
      tags: isKo ? ["단리", "이자", "만기"] : ["simple interest", "interest", "maturity"],
    },
    {
      href: "https://funnyfunny.cloud/tools/calorie-goal/",
      icon: "🔥",
      title: isKo ? "칼로리 목표 계산기" : "Calorie Goal Calculator",
      desc: isKo ? "TDEE·목표(유지/감량/증량) → 일일 칼로리 목표." : "TDEE and goal → daily calorie target.",
      tags: isKo ? ["칼로리", "TDEE", "다이어트"] : ["calorie", "TDEE", "diet"],
    },
    {
      href: "https://funnyfunny.cloud/tools/vacation-cost/",
      icon: "✈️",
      title: isKo ? "여행 비용 계산기" : "Vacation Cost Calculator",
      desc: isKo ? "여행 일수 × 1일 예산 → 총 예상 비용." : "Trip days × daily budget → total cost.",
      tags: isKo ? ["여행", "예산", "비용"] : ["vacation", "budget", "cost"],
    },
    {
      href: "https://funnyfunny.cloud/tools/present-value/",
      icon: "📐",
      title: isKo ? "현재가치 계산기" : "Present Value Calculator",
      desc: isKo ? "N년 후 금액·할인율 → 현재가치(PV)." : "Future amount, discount rate → PV.",
      tags: isKo ? ["현재가치", "할인", "투자"] : ["present value", "discount", "investment"],
    },
    {
      href: "https://funnyfunny.cloud/tools/daily-prorated/",
      icon: "📋",
      title: isKo ? "일할 계산기" : "Daily Prorated Calculator",
      desc: isKo ? "월급·출근일·총 근무일 → 일할 금액." : "Monthly pay, days worked → prorated pay.",
      tags: isKo ? ["일할", "월급", "급여"] : ["prorated", "salary", "pay"],
    },
    {
      href: "https://funnyfunny.cloud/tools/target-yield/",
      icon: "📈",
      title: isKo ? "목표 수익률 계산기" : "Target Yield Calculator",
      desc: isKo ? "원금·목표 금액·기간 → 필요 연환산 수익률(%)." : "Principal, target, period → required annual yield %.",
      tags: isKo ? ["목표 수익률", "연환산", "투자"] : ["target yield", "annualized", "investment"],
    },
    { href: "https://funnyfunny.cloud/tools/compound-interest/", icon: "💰", title: isKo ? "복리 이자 계산기" : "Compound Interest Calculator", desc: isKo ? "원금·연이자·기간 → 만기액(복리)." : "Principal, rate, years → maturity (compound).", tags: isKo ? ["복리", "만기", "예금"] : ["compound", "maturity", "savings"] },
    { href: "https://funnyfunny.cloud/tools/loan-remaining/", icon: "📉", title: isKo ? "대출 잔액 계산기" : "Loan Remaining Calculator", desc: isKo ? "원리금 균등 N회 상환 후 잔액." : "Remaining balance after N payments.", tags: isKo ? ["대출", "잔액", "상환"] : ["loan", "balance", "repayment"] },
    { href: "https://funnyfunny.cloud/tools/break-even/", icon: "⚖️", title: isKo ? "손익분기점 계산기" : "Break-Even Calculator", desc: isKo ? "고정비·변동비·단가 → 손익분기 개수." : "Fixed, variable cost, price → break-even qty.", tags: isKo ? ["손익분기", "고정비", "변동비"] : ["break-even", "fixed", "variable"] },
    { href: "https://funnyfunny.cloud/tools/cagr/", icon: "📈", title: isKo ? "CAGR 계산기" : "CAGR Calculator", desc: isKo ? "시작·종료 금액·기간 → 연평균 성장률 %." : "Start, end, years → CAGR %.", tags: isKo ? ["CAGR", "성장률", "투자"] : ["CAGR", "growth", "investment"] },
    { href: "https://funnyfunny.cloud/tools/roi/", icon: "📊", title: isKo ? "ROI 계산기" : "ROI Calculator", desc: isKo ? "투자금·수익 → 수익률 %." : "Investment, return → ROI %.", tags: isKo ? ["ROI", "수익률", "투자"] : ["ROI", "return", "investment"] },
    { href: "https://funnyfunny.cloud/tools/subscription-yearly/", icon: "📅", title: isKo ? "구독 연간 비용" : "Subscription Yearly Cost", desc: isKo ? "월 구독료 → 연 환산." : "Monthly subscription → yearly.", tags: isKo ? ["구독", "연간", "비용"] : ["subscription", "yearly", "cost"] },
    { href: "https://funnyfunny.cloud/tools/fuel-cost/", icon: "⛽", title: isKo ? "주유 비용 계산기" : "Fuel Cost Calculator", desc: isKo ? "거리·연비·리터당 → 예상 비용." : "Distance, efficiency, price → fuel cost.", tags: isKo ? ["주유", "연비", "비용"] : ["fuel", "efficiency", "cost"] },
    { href: "https://funnyfunny.cloud/tools/emergency-fund/", icon: "🛡️", title: isKo ? "비상금 목표 계산기" : "Emergency Fund Calculator", desc: isKo ? "월 지출 × N개월 → 목표 비상금." : "Monthly expense × months → target.", tags: isKo ? ["비상금", "목표", "저축"] : ["emergency", "fund", "savings"] },
    { href: "https://funnyfunny.cloud/tools/mortgage-monthly/", icon: "🏠", title: isKo ? "주담대 월 상환액" : "Mortgage Monthly Payment", desc: isKo ? "대출금·이자·기간 → 월 상환액." : "Principal, rate, term → monthly payment.", tags: isKo ? ["주담대", "월상환", "대출"] : ["mortgage", "monthly", "loan"] },
    { href: "https://funnyfunny.cloud/tools/fee-per-use/", icon: "🎫", title: isKo ? "이용당 수수료" : "Fee per Use", desc: isKo ? "연 회비 ÷ 이용 횟수 → 1회당 비용." : "Annual fee ÷ uses → cost per use.", tags: isKo ? ["이용당", "회비", "비용"] : ["per use", "fee", "cost"] },
    { href: "https://funnyfunny.cloud/tools/doubling-time/", icon: "⏱️", title: isKo ? "72법칙·배증 기간" : "72 Rule / Doubling Time", desc: isKo ? "연 수익률 % → 2배 걸리는 년수." : "Annual rate % → years to double.", tags: isKo ? ["72법칙", "배증", "복리"] : ["72 rule", "doubling", "compound"] },
    { href: "https://funnyfunny.cloud/tools/pension-lump/", icon: "🏦", title: isKo ? "퇴직연금 일시금 vs 연금" : "Pension Lump vs Annuity", desc: isKo ? "일시금·연금액·기간 → 단순 비교." : "Lump sum vs monthly pension comparison.", tags: isKo ? ["퇴직연금", "일시금", "연금"] : ["pension", "lump", "annuity"] },
    { href: "https://funnyfunny.cloud/tools/child-cost/", icon: "👶", title: isKo ? "자녀 양육비 추정" : "Child Cost Estimate", desc: isKo ? "월 예산·양육 년수 → 연/총 추정." : "Monthly budget, years → annual/total estimate.", tags: isKo ? ["양육비", "자녀", "예산"] : ["child", "cost", "budget"] },
    { href: "https://funnyfunny.cloud/tools/pet-cost/", icon: "🐕", title: isKo ? "반려동물 월 비용" : "Pet Monthly Cost", desc: isKo ? "종류·사료·기타 → 월 예상 비용." : "Type, food, etc → monthly pet cost.", tags: isKo ? ["반려동물", "비용", "사료"] : ["pet", "cost", "monthly"] },
    { href: "https://funnyfunny.cloud/tools/wedding-cost/", icon: "💒", title: isKo ? "결혼 예산 추정" : "Wedding Cost Estimate", desc: isKo ? "하객·식대·기타 → 총 예산 참고." : "Guests, per-person, other → total budget.", tags: isKo ? ["결혼", "예산", "식대"] : ["wedding", "budget", "cost"] },
    { href: "https://funnyfunny.cloud/tools/business-days/", icon: "📆", title: isKo ? "영업일 계산" : "Business Days Calculator", desc: isKo ? "두 날짜 사이 영업일(주말 제외)." : "Business days between two dates.", tags: isKo ? ["영업일", "주말 제외", "날짜"] : ["business days", "weekdays", "date"] },
    { href: "https://funnyfunny.cloud/tools/countdown/", icon: "⏳", title: isKo ? "D-day 카운트다운" : "D-day Countdown", desc: isKo ? "목표일까지 며칠 남았는지." : "Days until target date.", tags: isKo ? ["D-day", "카운트다운", "목표일"] : ["D-day", "countdown", "target"] },
    { href: "https://funnyfunny.cloud/tools/week-number/", icon: "📅", title: isKo ? "주차 계산기" : "Week Number Calculator", desc: isKo ? "해당 날짜가 그해 몇 주차." : "Which week of the year.", tags: isKo ? ["주차", "ISO", "날짜"] : ["week number", "ISO", "date"] },
    { href: "https://funnyfunny.cloud/tools/add-days/", icon: "➕", title: isKo ? "날짜에 일수 더하기" : "Add Days to Date", desc: isKo ? "기준일 + N일 → 결과 날짜." : "Base date + N days → result.", tags: isKo ? ["날짜", "일수", "더하기"] : ["date", "days", "add"] },
    { href: "https://funnyfunny.cloud/tools/time-between/", icon: "⏱️", title: isKo ? "두 시각 사이" : "Time Between", desc: isKo ? "시작·종료 시각 → 경과 시간." : "Start/end time → elapsed.", tags: isKo ? ["시각", "경과", "시간"] : ["time", "elapsed", "duration"] },
    { href: "https://funnyfunny.cloud/tools/work-hours/", icon: "🕐", title: isKo ? "근무시간 계산" : "Work Hours Calculator", desc: isKo ? "출근·퇴근 시각 → 근무 시간." : "Clock in/out → work hours.", tags: isKo ? ["근무", "출퇴근", "시간"] : ["work", "hours", "commute"] },
    { href: "https://funnyfunny.cloud/tools/meeting-cost/", icon: "👥", title: isKo ? "회의 비용 계산" : "Meeting Cost Calculator", desc: isKo ? "인원×시간×시급 → 회의 비용." : "People × time × hourly → cost.", tags: isKo ? ["회의", "비용", "시급"] : ["meeting", "cost", "hourly"] },
    { href: "https://funnyfunny.cloud/tools/age-diff/", icon: "🎂", title: isKo ? "나이 차이 계산" : "Age Difference Calculator", desc: isKo ? "두 생년월일 → 나이 차이(년·일)." : "Two birth dates → age diff.", tags: isKo ? ["나이", "차이", "생년월일"] : ["age", "difference", "birth"] },
    { href: "https://funnyfunny.cloud/tools/protein-goal/", icon: "🥩", title: isKo ? "단백질 목표량" : "Protein Goal", desc: isKo ? "체중·활동량 → 일일 단백질 g." : "Weight, activity → daily protein g.", tags: isKo ? ["단백질", "목표", "운동"] : ["protein", "goal", "fitness"] },
    { href: "https://funnyfunny.cloud/tools/water-intake/", icon: "💧", title: isKo ? "하루 물 권장량" : "Water Intake", desc: isKo ? "체중·활동 → 일일 물 ml." : "Weight, activity → daily water ml.", tags: isKo ? ["물", "권장량", "수분"] : ["water", "intake", "hydration"] },
    { href: "https://funnyfunny.cloud/tools/bmr-only/", icon: "🔥", title: isKo ? "BMR 계산기" : "BMR Calculator", desc: isKo ? "키·몸무게·나이·성별 → 기초대사량." : "Height, weight, age, gender → BMR.", tags: isKo ? ["BMR", "기초대사량", "칼로리"] : ["BMR", "basal", "calorie"] },
    { href: "https://funnyfunny.cloud/tools/one-rep-max/", icon: "🏋️", title: isKo ? "1RM 추정" : "One Rep Max", desc: isKo ? "무게·반복 횟수 → 1회 최대 추정." : "Weight, reps → 1RM estimate.", tags: isKo ? ["1RM", "근력", "웨이트"] : ["1RM", "strength", "weight"] },
    { href: "https://funnyfunny.cloud/tools/pace-calc/", icon: "🏃", title: isKo ? "페이스 계산기" : "Pace Calculator", desc: isKo ? "거리·시간 → km당 pace." : "Distance, time → pace per km.", tags: isKo ? ["페이스", "러닝", "거리"] : ["pace", "running", "distance"] },
    { href: "https://funnyfunny.cloud/tools/calorie-burn/", icon: "🔥", title: isKo ? "운동 칼로리 소모" : "Calorie Burn", desc: isKo ? "종류·시간·체중 → 소모 kcal." : "Activity, time, weight → kcal burn.", tags: isKo ? ["칼로리", "운동", "소모"] : ["calorie", "exercise", "burn"] },
    { href: "https://funnyfunny.cloud/tools/sleep-debt/", icon: "😴", title: isKo ? "수면 부채" : "Sleep Debt", desc: isKo ? "권장 7~8시간 대비 부족 시간." : "Recommended vs actual sleep.", tags: isKo ? ["수면", "부채", "휴식"] : ["sleep", "debt", "rest"] },
    { href: "https://funnyfunny.cloud/tools/bmi-range/", icon: "📊", title: isKo ? "BMI 구간 설명" : "BMI Range", desc: isKo ? "BMI 값 → 저체중/정상/과체중 등." : "BMI value → category.", tags: isKo ? ["BMI", "구간", "체중"] : ["BMI", "range", "weight"] },
    { href: "https://funnyfunny.cloud/tools/ideal-weight/", icon: "⚖️", title: isKo ? "이상 체중 범위" : "Ideal Weight Range", desc: isKo ? "키·성별 → Broca·BMI 기준 범위." : "Height, gender → ideal range.", tags: isKo ? ["이상체중", "Broca", "BMI"] : ["ideal weight", "Broca", "BMI"] },
    { href: "https://funnyfunny.cloud/tools/body-fat-est/", icon: "📉", title: isKo ? "체지방률 추정" : "Body Fat Estimate", desc: isKo ? "BMI·나이·성별 → 체지방률 %." : "BMI, age, gender → body fat %.", tags: isKo ? ["체지방", "추정", "BMI"] : ["body fat", "estimate", "BMI"] },
    { href: "https://funnyfunny.cloud/tools/coffee-yearly/", icon: "☕", title: isKo ? "연간 커피 비용" : "Coffee Yearly Cost", desc: isKo ? "잔당·주 횟수 → 연 비용." : "Per cup, weekly → yearly cost.", tags: isKo ? ["커피", "연간", "비용"] : ["coffee", "yearly", "cost"] },
    { href: "https://funnyfunny.cloud/tools/delivery-yearly/", icon: "🛵", title: isKo ? "배달비 모아보기" : "Delivery Yearly Cost", desc: isKo ? "1회 평균·월 횟수 → 월/연." : "Per order, monthly → cost.", tags: isKo ? ["배달", "비용", "연간"] : ["delivery", "cost", "yearly"] },
    { href: "https://funnyfunny.cloud/tools/ott-total/", icon: "📺", title: isKo ? "OTT 구독 합계" : "OTT Total", desc: isKo ? "넷플·디즈니 등 월 요금 합계." : "Netflix, Disney+ etc monthly total.", tags: isKo ? ["OTT", "구독", "합계"] : ["OTT", "subscription", "total"] },
    { href: "https://funnyfunny.cloud/tools/gym-value/", icon: "💪", title: isKo ? "헬스장 이용당 단가" : "Gym Value per Use", desc: isKo ? "월 회비÷이용 일수 → 1회당." : "Monthly fee ÷ days → per use.", tags: isKo ? ["헬스장", "이용당", "비용"] : ["gym", "per use", "cost"] },
    { href: "https://funnyfunny.cloud/tools/lunch-cost/", icon: "🍱", title: isKo ? "월 점심비" : "Lunch Cost", desc: isKo ? "1인당·출근일 → 월 점심비." : "Per person, work days → monthly.", tags: isKo ? ["점심", "비용", "월"] : ["lunch", "cost", "monthly"] },
    { href: "https://funnyfunny.cloud/tools/cigarette-cost/", icon: "🚬", title: isKo ? "담배 비용" : "Cigarette Cost", desc: isKo ? "갑당·일 소비량 → 월/연." : "Per pack, daily → monthly/yearly.", tags: isKo ? ["담배", "비용"] : ["cigarette", "cost"] },
    { href: "https://funnyfunny.cloud/tools/alcohol-monthly/", icon: "🍺", title: isKo ? "음주 비용" : "Alcohol Monthly Cost", desc: isKo ? "1회 비용·월 횟수 → 월/연." : "Per occasion, monthly → cost.", tags: isKo ? ["음주", "비용"] : ["alcohol", "cost"] },
    { href: "https://funnyfunny.cloud/tools/snack-cost/", icon: "🍪", title: isKo ? "간식 비용" : "Snack Cost", desc: isKo ? "일 평균·일수 → 주/월." : "Daily average, days → cost.", tags: isKo ? ["간식", "비용"] : ["snack", "cost"] },
    { href: "https://funnyfunny.cloud/tools/phone-compare/", icon: "📱", title: isKo ? "요금제 비교" : "Phone Plan Compare", desc: isKo ? "데이터·통화 사용량 → 월 예상." : "Data, voice → monthly estimate.", tags: isKo ? ["요금제", "데이터", "통화"] : ["phone", "data", "plan"] },
    { href: "https://funnyfunny.cloud/tools/car-depreciation/", icon: "🚗", title: isKo ? "차량 감가상각" : "Car Depreciation", desc: isKo ? "구입가·연식·감가율 → 예상 가치." : "Purchase, years, rate → value.", tags: isKo ? ["차량", "감가", "가치"] : ["car", "depreciation", "value"] },
    { href: "https://funnyfunny.cloud/tools/book-budget/", icon: "📚", title: isKo ? "독서 예산" : "Book Budget", desc: isKo ? "권당 가격·월 n권 → 월/연." : "Per book, monthly → budget.", tags: isKo ? ["독서", "예산", "책"] : ["book", "budget", "reading"] },
    { href: "https://funnyfunny.cloud/tools/study-hours/", icon: "📖", title: isKo ? "목표 학습시간" : "Study Hours Goal", desc: isKo ? "시험일·필요 총 시간 → 일일 권장." : "Exam date, total hours → daily.", tags: isKo ? ["학습", "시험", "시간"] : ["study", "exam", "hours"] },
    { href: "https://funnyfunny.cloud/tools/percent-change/", icon: "📊", title: isKo ? "퍼센트 변화" : "Percent Change", desc: isKo ? "이전값·현재값 → 증감 %." : "Before, after → change %.", tags: isKo ? ["퍼센트", "증감"] : ["percent", "change"] },
    { href: "https://funnyfunny.cloud/tools/percent-of/", icon: "%", title: isKo ? "A의 B%" : "Percent Of", desc: isKo ? "전체·비율 % → 해당 금액." : "Total, rate % → amount.", tags: isKo ? ["퍼센트", "비율"] : ["percent", "of"] },
    { href: "https://funnyfunny.cloud/tools/reverse-percent/", icon: "↩️", title: isKo ? "역산 퍼센트" : "Reverse Percent", desc: isKo ? "결과값·비율% → 원래 값." : "Result, rate % → original.", tags: isKo ? ["역산", "퍼센트"] : ["reverse", "percent"] },
    { href: "https://funnyfunny.cloud/tools/margin-markup/", icon: "📐", title: isKo ? "마진 vs 마크업" : "Margin vs Markup", desc: isKo ? "원가·판가 → 마진%·마크업%." : "Cost, price → margin%, markup%.", tags: isKo ? ["마진", "마크업"] : ["margin", "markup"] },
    { href: "https://funnyfunny.cloud/tools/split-percent/", icon: "✂️", title: isKo ? "비율 N빵" : "Split by Ratio", desc: isKo ? "총액·비율 A:B:C → 각 금액." : "Total, ratio → each amount.", tags: isKo ? ["비율", "N빵"] : ["split", "ratio"] },
    { href: "https://funnyfunny.cloud/tools/tax-bracket/", icon: "🧾", title: isKo ? "세율 구간 보기" : "Tax Bracket", desc: isKo ? "과세소득 → 구간별 세율 참고." : "Taxable income → bracket rates.", tags: isKo ? ["세율", "구간"] : ["tax", "bracket"] },
    { href: "https://funnyfunny.cloud/tools/allocation/", icon: "🥧", title: isKo ? "자산 배분" : "Allocation", desc: isKo ? "총액·비율% → 항목별 금액." : "Total, % → per item.", tags: isKo ? ["자산", "배분"] : ["allocation", "asset"] },
    { href: "https://funnyfunny.cloud/tools/growth-rate/", icon: "📈", title: isKo ? "성장률 계산" : "Growth Rate", desc: isKo ? "전기·당기 → 전기대비 %." : "Prev, current → growth %.", tags: isKo ? ["성장률", "전기대비"] : ["growth", "rate"] },
    { href: "https://funnyfunny.cloud/tools/area-convert/", icon: "📐", title: isKo ? "면적 변환" : "Area Convert", desc: isKo ? "㎡·평·sqft·헥타르 변환." : "m², pyeong, sqft, ha.", tags: isKo ? ["면적", "변환"] : ["area", "convert"] },
    { href: "https://funnyfunny.cloud/tools/volume-convert/", icon: "🧪", title: isKo ? "부피 변환" : "Volume Convert", desc: isKo ? "L·mL·gal·cc 변환." : "L, mL, gal, cc.", tags: isKo ? ["부피", "변환"] : ["volume", "convert"] },
    { href: "https://funnyfunny.cloud/tools/speed-convert/", icon: "🚗", title: isKo ? "속도 변환" : "Speed Convert", desc: isKo ? "km/h·m/s·mph 변환." : "km/h, m/s, mph.", tags: isKo ? ["속도", "변환"] : ["speed", "convert"] },
    { href: "https://funnyfunny.cloud/tools/data-size/", icon: "💾", title: isKo ? "데이터 용량" : "Data Size", desc: isKo ? "KB·MB·GB·TB 변환." : "KB, MB, GB, TB.", tags: isKo ? ["데이터", "용량"] : ["data", "size"] },
    { href: "https://funnyfunny.cloud/tools/timezone-diff/", icon: "🌍", title: isKo ? "시간대 차이" : "Timezone Diff", desc: isKo ? "두 도시/UTC offset 차이." : "Two offsets → diff.", tags: isKo ? ["시간대", "시차"] : ["timezone", "diff"] },
    { href: "https://funnyfunny.cloud/tools/pressure-convert/", icon: "🔧", title: isKo ? "압력 변환" : "Pressure Convert", desc: isKo ? "Pa·bar·psi·atm 변환." : "Pa, bar, psi, atm.", tags: isKo ? ["압력", "변환"] : ["pressure", "convert"] },
    { href: "https://funnyfunny.cloud/tools/energy-convert/", icon: "⚡", title: isKo ? "에너지 변환" : "Energy Convert", desc: isKo ? "kcal·kJ·Wh 변환." : "kcal, kJ, Wh.", tags: isKo ? ["에너지", "변환"] : ["energy", "convert"] },
    { href: "https://funnyfunny.cloud/tools/loan-payoff-date/", icon: "📅", title: isKo ? "대출 상환 완료일" : "Loan Payoff Date", desc: isKo ? "월 상환액·잔액·이자 → 예상 완료일." : "Monthly, balance → payoff date.", tags: isKo ? ["대출", "상환일"] : ["loan", "payoff"] },
    { href: "https://funnyfunny.cloud/tools/solar-payback/", icon: "☀️", title: isKo ? "태양광 회수 기간" : "Solar Payback", desc: isKo ? "설치비·연 절감액 → 회수 년수." : "Cost, annual saving → years.", tags: isKo ? ["태양광", "회수"] : ["solar", "payback"] },
    { href: "https://funnyfunny.cloud/tools/carbon-footprint/", icon: "🌱", title: isKo ? "탄소발자국" : "Carbon Footprint", desc: isKo ? "이동·전기 사용 → CO2 추정 kg." : "Travel, electricity → CO2 kg.", tags: isKo ? ["탄소", "CO2"] : ["carbon", "footprint"] },
    { href: "https://funnyfunny.cloud/tools/habit-streak/", icon: "🔥", title: isKo ? "습관 연속 일수" : "Habit Streak", desc: isKo ? "시작일·오늘 → 연속 일수." : "Start, today → streak days.", tags: isKo ? ["습관", "연속"] : ["habit", "streak"] },
    { href: "https://funnyfunny.cloud/tools/dice/", icon: "🎲", title: isKo ? "주사위 뽑기" : "Dice", desc: isKo ? "n면체·개수 → 랜덤 결과." : "Sides, count → random.", tags: isKo ? ["주사위", "랜덤"] : ["dice", "random"] },
    { href: "https://funnyfunny.cloud/tools/marathon-pace/", icon: "🏃", title: isKo ? "마라톤 목표 페이스" : "Marathon Pace", desc: isKo ? "목표 시간·거리 → km당 pace." : "Target time, distance → pace.", tags: isKo ? ["마라톤", "페이스"] : ["marathon", "pace"] },
    { href: "https://funnyfunny.cloud/tools/readability/", icon: "📖", title: isKo ? "글 난이도" : "Readability", desc: isKo ? "텍스트 → 대략적 독해 수준." : "Text → reading level.", tags: isKo ? ["가독성", "난이도"] : ["readability", "text"] },
    { href: "https://funnyfunny.cloud/tools/battery-life/", icon: "🔋", title: isKo ? "배터리 수명 비용" : "Battery Life Cost", desc: isKo ? "기기 가격·예상 사용 년수 → 연 비용." : "Price, years → annual cost.", tags: isKo ? ["배터리", "비용"] : ["battery", "cost"] },
    { href: "https://funnyfunny.cloud/tools/discount-stack/", icon: "🏷️", title: isKo ? "할인 중첩" : "Discount Stack", desc: isKo ? "정가·할인1%·할인2% → 최종가." : "Price, discount % → final.", tags: isKo ? ["할인", "중첩"] : ["discount", "stack"] },
    { href: "https://funnyfunny.cloud/tools/rent-ratio/", icon: "🏠", title: isKo ? "월세 부담비율" : "Rent Ratio", desc: isKo ? "월소득·월세 → 부담률 %." : "Income, rent → burden %.", tags: isKo ? ["월세", "부담률"] : ["rent", "ratio"] },
    { href: "https://funnyfunny.cloud/tools/coin-flip/", icon: "🪙", title: isKo ? "동전 던지기" : "Coin Flip", desc: isKo ? "앞/뒤 랜덤." : "Heads or tails.", tags: isKo ? ["동전", "랜덤"] : ["coin", "random"] },
    { href: "https://funnyfunny.cloud/tools/rps/", icon: "✊", title: isKo ? "가위바위보" : "Rock Paper Scissors", desc: isKo ? "랜덤 대결." : "Random vs you.", tags: isKo ? ["가위바위보", "게임"] : ["rps", "game"] },
    { href: "https://funnyfunny.cloud/tools/random-name/", icon: "👤", title: isKo ? "이름 랜덤 뽑기" : "Random Name", desc: isKo ? "목록에서 1명." : "Pick one from list.", tags: isKo ? ["이름", "랜덤"] : ["name", "random"] },
    { href: "https://funnyfunny.cloud/tools/random-number/", icon: "🔢", title: isKo ? "숫자 랜덤" : "Random Number", desc: isKo ? "최소~최대 범위." : "Min to max.", tags: isKo ? ["숫자", "랜덤"] : ["number", "random"] },
    { href: "https://funnyfunny.cloud/tools/team-split/", icon: "⚽", title: isKo ? "팀 나누기" : "Team Split", desc: isKo ? "이름 → A팀 B팀." : "Names → team A/B.", tags: isKo ? ["팀", "나누기"] : ["team", "split"] },
    { href: "https://funnyfunny.cloud/tools/spin-wheel/", icon: "🎡", title: isKo ? "돌림판" : "Spin Wheel", desc: isKo ? "항목 → 랜덤 선택." : "Items → random pick.", tags: isKo ? ["돌림판", "랜덤"] : ["wheel", "random"] },
    { href: "https://funnyfunny.cloud/tools/card-draw/", icon: "🃏", title: isKo ? "카드 한 장" : "Card Draw", desc: isKo ? "52장에서 1장." : "One from 52.", tags: isKo ? ["카드", "랜덤"] : ["card", "random"] },
    { href: "https://funnyfunny.cloud/tools/bingo-caller/", icon: "🎱", title: isKo ? "빙고 숫자" : "Bingo Caller", desc: isKo ? "1~75 호출." : "1–75 call.", tags: isKo ? ["빙고", "숫자"] : ["bingo", "caller"] },
    { href: "https://funnyfunny.cloud/tools/truth-dare/", icon: "🎯", title: isKo ? "진실 또는 도전" : "Truth or Dare", desc: isKo ? "랜덤 제시." : "Random pick.", tags: isKo ? ["진실", "도전"] : ["truth", "dare"] },
    { href: "https://funnyfunny.cloud/tools/yes-no/", icon: "❓", title: isKo ? "예/아니오" : "Yes or No", desc: isKo ? "랜덤." : "Random.", tags: isKo ? ["예", "아니오"] : ["yes", "no"] },
    { href: "https://funnyfunny.cloud/tools/random-pair/", icon: "👥", title: isKo ? "두 명 매칭" : "Random Pair", desc: isKo ? "이름 2명씩 랜덤." : "Pair names.", tags: isKo ? ["매칭", "랜덤"] : ["pair", "random"] },
    { href: "https://funnyfunny.cloud/tools/order-random/", icon: "🔀", title: isKo ? "순서 랜덤" : "Order Random", desc: isKo ? "이름 → 발표 순서." : "Names → order.", tags: isKo ? ["순서", "랜덤"] : ["order", "random"] },
    { href: "https://funnyfunny.cloud/tools/lottery-six/", icon: "🎰", title: isKo ? "로또 6개 번호" : "Lottery Six", desc: isKo ? "1~45 중 6개." : "6 from 1–45.", tags: isKo ? ["로또", "번호"] : ["lottery", "numbers"] },
    { href: "https://funnyfunny.cloud/tools/word-random/", icon: "📝", title: isKo ? "단어 랜덤" : "Word Random", desc: isKo ? "목록에서 1개." : "One from list.", tags: isKo ? ["단어", "랜덤"] : ["word", "random"] },
    { href: "https://funnyfunny.cloud/tools/color-random/", icon: "🎨", title: isKo ? "랜덤 색상" : "Random Color", desc: isKo ? "HEX 코드." : "HEX code.", tags: isKo ? ["색상", "HEX"] : ["color", "hex"] },
    { href: "https://funnyfunny.cloud/tools/penalty-random/", icon: "😅", title: isKo ? "벌칙 랜덤" : "Penalty Random", desc: isKo ? "목록에서 1개." : "One from list.", tags: isKo ? ["벌칙", "랜덤"] : ["penalty", "random"] },
    { href: "https://funnyfunny.cloud/tools/random-first/", icon: "🏁", title: isKo ? "누가 먼저" : "Random First", desc: isKo ? "N명 중 1명." : "One of N.", tags: isKo ? ["먼저", "랜덤"] : ["first", "random"] },
    { href: "https://funnyfunny.cloud/tools/elimination-order/", icon: "📋", title: isKo ? "탈락 순서" : "Elimination Order", desc: isKo ? "N명 순서 랜덤." : "Random order.", tags: isKo ? ["탈락", "순서"] : ["elimination", "order"] },
    { href: "https://funnyfunny.cloud/tools/emoji-random/", icon: "😀", title: isKo ? "이모지 랜덤" : "Emoji Random", desc: isKo ? "카테고리별." : "By category.", tags: isKo ? ["이모지", "랜덤"] : ["emoji", "random"] },
    { href: "https://funnyfunny.cloud/tools/random-line/", icon: "📄", title: isKo ? "한 줄 랜덤" : "Random Line", desc: isKo ? "여러 줄에서 1줄." : "One line from text.", tags: isKo ? ["한 줄", "랜덤"] : ["line", "random"] },
    { href: "https://funnyfunny.cloud/tools/countdown-timer/", icon: "⏱️", title: isKo ? "카운트다운 타이머" : "Countdown Timer", desc: isKo ? "분·초." : "Min, sec.", tags: isKo ? ["타이머", "카운트다운"] : ["timer", "countdown"] },
    { href: "https://funnyfunny.cloud/tools/stopwatch/", icon: "⏱️", title: isKo ? "스톱워치" : "Stopwatch", desc: isKo ? "시작/일시/리셋." : "Start/pause/reset.", tags: isKo ? ["스톱워치", "시간"] : ["stopwatch", "time"] },
    { href: "https://funnyfunny.cloud/tools/turn-timer/", icon: "🔄", title: isKo ? "턴 타이머" : "Turn Timer", desc: isKo ? "N초 턴 제한." : "N sec per turn.", tags: isKo ? ["턴", "타이머"] : ["turn", "timer"] },
    { href: "https://funnyfunny.cloud/tools/scoreboard/", icon: "📊", title: isKo ? "스코어보드" : "Scoreboard", desc: isKo ? "팀별 점수 +/-." : "Team score +/-.", tags: isKo ? ["스코어", "점수"] : ["score", "board"] },
    { href: "https://funnyfunny.cloud/tools/life-counter/", icon: "❤️", title: isKo ? "생명 카운터" : "Life Counter", desc: isKo ? "HP 트래킹." : "HP tracking.", tags: isKo ? ["생명", "HP"] : ["life", "HP"] },
    { href: "https://funnyfunny.cloud/tools/game-timer/", icon: "🎮", title: isKo ? "게임 타이머" : "Game Timer", desc: isKo ? "플레이어별 N분." : "N min per player.", tags: isKo ? ["게임", "타이머"] : ["game", "timer"] },
    { href: "https://funnyfunny.cloud/tools/score-keeper/", icon: "📋", title: isKo ? "점수 기록" : "Score Keeper", desc: isKo ? "2~4인 점수." : "2–4 player score.", tags: isKo ? ["점수", "기록"] : ["score", "keeper"] },
    { href: "https://funnyfunny.cloud/tools/timer-bomb/", icon: "💣", title: isKo ? "폭탄 타이머" : "Timer Bomb", desc: isKo ? "랜덤 시간 후 알림." : "Random time then boom.", tags: isKo ? ["폭탄", "타이머"] : ["bomb", "timer"] },
    { href: "https://funnyfunny.cloud/tools/quick-draw/", icon: "🤠", title: isKo ? "빠른 손" : "Quick Draw", desc: isKo ? "준비 후 GO 랜덤." : "Ready then GO.", tags: isKo ? ["빠른 손", "게임"] : ["quick", "draw"] },
    { href: "https://funnyfunny.cloud/tools/reaction-test/", icon: "⚡", title: isKo ? "반응 속도" : "Reaction Test", desc: isKo ? "클릭 반응 ms." : "Click reaction ms.", tags: isKo ? ["반응", "속도"] : ["reaction", "test"] },
    { href: "https://funnyfunny.cloud/tools/dice-d20/", icon: "🎲", title: isKo ? "d20 주사위" : "d20 Dice", desc: isKo ? "RPG 1d20." : "RPG 1d20.", tags: isKo ? ["d20", "RPG"] : ["d20", "rpg"] },
    { href: "https://funnyfunny.cloud/tools/dice-2d6/", icon: "🎲", title: isKo ? "2d6" : "2d6", desc: isKo ? "두 개 6면체 합." : "Two d6 sum.", tags: isKo ? ["주사위", "2d6"] : ["dice", "2d6"] },
    { href: "https://funnyfunny.cloud/tools/dice-d100/", icon: "🎲", title: isKo ? "d100" : "d100", desc: isKo ? "1~100." : "1–100.", tags: isKo ? ["d100", "주사위"] : ["d100", "dice"] },
    { href: "https://funnyfunny.cloud/tools/dice-fate/", icon: "🔮", title: isKo ? "운세 주사위" : "Fate Dice", desc: isKo ? "긍정/부정/중립." : "Positive/negative/neutral.", tags: isKo ? ["운세", "주사위"] : ["fate", "dice"] },
    { href: "https://funnyfunny.cloud/tools/card-deck/", icon: "🃏", title: isKo ? "카드 덱 뽑기" : "Card Deck", desc: isKo ? "52장에서 1장." : "One from 52.", tags: isKo ? ["카드", "덱"] : ["card", "deck"] },
    { href: "https://funnyfunny.cloud/tools/uno-draw/", icon: "🃏", title: isKo ? "UNO 드로우" : "UNO Draw", desc: isKo ? "1~4장 랜덤." : "1–4 cards.", tags: isKo ? ["UNO", "드로우"] : ["uno", "draw"] },
    { href: "https://funnyfunny.cloud/tools/rps-lizard-spock/", icon: "✋", title: isKo ? "가위바위보 확장" : "RPS Lizard Spock", desc: isKo ? "5가지." : "Five choices.", tags: isKo ? ["가위바위보", "확장"] : ["rps", "lizard"] },
    { href: "https://funnyfunny.cloud/tools/coin-flip-3/", icon: "🪙", title: isKo ? "동전 3번" : "Coin Flip 3", desc: isKo ? "3회 던지기." : "Flip 3 times.", tags: isKo ? ["동전", "3번"] : ["coin", "flip"] },
    { href: "https://funnyfunny.cloud/tools/dice-pool/", icon: "🎲", title: isKo ? "다이스 풀" : "Dice Pool", desc: isKo ? "nD6 중 5 이상 개수." : "nD6 count ≥5.", tags: isKo ? ["다이스", "풀"] : ["dice", "pool"] },
    { href: "https://funnyfunny.cloud/tools/card-hand/", icon: "🃏", title: isKo ? "카드 5장" : "Card Hand", desc: isKo ? "5장 핸드 랜덤." : "Random 5 cards.", tags: isKo ? ["카드", "5장"] : ["card", "hand"] },
    { href: "https://funnyfunny.cloud/tools/mafia-role/", icon: "🕵️", title: isKo ? "마피아 역할" : "Mafia Role", desc: isKo ? "시민/마피아 배정." : "Citizen/mafia assign.", tags: isKo ? ["마피아", "역할"] : ["mafia", "role"] },
    { href: "https://funnyfunny.cloud/tools/werewolf-role/", icon: "🐺", title: isKo ? "늑대인간 역할" : "Werewolf Role", desc: isKo ? "역할 랜덤 배정." : "Role random assign.", tags: isKo ? ["늑대인간", "역할"] : ["werewolf", "role"] },
    { href: "https://funnyfunny.cloud/tools/charade-word/", icon: "🎭", title: isKo ? "제시어 (몸으로)" : "Charade Word", desc: isKo ? "제시어 랜덤." : "Random word.", tags: isKo ? ["제시어", "몸으로"] : ["charade", "word"] },
    { href: "https://funnyfunny.cloud/tools/pictionary-word/", icon: "🖌️", title: isKo ? "그림 제시어" : "Pictionary Word", desc: isKo ? "그리기 게임용." : "Drawing game word.", tags: isKo ? ["그림", "제시어"] : ["pictionary", "word"] },
    { href: "https://funnyfunny.cloud/tools/secret-santa/", icon: "🎅", title: isKo ? "시크릿 산타" : "Secret Santa", desc: isKo ? "이름 → 누가 누구에게." : "Who gives to whom.", tags: isKo ? ["시크릿 산타", "매칭"] : ["secret", "santa"] },
    { href: "https://funnyfunny.cloud/tools/dinner-picker/", icon: "🍽️", title: isKo ? "오늘 뭐 먹지" : "Dinner Picker", desc: isKo ? "메뉴 랜덤." : "Random menu.", tags: isKo ? ["메뉴", "랜덤"] : ["dinner", "picker"] },
    { href: "https://funnyfunny.cloud/tools/movie-picker/", icon: "🎬", title: isKo ? "영화 고르기" : "Movie Picker", desc: isKo ? "목록에서 1편." : "One from list.", tags: isKo ? ["영화", "랜덤"] : ["movie", "picker"] },
    { href: "https://funnyfunny.cloud/tools/song-random/", icon: "🎵", title: isKo ? "노래 랜덤" : "Song Random", desc: isKo ? "목록에서 1곡." : "One from list.", tags: isKo ? ["노래", "랜덤"] : ["song", "random"] },
    { href: "https://funnyfunny.cloud/tools/tier-picker/", icon: "🏆", title: isKo ? "등급 랜덤" : "Tier Picker", desc: isKo ? "S/A/B/C." : "S/A/B/C/D.", tags: isKo ? ["등급", "랜덤"] : ["tier", "picker"] },
    { href: "https://funnyfunny.cloud/tools/mood-random/", icon: "🌈", title: isKo ? "기분 랜덤" : "Mood Random", desc: isKo ? "이모지 기분 1개." : "Random mood emoji.", tags: isKo ? ["기분", "랜덤"] : ["mood", "random"] },
    { href: "https://funnyfunny.cloud/tools/nickname-gen/", icon: "🎮", title: isKo ? "닉네임 생성기" : "Nickname Generator", desc: isKo ? "랜덤 닉네임." : "Random nickname.", tags: isKo ? ["닉네임", "게임"] : ["nickname", "game"] },
    { href: "https://funnyfunny.cloud/tools/couple-name/", icon: "💕", title: isKo ? "커플 이름 합성" : "Couple Name", desc: isKo ? "두 이름 → 커플명." : "Two names → couple name.", tags: isKo ? ["커플", "이름"] : ["couple", "name"] },
    { href: "https://funnyfunny.cloud/tools/mbti-random/", icon: "🧠", title: isKo ? "MBTI 랜덤" : "MBTI Random", desc: isKo ? "16가지 중 1개." : "One of 16.", tags: isKo ? ["MBTI", "랜덤"] : ["mbti", "random"] },
    { href: "https://funnyfunny.cloud/tools/lucky-number/", icon: "🍀", title: isKo ? "행운의 숫자" : "Lucky Number", desc: isKo ? "1~99 랜덤." : "1–99 random.", tags: isKo ? ["행운", "숫자"] : ["lucky", "number"] },
    { href: "https://funnyfunny.cloud/tools/fortune-cookie/", icon: "🥠", title: isKo ? "포춘 쿠키" : "Fortune Cookie", desc: isKo ? "한줄 메시지." : "One-line message.", tags: isKo ? ["포춘", "메시지"] : ["fortune", "message"] },
    { href: "https://funnyfunny.cloud/tools/compliment-random/", icon: "💝", title: isKo ? "칭찬 한마디" : "Compliment Random", desc: isKo ? "칭찬 문구 랜덤." : "Random compliment.", tags: isKo ? ["칭찬", "랜덤"] : ["compliment", "random"] },
    { href: "https://funnyfunny.cloud/tools/excuse-generator/", icon: "😅", title: isKo ? "변명 생성기" : "Excuse Generator", desc: isKo ? "재미 변명 한줄." : "Fun excuse one-liner.", tags: isKo ? ["변명", "재미"] : ["excuse", "fun"] },
    { href: "https://funnyfunny.cloud/tools/decision-wheel/", icon: "🎡", title: isKo ? "결정 돌림판" : "Decision Wheel", desc: isKo ? "예/아니오/다시." : "Yes/No/Again.", tags: isKo ? ["결정", "돌림판"] : ["decision", "wheel"] },
    { href: "https://funnyfunny.cloud/tools/bottle-spin/", icon: "🍾", title: isKo ? "병 돌리기" : "Bottle Spin", desc: isKo ? "방향 랜덤." : "Random direction.", tags: isKo ? ["병", "진실게임"] : ["bottle", "game"] },
    { href: "https://funnyfunny.cloud/tools/random-date/", icon: "📅", title: isKo ? "랜덤 날짜" : "Random Date", desc: isKo ? "올해 안 특정일." : "Random date this year.", tags: isKo ? ["날짜", "랜덤"] : ["date", "random"] },
    { href: "https://funnyfunny.cloud/tools/tarot-single/", icon: "🃏", title: isKo ? "타로 한 장" : "Tarot Single", desc: isKo ? "카드+한줄 해석." : "Card + one-line.", tags: isKo ? ["타로", "운세"] : ["tarot", "fortune"] },
    { href: "https://funnyfunny.cloud/tools/horoscope-daily/", icon: "⭐", title: isKo ? "오늘의 별자리" : "Horoscope Daily", desc: isKo ? "별자리별 한줄 운세." : "One-line per sign.", tags: isKo ? ["별자리", "운세"] : ["horoscope", "fortune"] },
    { href: "https://funnyfunny.cloud/tools/mood-ring/", icon: "💍", title: isKo ? "무드링" : "Mood Ring", desc: isKo ? "색상+기분." : "Color + mood.", tags: isKo ? ["무드링", "기분"] : ["mood ring", "mood"] },
    { href: "https://funnyfunny.cloud/tools/random-advice/", icon: "💡", title: isKo ? "랜덤 조언" : "Random Advice", desc: isKo ? "조언 한줄." : "One-line advice.", tags: isKo ? ["조언", "랜덤"] : ["advice", "random"] },
    { href: "https://funnyfunny.cloud/tools/would-you-rather/", icon: "🤔", title: isKo ? "둘 중 하나" : "Would You Rather", desc: isKo ? "질문 랜덤." : "Random question.", tags: isKo ? ["둘 중 하나", "게임"] : ["would you rather", "game"] },
    { href: "https://funnyfunny.cloud/tools/never-have-i/", icon: "🙈", title: isKo ? "나는 한번도" : "Never Have I Ever", desc: isKo ? "문장 랜덤." : "Random sentence.", tags: isKo ? ["나는 한번도", "게임"] : ["never have i", "game"] },
    { href: "https://funnyfunny.cloud/tools/this-or-that/", icon: "⚖️", title: isKo ? "이것 or 저것" : "This or That", desc: isKo ? "A/B 선택 랜덤." : "A or B random.", tags: isKo ? ["선택", "랜덤"] : ["this or that", "choice"] },
    { href: "https://funnyfunny.cloud/tools/random-challenge/", icon: "🎯", title: isKo ? "오늘의 챌린지" : "Random Challenge", desc: isKo ? "챌린지 1가지." : "One challenge.", tags: isKo ? ["챌린지", "오늘"] : ["challenge", "daily"] },
    { href: "https://funnyfunny.cloud/tools/gratitude-pick/", icon: "🙏", title: isKo ? "감사 뽑기" : "Gratitude Pick", desc: isKo ? "감사할 것 1가지." : "One thing to be grateful for.", tags: isKo ? ["감사", "마음챙김"] : ["gratitude", "mindful"] },
    { href: "https://funnyfunny.cloud/tools/hobby-suggest/", icon: "🎨", title: isKo ? "취미 추천" : "Hobby Suggest", desc: isKo ? "취미 1개 랜덤." : "One hobby random.", tags: isKo ? ["취미", "추천"] : ["hobby", "suggest"] },
    { href: "https://funnyfunny.cloud/tools/weekend-idea/", icon: "📆", title: isKo ? "주말 뭐할지" : "Weekend Idea", desc: isKo ? "할 일 아이디어 1개." : "One weekend idea.", tags: isKo ? ["주말", "아이디어"] : ["weekend", "idea"] },
    { href: "https://funnyfunny.cloud/tools/coffee-order/", icon: "☕", title: isKo ? "커피 메뉴" : "Coffee Order", desc: isKo ? "메뉴 랜덤." : "Random menu.", tags: isKo ? ["커피", "메뉴"] : ["coffee", "menu"] },
    { href: "https://funnyfunny.cloud/tools/workout-random/", icon: "💪", title: isKo ? "오늘의 운동" : "Workout Random", desc: isKo ? "운동 종목 1개." : "One workout.", tags: isKo ? ["운동", "홈트"] : ["workout", "fitness"] },
    { href: "https://funnyfunny.cloud/tools/book-suggest/", icon: "📚", title: isKo ? "읽을 책" : "Book Suggest", desc: isKo ? "장르/테마 랜덤." : "Genre/theme random.", tags: isKo ? ["책", "장르"] : ["book", "genre"] },
    { href: "https://funnyfunny.cloud/tools/movie-genre/", icon: "🎬", title: isKo ? "볼 영화" : "Movie Genre", desc: isKo ? "장르 랜덤." : "Random genre.", tags: isKo ? ["영화", "장르"] : ["movie", "genre"] },
    { href: "https://funnyfunny.cloud/tools/korean-name/", icon: "✏️", title: isKo ? "한글 이름 생성" : "Korean Name", desc: isKo ? "이름 랜덤 생성." : "Random name gen.", tags: isKo ? ["이름", "한글"] : ["korean name", "name"] },
    { href: "https://funnyfunny.cloud/tools/team-name-gen/", icon: "👥", title: isKo ? "팀 이름 생성" : "Team Name Gen", desc: isKo ? "팀명 랜덤." : "Random team name.", tags: isKo ? ["팀명", "생성"] : ["team name", "gen"] },
    { href: "https://funnyfunny.cloud/tools/slogan-random/", icon: "💬", title: isKo ? "슬로건 랜덤" : "Slogan Random", desc: isKo ? "캐치프레이즈 한줄." : "One-line slogan.", tags: isKo ? ["슬로건", "캐치프레이즈"] : ["slogan", "tagline"] },
    { href: "https://funnyfunny.cloud/tools/daily-quote/", icon: "📜", title: isKo ? "오늘의 명언" : "Daily Quote", desc: isKo ? "명언 한줄." : "One-line quote.", tags: isKo ? ["명언", "오늘"] : ["quote", "daily"] },
    { href: "https://funnyfunny.cloud/tools/emoji-combo/", icon: "😀", title: isKo ? "이모지 조합" : "Emoji Combo", desc: isKo ? "이모지 2~3개." : "2–3 emojis.", tags: isKo ? ["이모지", "조합"] : ["emoji", "combo"] },
    { href: "https://funnyfunny.cloud/tools/first-letter/", icon: "🔤", title: isKo ? "첫글자 단어" : "First Letter", desc: isKo ? "알파벳+단어 랜덤." : "Letter + word random.", tags: isKo ? ["첫글자", "단어"] : ["first letter", "word"] },
    { href: "https://funnyfunny.cloud/tools/random-food/", icon: "🍽️", title: isKo ? "오늘 뭐 먹지" : "Random Food", desc: isKo ? "음식 종류 랜덤." : "음식 종류 랜덤.", tags: isKo ? ["random", "food"] : ["random", "food"] },
    { href: "https://funnyfunny.cloud/tools/magic-8-ball/", icon: "🔮", title: isKo ? "매직 8볼" : "Magic 8 Ball", desc: isKo ? "예/아니오/다시 답변." : "예/아니오/다시 답변.", tags: isKo ? ["magic", "8"] : ["magic", "8"] },
    { href: "https://funnyfunny.cloud/tools/pet-name-gen/", icon: "🐾", title: isKo ? "반려동물 이름 생성" : "Pet Name Gen", desc: isKo ? "이름 랜덤 생성." : "이름 랜덤 생성.", tags: isKo ? ["pet", "name"] : ["pet", "name"] },
    { href: "https://funnyfunny.cloud/tools/band-name-gen/", icon: "🎸", title: isKo ? "밴드 이름 생성" : "Band Name Gen", desc: isKo ? "밴드명 랜덤." : "밴드명 랜덤.", tags: isKo ? ["band", "name"] : ["band", "name"] },
    { href: "https://funnyfunny.cloud/tools/dinner-roulette/", icon: "🎲", title: isKo ? "저녁 룰렛" : "Dinner Roulette", desc: isKo ? "저녁 메뉴 랜덤." : "저녁 메뉴 랜덤.", tags: isKo ? ["dinner", "roulette"] : ["dinner", "roulette"] },
    { href: "https://funnyfunny.cloud/tools/affirmation-daily/", icon: "✨", title: isKo ? "오늘의 긍정 한마디" : "Affirmation Daily", desc: isKo ? "긍정 확언 문장." : "긍정 확언 문장.", tags: isKo ? ["affirmation", "daily"] : ["affirmation", "daily"] },
    { href: "https://funnyfunny.cloud/tools/birth-flower/", icon: "🌸", title: isKo ? "생일 꽃" : "Birth Flower", desc: isKo ? "월별 탄생화 랜덤." : "월별 탄생화 랜덤.", tags: isKo ? ["birth", "flower"] : ["birth", "flower"] },
    { href: "https://funnyfunny.cloud/tools/icebreaker/", icon: "💬", title: isKo ? "아이스브레이커 질문" : "Icebreaker", desc: isKo ? "대화 시작 질문." : "대화 시작 질문.", tags: isKo ? ["icebreaker", "랜덤"] : ["icebreaker", "random"] },
    { href: "https://funnyfunny.cloud/tools/dare-random/", icon: "😈", title: isKo ? "랜덤 질문 (진실게임)" : "Dare Random", desc: isKo ? "진실 또는 도전 질문." : "진실 또는 도전 질문.", tags: isKo ? ["dare", "random"] : ["dare", "random"] },
    { href: "https://funnyfunny.cloud/tools/color-palette/", icon: "🎨", title: isKo ? "랜덤 컬러 팔레트" : "Color Palette", desc: isKo ? "색상 이름 3개." : "색상 이름 3개.", tags: isKo ? ["color", "palette"] : ["color", "palette"] },
    { href: "https://funnyfunny.cloud/tools/number-lucky/", icon: "🍀", title: isKo ? "오늘의 행운 숫자" : "Number Lucky", desc: isKo ? "1~100 랜덤." : "1~100 랜덤.", tags: isKo ? ["number", "lucky"] : ["number", "lucky"] },
    { href: "https://funnyfunny.cloud/tools/conversation-starter/", icon: "🗣️", title: isKo ? "대화 시작 질문" : "Conversation Starter", desc: isKo ? "질문 한 줄." : "질문 한 줄.", tags: isKo ? ["conversation", "starter"] : ["conversation", "starter"] },
    { href: "https://funnyfunny.cloud/tools/recipe-roulette/", icon: "👨‍🍳", title: isKo ? "요리 룰렛" : "Recipe Roulette", desc: isKo ? "요리 종류 랜덤." : "요리 종류 랜덤.", tags: isKo ? ["recipe", "roulette"] : ["recipe", "roulette"] },
    { href: "https://funnyfunny.cloud/tools/gift-idea/", icon: "🎁", title: isKo ? "선물 아이디어" : "Gift Idea", desc: isKo ? "선물 1가지." : "선물 1가지.", tags: isKo ? ["gift", "idea"] : ["gift", "idea"] },
    { href: "https://funnyfunny.cloud/tools/date-idea/", icon: "💕", title: isKo ? "데이트 아이디어" : "Date Idea", desc: isKo ? "데이트 1가지." : "데이트 1가지.", tags: isKo ? ["date", "idea"] : ["date", "idea"] },
    { href: "https://funnyfunny.cloud/tools/motivation-daily/", icon: "🔥", title: isKo ? "오늘의 동기부여" : "Motivation Daily", desc: isKo ? "동기부여 한 줄." : "동기부여 한 줄.", tags: isKo ? ["motivation", "daily"] : ["motivation", "daily"] },
    { href: "https://funnyfunny.cloud/tools/mantra-daily/", icon: "🧘", title: isKo ? "오늘의 멘트" : "Mantra Daily", desc: isKo ? "멘트 한 줄." : "멘트 한 줄.", tags: isKo ? ["mantra", "daily"] : ["mantra", "daily"] },
    { href: "https://funnyfunny.cloud/tools/two-truths-lie/", icon: "🤥", title: isKo ? "두 진실 한 거짓" : "Two Truths Lie", desc: isKo ? "질문 3개 (둘은 진실, 하나는 거짓)." : "질문 3개 (둘은 진실, 하나는 거짓).", tags: isKo ? ["two", "truths"] : ["two", "truths"] },
    { href: "https://funnyfunny.cloud/tools/random-superpower/", icon: "🦸", title: isKo ? "랜덤 슈퍼파워" : "Random Superpower", desc: isKo ? "초능력 1가지." : "초능력 1가지.", tags: isKo ? ["random", "superpower"] : ["random", "superpower"] },
    { href: "https://funnyfunny.cloud/tools/random-country/", icon: "🌍", title: isKo ? "랜덤 나라" : "Random Country", desc: isKo ? "나라 1개." : "나라 1개.", tags: isKo ? ["random", "country"] : ["random", "country"] },
    { href: "https://funnyfunny.cloud/tools/random-job/", icon: "💼", title: isKo ? "랜덤 직업" : "Random Job", desc: isKo ? "직업 1개." : "직업 1개.", tags: isKo ? ["random", "job"] : ["random", "job"] },
    { href: "https://funnyfunny.cloud/tools/tongue-twister/", icon: "👅", title: isKo ? "쉬운 말맛힘" : "Tongue Twister", desc: isKo ? "말맛힘 문장." : "말맛힘 문장.", tags: isKo ? ["tongue", "twister"] : ["tongue", "twister"] },
    { href: "https://funnyfunny.cloud/tools/riddle-daily/", icon: "🧩", title: isKo ? "오늘의 수수께끼" : "Riddle Daily", desc: isKo ? "수수께끼 한 개." : "수수께끼 한 개.", tags: isKo ? ["riddle", "daily"] : ["riddle", "daily"] },
    { href: "https://funnyfunny.cloud/tools/roast-mild/", icon: "😏", title: isKo ? "친근한 놀림 한마디" : "Roast Mild", desc: isKo ? "가벼운 놀림." : "가벼운 놀림.", tags: isKo ? ["roast", "mild"] : ["roast", "mild"] },
    { href: "https://funnyfunny.cloud/tools/pep-talk/", icon: "💪", title: isKo ? "격려 한마디" : "Pep Talk", desc: isKo ? "격려 문장." : "격려 문장.", tags: isKo ? ["pep", "talk"] : ["pep", "talk"] },
    { href: "https://funnyfunny.cloud/tools/cocktail-random/", icon: "🍹", title: isKo ? "칵테일 랜덤" : "Cocktail Random", desc: isKo ? "칵테일 1개." : "칵테일 1개.", tags: isKo ? ["cocktail", "random"] : ["cocktail", "random"] },
    { href: "https://funnyfunny.cloud/tools/dessert-roulette/", icon: "🍰", title: isKo ? "디저트 룰렛" : "Dessert Roulette", desc: isKo ? "디저트 1개." : "디저트 1개.", tags: isKo ? ["dessert", "roulette"] : ["dessert", "roulette"] },
    { href: "https://funnyfunny.cloud/tools/travel-destination/", icon: "✈️", title: isKo ? "여행지 랜덤" : "Travel Destination", desc: isKo ? "여행지 1곳." : "여행지 1곳.", tags: isKo ? ["travel", "destination"] : ["travel", "destination"] },
    { href: "https://funnyfunny.cloud/tools/weekend-trip/", icon: "🗺️", title: isKo ? "주말 여행 아이디어" : "Weekend Trip", desc: isKo ? "주말 여행 1가지." : "주말 여행 1가지.", tags: isKo ? ["weekend", "trip"] : ["weekend", "trip"] },
    { href: "https://funnyfunny.cloud/tools/indoor-activity/", icon: "🏠", title: isKo ? "실내 활동 추천" : "Indoor Activity", desc: isKo ? "실내 활동 1가지." : "실내 활동 1가지.", tags: isKo ? ["indoor", "activity"] : ["indoor", "activity"] },
    { href: "https://funnyfunny.cloud/tools/outdoor-activity/", icon: "🌳", title: isKo ? "야외 활동 추천" : "Outdoor Activity", desc: isKo ? "야외 활동 1가지." : "야외 활동 1가지.", tags: isKo ? ["outdoor", "activity"] : ["outdoor", "activity"] },
    { href: "https://funnyfunny.cloud/tools/rainy-day/", icon: "🌧️", title: isKo ? "비오는 날 할 일" : "Rainy Day", desc: isKo ? "비 오는 날 활동." : "비 오는 날 활동.", tags: isKo ? ["rainy", "day"] : ["rainy", "day"] },
    { href: "https://funnyfunny.cloud/tools/playlist-mood/", icon: "🎵", title: isKo ? "플레이리스트 무드" : "Playlist Mood", desc: isKo ? "무드 1가지." : "무드 1가지.", tags: isKo ? ["playlist", "mood"] : ["playlist", "mood"] },
    { href: "https://funnyfunny.cloud/tools/study-tip/", icon: "📚", title: isKo ? "공부 팁 한줄" : "Study Tip", desc: isKo ? "공부 팁." : "공부 팁.", tags: isKo ? ["study", "tip"] : ["study", "tip"] },
    { href: "https://funnyfunny.cloud/tools/sleep-tip/", icon: "😴", title: isKo ? "수면 팁 한줄" : "Sleep Tip", desc: isKo ? "수면 팁." : "수면 팁.", tags: isKo ? ["sleep", "tip"] : ["sleep", "tip"] },
    { href: "https://funnyfunny.cloud/tools/focus-tip/", icon: "🎯", title: isKo ? "집중 팁 한줄" : "Focus Tip", desc: isKo ? "집중 팁." : "집중 팁.", tags: isKo ? ["focus", "tip"] : ["focus", "tip"] },
    { href: "https://funnyfunny.cloud/tools/random-act-kindness/", icon: "💝", title: isKo ? "랜덤 친절 행동" : "Random Act Kindness", desc: isKo ? "친절한 행동 1가지." : "친절한 행동 1가지.", tags: isKo ? ["random", "act"] : ["random", "act"] },
    { href: "https://funnyfunny.cloud/tools/self-care-idea/", icon: "🛁", title: isKo ? "셀프케어 아이디어" : "Self Care Idea", desc: isKo ? "셀프케어 1가지." : "셀프케어 1가지.", tags: isKo ? ["self", "care"] : ["self", "care"] },
    { href: "https://funnyfunny.cloud/tools/gratitude-daily/", icon: "🙏", title: isKo ? "오늘 감사할 것" : "Gratitude Daily", desc: isKo ? "감사할 대상 1가지." : "감사할 대상 1가지.", tags: isKo ? ["gratitude", "daily"] : ["gratitude", "daily"] },
    { href: "https://funnyfunny.cloud/tools/letter-to-self/", icon: "✉️", title: isKo ? "미래의 나에게" : "Letter To Self", desc: isKo ? "한 줄 메시지." : "한 줄 메시지.", tags: isKo ? ["letter", "to"] : ["letter", "to"] },
    { href: "https://funnyfunny.cloud/tools/enneagram-random/", icon: "9️⃣", title: isKo ? "에니어그램 랜덤" : "Enneagram Random", desc: isKo ? "1~9번 중 1개." : "1~9번 중 1개.", tags: isKo ? ["enneagram", "random"] : ["enneagram", "random"] },
    { href: "https://funnyfunny.cloud/tools/love-language/", icon: "💕", title: isKo ? "사랑의 언어 랜덤" : "Love Language", desc: isKo ? "사랑의 언어 1가지." : "사랑의 언어 1가지.", tags: isKo ? ["love", "language"] : ["love", "language"] },
    { href: "https://funnyfunny.cloud/tools/spirit-animal/", icon: "🦊", title: isKo ? "스피릿 애니멀" : "Spirit Animal", desc: isKo ? "동물 1마리." : "동물 1마리.", tags: isKo ? ["spirit", "animal"] : ["spirit", "animal"] },
    { href: "https://funnyfunny.cloud/tools/hogwarts-house/", icon: "⚡", title: isKo ? "호그와트 기숙사" : "Hogwarts House", desc: isKo ? "기숙사 1개." : "기숙사 1개.", tags: isKo ? ["hogwarts", "house"] : ["hogwarts", "house"] },
    { href: "https://funnyfunny.cloud/tools/harry-potter-random/", icon: "🪄", title: isKo ? "해리포터 랜덤" : "Harry Potter Random", desc: isKo ? "캐릭터·아이템." : "캐릭터·아이템.", tags: isKo ? ["harry", "potter"] : ["harry", "potter"] },
    { href: "https://funnyfunny.cloud/tools/kdrama-pick/", icon: "📺", title: isKo ? "드라마 추천" : "Kdrama Pick", desc: isKo ? "장르 1개." : "장르 1개.", tags: isKo ? ["kdrama", "pick"] : ["kdrama", "pick"] },
    { href: "https://funnyfunny.cloud/tools/anime-pick/", icon: "🎌", title: isKo ? "애니 추천" : "Anime Pick", desc: isKo ? "장르 1개." : "장르 1개.", tags: isKo ? ["anime", "pick"] : ["anime", "pick"] },
    { href: "https://funnyfunny.cloud/tools/podcast-genre/", icon: "🎙️", title: isKo ? "팟캐스트 장르" : "Podcast Genre", desc: isKo ? "장르 1개." : "장르 1개.", tags: isKo ? ["podcast", "genre"] : ["podcast", "genre"] },
    { href: "https://funnyfunny.cloud/tools/writing-prompt/", icon: "✍️", title: isKo ? "글쓰기 주제" : "Writing Prompt", desc: isKo ? "주제 1개." : "주제 1개.", tags: isKo ? ["writing", "prompt"] : ["writing", "prompt"] },
    { href: "https://funnyfunny.cloud/tools/drawing-prompt/", icon: "🖌️", title: isKo ? "그림 주제" : "Drawing Prompt", desc: isKo ? "그림 주제 1개." : "그림 주제 1개.", tags: isKo ? ["drawing", "prompt"] : ["drawing", "prompt"] },
    { href: "https://funnyfunny.cloud/tools/coding-project-idea/", icon: "💻", title: isKo ? "코딩 프로젝트 아이디어" : "Coding Project Idea", desc: isKo ? "프로젝트 1개." : "프로젝트 1개.", tags: isKo ? ["coding", "project"] : ["coding", "project"] },
    { href: "https://funnyfunny.cloud/tools/startup-idea/", icon: "🚀", title: isKo ? "스타트업 아이디어" : "Startup Idea", desc: isKo ? "아이디어 1개." : "아이디어 1개.", tags: isKo ? ["startup", "idea"] : ["startup", "idea"] },
    { href: "https://funnyfunny.cloud/tools/debate-topic/", icon: "🎤", title: isKo ? "토론 주제" : "Debate Topic", desc: isKo ? "주제 1개." : "주제 1개.", tags: isKo ? ["debate", "topic"] : ["debate", "topic"] },
    { href: "https://funnyfunny.cloud/tools/question-of-day/", icon: "❓", title: isKo ? "오늘의 질문" : "Question Of Day", desc: isKo ? "질문 1개." : "질문 1개.", tags: isKo ? ["question", "of"] : ["question", "of"] },
    { href: "https://funnyfunny.cloud/tools/poll-idea/", icon: "📊", title: isKo ? "투표/설문 아이디어" : "Poll Idea", desc: isKo ? "설문 주제 1개." : "설문 주제 1개.", tags: isKo ? ["poll", "idea"] : ["poll", "idea"] },
    { href: "https://funnyfunny.cloud/tools/rpg-class/", icon: "⚔️", title: isKo ? "RPG 클래스 랜덤" : "Rpg Class", desc: isKo ? "클래스 1개." : "클래스 1개.", tags: isKo ? ["rpg", "class"] : ["rpg", "class"] },
    { href: "https://funnyfunny.cloud/tools/character-trait/", icon: "🎭", title: isKo ? "캐릭터 성향 랜덤" : "Character Trait", desc: isKo ? "성향 1개." : "성향 1개.", tags: isKo ? ["character", "trait"] : ["character", "trait"] },
    { href: "https://funnyfunny.cloud/tools/baby-name-ko/", icon: "👶", title: isKo ? "아기 이름 (한글)" : "Baby Name Ko", desc: isKo ? "이름 1개." : "이름 1개.", tags: isKo ? ["baby", "name"] : ["baby", "name"] },
    { href: "https://funnyfunny.cloud/tools/wedding-vow-idea/", icon: "💒", title: isKo ? "결혼 서약 문구" : "Wedding Vow Idea", desc: isKo ? "서약 한 줄." : "서약 한 줄.", tags: isKo ? ["wedding", "vow"] : ["wedding", "vow"] },
    { href: "https://funnyfunny.cloud/tools/apology-msg/", icon: "😔", title: isKo ? "사과 메시지 랜덤" : "Apology Msg", desc: isKo ? "사과 문장." : "사과 문장.", tags: isKo ? ["apology", "msg"] : ["apology", "msg"] },
    { href: "https://funnyfunny.cloud/tools/thank-you-note/", icon: "💌", title: isKo ? "감사 메시지 랜덤" : "Thank You Note", desc: isKo ? "감사 문장." : "감사 문장.", tags: isKo ? ["thank", "you"] : ["thank", "you"] },
    { href: "https://funnyfunny.cloud/tools/random-recipe/", icon: "📖", title: isKo ? "요리 종류 랜덤" : "Random Recipe", desc: isKo ? "요리 1가지." : "요리 1가지.", tags: isKo ? ["random", "recipe"] : ["random", "recipe"] },
    { href: "https://funnyfunny.cloud/tools/random-exercise/", icon: "🏃", title: isKo ? "운동 종류 랜덤" : "Random Exercise", desc: isKo ? "운동 1가지." : "운동 1가지.", tags: isKo ? ["random", "exercise"] : ["random", "exercise"] },
    { href: "https://funnyfunny.cloud/tools/random-instrument/", icon: "🎸", title: isKo ? "악기 랜덤" : "Random Instrument", desc: isKo ? "악기 1개." : "악기 1개.", tags: isKo ? ["random", "instrument"] : ["random", "instrument"] },
    { href: "https://funnyfunny.cloud/tools/random-art-style/", icon: "🖼️", title: isKo ? "미술 스타일 랜덤" : "Random Art Style", desc: isKo ? "스타일 1개." : "스타일 1개.", tags: isKo ? ["random", "art"] : ["random", "art"] },
    { href: "https://funnyfunny.cloud/tools/random-plant/", icon: "🌱", title: isKo ? "식물 랜덤" : "Random Plant", desc: isKo ? "식물 1개." : "식물 1개.", tags: isKo ? ["random", "plant"] : ["random", "plant"] },
    { href: "https://funnyfunny.cloud/tools/random-flag/", icon: "🏳️", title: isKo ? "나라 국기 랜덤" : "Random Flag", desc: isKo ? "나라 1개." : "나라 1개.", tags: isKo ? ["random", "flag"] : ["random", "flag"] },
    { href: "https://funnyfunny.cloud/tools/omen-today/", icon: "🔮", title: isKo ? "오늘의 징조 (재미)" : "Omen Today", desc: isKo ? "징조 한 줄." : "징조 한 줄.", tags: isKo ? ["omen", "today"] : ["omen", "today"] },
    { href: "https://funnyfunny.cloud/tools/lucky-charm/", icon: "🍀", title: isKo ? "행운의 부적" : "Lucky Charm", desc: isKo ? "부적 1개." : "부적 1개.", tags: isKo ? ["lucky", "charm"] : ["lucky", "charm"] },
    { href: "https://funnyfunny.cloud/tools/zodiac-compat/", icon: "♈", title: isKo ? "별자리 궁합" : "Zodiac Compat", desc: isKo ? "궁합 한 줄." : "궁합 한 줄.", tags: isKo ? ["zodiac", "compat"] : ["zodiac", "compat"] },
    { href: "https://funnyfunny.cloud/tools/patronus-idea/", icon: "🦌", title: isKo ? "패트로누스 아이디어" : "Patronus Idea", desc: isKo ? "동물 1마리." : "동물 1마리.", tags: isKo ? ["patronus", "idea"] : ["patronus", "idea"] },
    { href: "https://funnyfunny.cloud/tools/marvel-hero/", icon: "🦸", title: isKo ? "마블 히어로 랜덤" : "Marvel Hero", desc: isKo ? "히어로 1명." : "히어로 1명.", tags: isKo ? ["marvel", "hero"] : ["marvel", "hero"] },
    { href: "https://funnyfunny.cloud/tools/disney-character/", icon: "🏰", title: isKo ? "디즈니 캐릭터" : "Disney Character", desc: isKo ? "캐릭터 1명." : "캐릭터 1명.", tags: isKo ? ["disney", "character"] : ["disney", "character"] },
    { href: "https://funnyfunny.cloud/tools/ghibli-character/", icon: "龙", title: isKo ? "지브리 캐릭터" : "Ghibli Character", desc: isKo ? "캐릭터 1명." : "캐릭터 1명.", tags: isKo ? ["ghibli", "character"] : ["ghibli", "character"] },
    { href: "https://funnyfunny.cloud/tools/netflix-pick/", icon: "📺", title: isKo ? "넷플릭스 추천" : "Netflix Pick", desc: isKo ? "장르 1개." : "장르 1개.", tags: isKo ? ["netflix", "pick"] : ["netflix", "pick"] },
    { href: "https://funnyfunny.cloud/tools/hashtag-random/", icon: "#️⃣", title: isKo ? "해시태그 랜덤" : "Hashtag Random", desc: isKo ? "해시태그 3개." : "해시태그 3개.", tags: isKo ? ["hashtag", "random"] : ["hashtag", "random"] },
    { href: "https://funnyfunny.cloud/tools/caption-idea/", icon: "📝", title: isKo ? "SNS 캡션 아이디어" : "Caption Idea", desc: isKo ? "캡션 한 줄." : "캡션 한 줄.", tags: isKo ? ["caption", "idea"] : ["caption", "idea"] },
    { href: "https://funnyfunny.cloud/tools/bio-idea/", icon: "👤", title: isKo ? "프로필 소개 아이디어" : "Bio Idea", desc: isKo ? "소개 한 줄." : "소개 한 줄.", tags: isKo ? ["bio", "idea"] : ["bio", "idea"] },
    { href: "https://funnyfunny.cloud/tools/content-idea/", icon: "💡", title: isKo ? "콘텐츠 아이디어" : "Content Idea", desc: isKo ? "아이디어 1개." : "아이디어 1개.", tags: isKo ? ["content", "idea"] : ["content", "idea"] },
    { href: "https://funnyfunny.cloud/tools/blog-topic/", icon: "📄", title: isKo ? "블로그 주제" : "Blog Topic", desc: isKo ? "주제 1개." : "주제 1개.", tags: isKo ? ["blog", "topic"] : ["blog", "topic"] },
    { href: "https://funnyfunny.cloud/tools/vlog-idea/", icon: "🎬", title: isKo ? "브이로그 아이디어" : "Vlog Idea", desc: isKo ? "아이디어 1개." : "아이디어 1개.", tags: isKo ? ["vlog", "idea"] : ["vlog", "idea"] },
    { href: "https://funnyfunny.cloud/tools/meeting-icebreaker/", icon: "🤝", title: isKo ? "회의 아이스브레이커" : "Meeting Icebreaker", desc: isKo ? "질문 1개." : "질문 1개.", tags: isKo ? ["meeting", "icebreaker"] : ["meeting", "icebreaker"] },
    { href: "https://funnyfunny.cloud/tools/interview-question/", icon: "📋", title: isKo ? "면접 질문 랜덤" : "Interview Question", desc: isKo ? "질문 1개." : "질문 1개.", tags: isKo ? ["interview", "question"] : ["interview", "question"] },
    { href: "https://funnyfunny.cloud/tools/salary-tip/", icon: "💰", title: isKo ? "연봉 협상 팁" : "Salary Tip", desc: isKo ? "팁 한 줄." : "팁 한 줄.", tags: isKo ? ["salary", "tip"] : ["salary", "tip"] },
    { href: "https://funnyfunny.cloud/tools/morning-routine/", icon: "🌅", title: isKo ? "아침 루틴 아이디어" : "Morning Routine", desc: isKo ? "루틴 1가지." : "루틴 1가지.", tags: isKo ? ["morning", "routine"] : ["morning", "routine"] },
    { href: "https://funnyfunny.cloud/tools/evening-routine/", icon: "🌙", title: isKo ? "저녁 루틴 아이디어" : "Evening Routine", desc: isKo ? "루틴 1가지." : "루틴 1가지.", tags: isKo ? ["evening", "routine"] : ["evening", "routine"] },
    { href: "https://funnyfunny.cloud/tools/habit-to-start/", icon: "✅", title: isKo ? "시작할 습관" : "Habit To Start", desc: isKo ? "습관 1가지." : "습관 1가지.", tags: isKo ? ["habit", "to"] : ["habit", "to"] },
    { href: "https://funnyfunny.cloud/tools/bucket-list-one/", icon: "📌", title: isKo ? "버킷리스트 1가지" : "Bucket List One", desc: isKo ? "버킷리스트 1개." : "버킷리스트 1개.", tags: isKo ? ["bucket", "list"] : ["bucket", "list"] },
    { href: "https://funnyfunny.cloud/tools/new-year-resolution/", icon: "🎆", title: isKo ? "새해 결심 아이디어" : "New Year Resolution", desc: isKo ? "결심 1가지." : "결심 1가지.", tags: isKo ? ["new", "year"] : ["new", "year"] },
    { href: "https://funnyfunny.cloud/tools/gift-under-50/", icon: "🎀", title: isKo ? "5만원 이하 선물" : "Gift Under 50", desc: isKo ? "선물 1개." : "선물 1개.", tags: isKo ? ["gift", "under"] : ["gift", "under"] },
    { href: "https://funnyfunny.cloud/tools/holiday-idea/", icon: "🎄", title: isKo ? "기념일 아이디어" : "Holiday Idea", desc: isKo ? "아이디어 1개." : "아이디어 1개.", tags: isKo ? ["holiday", "idea"] : ["holiday", "idea"] },
    { href: "https://funnyfunny.cloud/tools/birthday-idea/", icon: "🎂", title: isKo ? "생일 아이디어" : "Birthday Idea", desc: isKo ? "아이디어 1개." : "아이디어 1개.", tags: isKo ? ["birthday", "idea"] : ["birthday", "idea"] },
    { href: "https://funnyfunny.cloud/tools/anniversary-idea/", icon: "💍", title: isKo ? "기념일 데이트" : "Anniversary Idea", desc: isKo ? "데이트 1가지." : "데이트 1가지.", tags: isKo ? ["anniversary", "idea"] : ["anniversary", "idea"] },
    { href: "https://funnyfunny.cloud/tools/random-emoji-story/", icon: "📖", title: isKo ? "이모지 스토리" : "Random Emoji Story", desc: isKo ? "이모지 2~3개." : "이모지 2~3개.", tags: isKo ? ["random", "emoji"] : ["random", "emoji"] },
    { href: "https://funnyfunny.cloud/tools/random-hex/", icon: "🎨", title: isKo ? "랜덤 HEX 색상" : "Random Hex", desc: isKo ? "HEX 코드 1개." : "HEX 코드 1개.", tags: isKo ? ["random", "hex"] : ["random", "hex"] },
    { href: "https://funnyfunny.cloud/tools/random-question/", icon: "❓", title: isKo ? "랜덤 질문" : "Random Question", desc: isKo ? "질문 1개." : "질문 1개.", tags: isKo ? ["random", "question"] : ["random", "question"] },
    { href: "https://funnyfunny.cloud/tools/option-roulette/", icon: "🎡", title: isKo ? "선택 룰렛" : "Option Roulette", desc: isKo ? "A/B/C 중 하나." : "A/B/C 중 하나.", tags: isKo ? ["option", "roulette"] : ["option", "roulette"] },
    { href: "https://funnyfunny.cloud/tools/choice-picker/", icon: "✋", title: isKo ? "고르기 도우미" : "Choice Picker", desc: isKo ? "1 또는 2." : "1 또는 2.", tags: isKo ? ["choice", "picker"] : ["choice", "picker"] },
    { href: "https://funnyfunny.cloud/tools/kind-message/", icon: "💝", title: isKo ? "따뜻한 한마디" : "Kind Message", desc: isKo ? "한마디 1줄." : "한마디 1줄.", tags: isKo ? ["kind", "message"] : ["kind", "message"] },
    { href: "https://funnyfunny.cloud/tools/joke-clean/", icon: "😄", title: isKo ? "청결한 농담 한줄" : "Joke Clean", desc: isKo ? "농담 1줄." : "농담 1줄.", tags: isKo ? ["joke", "clean"] : ["joke", "clean"] },
    { href: "https://funnyfunny.cloud/tools/test-001/", icon: "📋", title: isKo ? "스트레스 체크 1" : "스트레스 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-002/", icon: "💭", title: isKo ? "습관 진단 1" : "습관 진단 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-003/", icon: "🎯", title: isKo ? "관계 유형 1" : "관계 유형 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-004/", icon: "📊", title: isKo ? "커리어 성향 1" : "커리어 성향 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-005/", icon: "🔍", title: isKo ? "금융 지식 1" : "금융 지식 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-006/", icon: "💡", title: isKo ? "건강 점수 1" : "건강 점수 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-007/", icon: "❤️", title: isKo ? "수면 품질 1" : "수면 품질 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-008/", icon: "🧠", title: isKo ? "식습관 체크 1" : "식습관 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-009/", icon: "⚖️", title: isKo ? "운동 습관 1" : "운동 습관 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-010/", icon: "🌱", title: isKo ? "기분 진단 1" : "기분 진단 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-011/", icon: "⏰", title: isKo ? "자신감 테스트 1" : "자신감 테스트 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-012/", icon: "😴", title: isKo ? "창의성 체크 1" : "창의성 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-013/", icon: "🍽️", title: isKo ? "시간관리 1" : "시간관리 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-014/", icon: "🏃", title: isKo ? "소통 스타일 1" : "소통 스타일 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-015/", icon: "😊", title: isKo ? "번아웃 위험도 1" : "번아웃 위험도 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-016/", icon: "💪", title: isKo ? "일중독 체크 1" : "일중독 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-017/", icon: "🌈", title: isKo ? "우울감 체크 1" : "우울감 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-018/", icon: "📈", title: isKo ? "불안 수준 1" : "불안 수준 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-019/", icon: "🤝", title: isKo ? "자존감 테스트 1" : "자존감 테스트 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-020/", icon: "🧪", title: isKo ? "감정조절 1" : "감정조절 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-021/", icon: "📋", title: isKo ? "결단력 체크 1" : "결단력 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-022/", icon: "💭", title: isKo ? "리더십 스타일 1" : "리더십 스타일 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-023/", icon: "🎯", title: isKo ? "팀워크 성향 1" : "팀워크 성향 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-024/", icon: "📊", title: isKo ? "갈등해결 1" : "갈등해결 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-025/", icon: "🔍", title: isKo ? "재무 성향 1" : "재무 성향 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-026/", icon: "💡", title: isKo ? "절약 지수 1" : "절약 지수 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-027/", icon: "❤️", title: isKo ? "투자 성향 1" : "투자 성향 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-028/", icon: "🧠", title: isKo ? "생활만족도 1" : "생활만족도 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-029/", icon: "⚖️", title: isKo ? "워라밸 체크 1" : "워라밸 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-030/", icon: "🌱", title: isKo ? "목표의식 1" : "목표의식 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-031/", icon: "⏰", title: isKo ? "학습 스타일 1" : "학습 스타일 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-032/", icon: "😴", title: isKo ? "집중력 체크 1" : "집중력 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-033/", icon: "🍽️", title: isKo ? "에너지 레벨 1" : "에너지 레벨 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-034/", icon: "🏃", title: isKo ? "회복력 테스트 1" : "회복력 테스트 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-035/", icon: "😊", title: isKo ? "감사 성향 1" : "감사 성향 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-036/", icon: "💪", title: isKo ? "낙관성 체크 1" : "낙관성 체크 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-037/", icon: "🌈", title: isKo ? "호기심 수준 1" : "호기심 수준 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-038/", icon: "📈", title: isKo ? "도전 성향 1" : "도전 성향 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-039/", icon: "🤝", title: isKo ? "인내심 테스트 1" : "인내심 테스트 1", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-040/", icon: "🧪", title: isKo ? "스트레스 체크 2" : "스트레스 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-041/", icon: "📋", title: isKo ? "습관 진단 2" : "습관 진단 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-042/", icon: "💭", title: isKo ? "관계 유형 2" : "관계 유형 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-043/", icon: "🎯", title: isKo ? "커리어 성향 2" : "커리어 성향 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-044/", icon: "📊", title: isKo ? "금융 지식 2" : "금융 지식 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-045/", icon: "🔍", title: isKo ? "건강 점수 2" : "건강 점수 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-046/", icon: "💡", title: isKo ? "수면 품질 2" : "수면 품질 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-047/", icon: "❤️", title: isKo ? "식습관 체크 2" : "식습관 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-048/", icon: "🧠", title: isKo ? "운동 습관 2" : "운동 습관 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-049/", icon: "⚖️", title: isKo ? "기분 진단 2" : "기분 진단 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-050/", icon: "🌱", title: isKo ? "자신감 테스트 2" : "자신감 테스트 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-051/", icon: "⏰", title: isKo ? "창의성 체크 2" : "창의성 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-052/", icon: "😴", title: isKo ? "시간관리 2" : "시간관리 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-053/", icon: "🍽️", title: isKo ? "소통 스타일 2" : "소통 스타일 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-054/", icon: "🏃", title: isKo ? "번아웃 위험도 2" : "번아웃 위험도 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-055/", icon: "😊", title: isKo ? "일중독 체크 2" : "일중독 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-056/", icon: "💪", title: isKo ? "우울감 체크 2" : "우울감 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-057/", icon: "🌈", title: isKo ? "불안 수준 2" : "불안 수준 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-058/", icon: "📈", title: isKo ? "자존감 테스트 2" : "자존감 테스트 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-059/", icon: "🤝", title: isKo ? "감정조절 2" : "감정조절 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-060/", icon: "🧪", title: isKo ? "결단력 체크 2" : "결단력 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-061/", icon: "📋", title: isKo ? "리더십 스타일 2" : "리더십 스타일 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-062/", icon: "💭", title: isKo ? "팀워크 성향 2" : "팀워크 성향 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-063/", icon: "🎯", title: isKo ? "갈등해결 2" : "갈등해결 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-064/", icon: "📊", title: isKo ? "재무 성향 2" : "재무 성향 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-065/", icon: "🔍", title: isKo ? "절약 지수 2" : "절약 지수 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-066/", icon: "💡", title: isKo ? "투자 성향 2" : "투자 성향 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-067/", icon: "❤️", title: isKo ? "생활만족도 2" : "생활만족도 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-068/", icon: "🧠", title: isKo ? "워라밸 체크 2" : "워라밸 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-069/", icon: "⚖️", title: isKo ? "목표의식 2" : "목표의식 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-070/", icon: "🌱", title: isKo ? "학습 스타일 2" : "학습 스타일 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-071/", icon: "⏰", title: isKo ? "집중력 체크 2" : "집중력 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-072/", icon: "😴", title: isKo ? "에너지 레벨 2" : "에너지 레벨 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-073/", icon: "🍽️", title: isKo ? "회복력 테스트 2" : "회복력 테스트 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-074/", icon: "🏃", title: isKo ? "감사 성향 2" : "감사 성향 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-075/", icon: "😊", title: isKo ? "낙관성 체크 2" : "낙관성 체크 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-076/", icon: "💪", title: isKo ? "호기심 수준 2" : "호기심 수준 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-077/", icon: "🌈", title: isKo ? "도전 성향 2" : "도전 성향 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-078/", icon: "📈", title: isKo ? "인내심 테스트 2" : "인내심 테스트 2", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-079/", icon: "🤝", title: isKo ? "스트레스 체크 3" : "스트레스 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-080/", icon: "🧪", title: isKo ? "습관 진단 3" : "습관 진단 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-081/", icon: "📋", title: isKo ? "관계 유형 3" : "관계 유형 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-082/", icon: "💭", title: isKo ? "커리어 성향 3" : "커리어 성향 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-083/", icon: "🎯", title: isKo ? "금융 지식 3" : "금융 지식 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-084/", icon: "📊", title: isKo ? "건강 점수 3" : "건강 점수 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-085/", icon: "🔍", title: isKo ? "수면 품질 3" : "수면 품질 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-086/", icon: "💡", title: isKo ? "식습관 체크 3" : "식습관 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-087/", icon: "❤️", title: isKo ? "운동 습관 3" : "운동 습관 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-088/", icon: "🧠", title: isKo ? "기분 진단 3" : "기분 진단 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-089/", icon: "⚖️", title: isKo ? "자신감 테스트 3" : "자신감 테스트 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-090/", icon: "🌱", title: isKo ? "창의성 체크 3" : "창의성 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-091/", icon: "⏰", title: isKo ? "시간관리 3" : "시간관리 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-092/", icon: "😴", title: isKo ? "소통 스타일 3" : "소통 스타일 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-093/", icon: "🍽️", title: isKo ? "번아웃 위험도 3" : "번아웃 위험도 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-094/", icon: "🏃", title: isKo ? "일중독 체크 3" : "일중독 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-095/", icon: "😊", title: isKo ? "우울감 체크 3" : "우울감 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-096/", icon: "💪", title: isKo ? "불안 수준 3" : "불안 수준 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-097/", icon: "🌈", title: isKo ? "자존감 테스트 3" : "자존감 테스트 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-098/", icon: "📈", title: isKo ? "감정조절 3" : "감정조절 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-099/", icon: "🤝", title: isKo ? "결단력 체크 3" : "결단력 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-100/", icon: "🧪", title: isKo ? "리더십 스타일 3" : "리더십 스타일 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-101/", icon: "📋", title: isKo ? "팀워크 성향 3" : "팀워크 성향 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-102/", icon: "💭", title: isKo ? "갈등해결 3" : "갈등해결 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-103/", icon: "🎯", title: isKo ? "재무 성향 3" : "재무 성향 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-104/", icon: "📊", title: isKo ? "절약 지수 3" : "절약 지수 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-105/", icon: "🔍", title: isKo ? "투자 성향 3" : "투자 성향 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-106/", icon: "💡", title: isKo ? "생활만족도 3" : "생활만족도 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-107/", icon: "❤️", title: isKo ? "워라밸 체크 3" : "워라밸 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-108/", icon: "🧠", title: isKo ? "목표의식 3" : "목표의식 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-109/", icon: "⚖️", title: isKo ? "학습 스타일 3" : "학습 스타일 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-110/", icon: "🌱", title: isKo ? "집중력 체크 3" : "집중력 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-111/", icon: "⏰", title: isKo ? "에너지 레벨 3" : "에너지 레벨 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-112/", icon: "😴", title: isKo ? "회복력 테스트 3" : "회복력 테스트 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-113/", icon: "🍽️", title: isKo ? "감사 성향 3" : "감사 성향 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-114/", icon: "🏃", title: isKo ? "낙관성 체크 3" : "낙관성 체크 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-115/", icon: "😊", title: isKo ? "호기심 수준 3" : "호기심 수준 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-116/", icon: "💪", title: isKo ? "도전 성향 3" : "도전 성향 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-117/", icon: "🌈", title: isKo ? "인내심 테스트 3" : "인내심 테스트 3", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-118/", icon: "📈", title: isKo ? "스트레스 체크 4" : "스트레스 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-119/", icon: "🤝", title: isKo ? "습관 진단 4" : "습관 진단 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-120/", icon: "🧪", title: isKo ? "관계 유형 4" : "관계 유형 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-121/", icon: "📋", title: isKo ? "커리어 성향 4" : "커리어 성향 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-122/", icon: "💭", title: isKo ? "금융 지식 4" : "금융 지식 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-123/", icon: "🎯", title: isKo ? "건강 점수 4" : "건강 점수 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-124/", icon: "📊", title: isKo ? "수면 품질 4" : "수면 품질 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-125/", icon: "🔍", title: isKo ? "식습관 체크 4" : "식습관 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-126/", icon: "💡", title: isKo ? "운동 습관 4" : "운동 습관 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-127/", icon: "❤️", title: isKo ? "기분 진단 4" : "기분 진단 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-128/", icon: "🧠", title: isKo ? "자신감 테스트 4" : "자신감 테스트 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-129/", icon: "⚖️", title: isKo ? "창의성 체크 4" : "창의성 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-130/", icon: "🌱", title: isKo ? "시간관리 4" : "시간관리 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-131/", icon: "⏰", title: isKo ? "소통 스타일 4" : "소통 스타일 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-132/", icon: "😴", title: isKo ? "번아웃 위험도 4" : "번아웃 위험도 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-133/", icon: "🍽️", title: isKo ? "일중독 체크 4" : "일중독 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-134/", icon: "🏃", title: isKo ? "우울감 체크 4" : "우울감 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-135/", icon: "😊", title: isKo ? "불안 수준 4" : "불안 수준 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-136/", icon: "💪", title: isKo ? "자존감 테스트 4" : "자존감 테스트 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-137/", icon: "🌈", title: isKo ? "감정조절 4" : "감정조절 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-138/", icon: "📈", title: isKo ? "결단력 체크 4" : "결단력 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-139/", icon: "🤝", title: isKo ? "리더십 스타일 4" : "리더십 스타일 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-140/", icon: "🧪", title: isKo ? "팀워크 성향 4" : "팀워크 성향 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-141/", icon: "📋", title: isKo ? "갈등해결 4" : "갈등해결 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-142/", icon: "💭", title: isKo ? "재무 성향 4" : "재무 성향 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-143/", icon: "🎯", title: isKo ? "절약 지수 4" : "절약 지수 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-144/", icon: "📊", title: isKo ? "투자 성향 4" : "투자 성향 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-145/", icon: "🔍", title: isKo ? "생활만족도 4" : "생활만족도 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-146/", icon: "💡", title: isKo ? "워라밸 체크 4" : "워라밸 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-147/", icon: "❤️", title: isKo ? "목표의식 4" : "목표의식 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-148/", icon: "🧠", title: isKo ? "학습 스타일 4" : "학습 스타일 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-149/", icon: "⚖️", title: isKo ? "집중력 체크 4" : "집중력 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-150/", icon: "🌱", title: isKo ? "에너지 레벨 4" : "에너지 레벨 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-151/", icon: "⏰", title: isKo ? "회복력 테스트 4" : "회복력 테스트 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-152/", icon: "😴", title: isKo ? "감사 성향 4" : "감사 성향 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-153/", icon: "🍽️", title: isKo ? "낙관성 체크 4" : "낙관성 체크 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-154/", icon: "🏃", title: isKo ? "호기심 수준 4" : "호기심 수준 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-155/", icon: "😊", title: isKo ? "도전 성향 4" : "도전 성향 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-156/", icon: "💪", title: isKo ? "인내심 테스트 4" : "인내심 테스트 4", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-157/", icon: "🌈", title: isKo ? "스트레스 체크 5" : "스트레스 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-158/", icon: "📈", title: isKo ? "습관 진단 5" : "습관 진단 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-159/", icon: "🤝", title: isKo ? "관계 유형 5" : "관계 유형 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-160/", icon: "🧪", title: isKo ? "커리어 성향 5" : "커리어 성향 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-161/", icon: "📋", title: isKo ? "금융 지식 5" : "금융 지식 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-162/", icon: "💭", title: isKo ? "건강 점수 5" : "건강 점수 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-163/", icon: "🎯", title: isKo ? "수면 품질 5" : "수면 품질 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-164/", icon: "📊", title: isKo ? "식습관 체크 5" : "식습관 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-165/", icon: "🔍", title: isKo ? "운동 습관 5" : "운동 습관 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-166/", icon: "💡", title: isKo ? "기분 진단 5" : "기분 진단 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-167/", icon: "❤️", title: isKo ? "자신감 테스트 5" : "자신감 테스트 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-168/", icon: "🧠", title: isKo ? "창의성 체크 5" : "창의성 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-169/", icon: "⚖️", title: isKo ? "시간관리 5" : "시간관리 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-170/", icon: "🌱", title: isKo ? "소통 스타일 5" : "소통 스타일 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-171/", icon: "⏰", title: isKo ? "번아웃 위험도 5" : "번아웃 위험도 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-172/", icon: "😴", title: isKo ? "일중독 체크 5" : "일중독 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-173/", icon: "🍽️", title: isKo ? "우울감 체크 5" : "우울감 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-174/", icon: "🏃", title: isKo ? "불안 수준 5" : "불안 수준 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-175/", icon: "😊", title: isKo ? "자존감 테스트 5" : "자존감 테스트 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-176/", icon: "💪", title: isKo ? "감정조절 5" : "감정조절 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-177/", icon: "🌈", title: isKo ? "결단력 체크 5" : "결단력 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-178/", icon: "📈", title: isKo ? "리더십 스타일 5" : "리더십 스타일 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-179/", icon: "🤝", title: isKo ? "팀워크 성향 5" : "팀워크 성향 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-180/", icon: "🧪", title: isKo ? "갈등해결 5" : "갈등해결 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-181/", icon: "📋", title: isKo ? "재무 성향 5" : "재무 성향 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-182/", icon: "💭", title: isKo ? "절약 지수 5" : "절약 지수 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-183/", icon: "🎯", title: isKo ? "투자 성향 5" : "투자 성향 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-184/", icon: "📊", title: isKo ? "생활만족도 5" : "생활만족도 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-185/", icon: "🔍", title: isKo ? "워라밸 체크 5" : "워라밸 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-186/", icon: "💡", title: isKo ? "목표의식 5" : "목표의식 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-187/", icon: "❤️", title: isKo ? "학습 스타일 5" : "학습 스타일 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-188/", icon: "🧠", title: isKo ? "집중력 체크 5" : "집중력 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-189/", icon: "⚖️", title: isKo ? "에너지 레벨 5" : "에너지 레벨 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-190/", icon: "🌱", title: isKo ? "회복력 테스트 5" : "회복력 테스트 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-191/", icon: "⏰", title: isKo ? "감사 성향 5" : "감사 성향 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-192/", icon: "😴", title: isKo ? "낙관성 체크 5" : "낙관성 체크 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-193/", icon: "🍽️", title: isKo ? "호기심 수준 5" : "호기심 수준 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-194/", icon: "🏃", title: isKo ? "도전 성향 5" : "도전 성향 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-195/", icon: "😊", title: isKo ? "인내심 테스트 5" : "인내심 테스트 5", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-196/", icon: "💪", title: isKo ? "스트레스 체크 6" : "스트레스 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-197/", icon: "🌈", title: isKo ? "습관 진단 6" : "습관 진단 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-198/", icon: "📈", title: isKo ? "관계 유형 6" : "관계 유형 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-199/", icon: "🤝", title: isKo ? "커리어 성향 6" : "커리어 성향 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-200/", icon: "🧪", title: isKo ? "금융 지식 6" : "금융 지식 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-201/", icon: "📋", title: isKo ? "건강 점수 6" : "건강 점수 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-202/", icon: "💭", title: isKo ? "수면 품질 6" : "수면 품질 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-203/", icon: "🎯", title: isKo ? "식습관 체크 6" : "식습관 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-204/", icon: "📊", title: isKo ? "운동 습관 6" : "운동 습관 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-205/", icon: "🔍", title: isKo ? "기분 진단 6" : "기분 진단 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-206/", icon: "💡", title: isKo ? "자신감 테스트 6" : "자신감 테스트 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-207/", icon: "❤️", title: isKo ? "창의성 체크 6" : "창의성 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-208/", icon: "🧠", title: isKo ? "시간관리 6" : "시간관리 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-209/", icon: "⚖️", title: isKo ? "소통 스타일 6" : "소통 스타일 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-210/", icon: "🌱", title: isKo ? "번아웃 위험도 6" : "번아웃 위험도 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-211/", icon: "⏰", title: isKo ? "일중독 체크 6" : "일중독 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-212/", icon: "😴", title: isKo ? "우울감 체크 6" : "우울감 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-213/", icon: "🍽️", title: isKo ? "불안 수준 6" : "불안 수준 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-214/", icon: "🏃", title: isKo ? "자존감 테스트 6" : "자존감 테스트 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-215/", icon: "😊", title: isKo ? "감정조절 6" : "감정조절 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-216/", icon: "💪", title: isKo ? "결단력 체크 6" : "결단력 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-217/", icon: "🌈", title: isKo ? "리더십 스타일 6" : "리더십 스타일 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-218/", icon: "📈", title: isKo ? "팀워크 성향 6" : "팀워크 성향 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-219/", icon: "🤝", title: isKo ? "갈등해결 6" : "갈등해결 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-220/", icon: "🧪", title: isKo ? "재무 성향 6" : "재무 성향 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-221/", icon: "📋", title: isKo ? "절약 지수 6" : "절약 지수 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-222/", icon: "💭", title: isKo ? "투자 성향 6" : "투자 성향 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-223/", icon: "🎯", title: isKo ? "생활만족도 6" : "생활만족도 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-224/", icon: "📊", title: isKo ? "워라밸 체크 6" : "워라밸 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-225/", icon: "🔍", title: isKo ? "목표의식 6" : "목표의식 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-226/", icon: "💡", title: isKo ? "학습 스타일 6" : "학습 스타일 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-227/", icon: "❤️", title: isKo ? "집중력 체크 6" : "집중력 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-228/", icon: "🧠", title: isKo ? "에너지 레벨 6" : "에너지 레벨 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-229/", icon: "⚖️", title: isKo ? "회복력 테스트 6" : "회복력 테스트 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-230/", icon: "🌱", title: isKo ? "감사 성향 6" : "감사 성향 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-231/", icon: "⏰", title: isKo ? "낙관성 체크 6" : "낙관성 체크 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-232/", icon: "😴", title: isKo ? "호기심 수준 6" : "호기심 수준 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-233/", icon: "🍽️", title: isKo ? "도전 성향 6" : "도전 성향 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-234/", icon: "🏃", title: isKo ? "인내심 테스트 6" : "인내심 테스트 6", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-235/", icon: "😊", title: isKo ? "스트레스 체크 7" : "스트레스 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-236/", icon: "💪", title: isKo ? "습관 진단 7" : "습관 진단 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-237/", icon: "🌈", title: isKo ? "관계 유형 7" : "관계 유형 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-238/", icon: "📈", title: isKo ? "커리어 성향 7" : "커리어 성향 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-239/", icon: "🤝", title: isKo ? "금융 지식 7" : "금융 지식 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-240/", icon: "🧪", title: isKo ? "건강 점수 7" : "건강 점수 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-241/", icon: "📋", title: isKo ? "수면 품질 7" : "수면 품질 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-242/", icon: "💭", title: isKo ? "식습관 체크 7" : "식습관 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-243/", icon: "🎯", title: isKo ? "운동 습관 7" : "운동 습관 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-244/", icon: "📊", title: isKo ? "기분 진단 7" : "기분 진단 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-245/", icon: "🔍", title: isKo ? "자신감 테스트 7" : "자신감 테스트 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-246/", icon: "💡", title: isKo ? "창의성 체크 7" : "창의성 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-247/", icon: "❤️", title: isKo ? "시간관리 7" : "시간관리 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-248/", icon: "🧠", title: isKo ? "소통 스타일 7" : "소통 스타일 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-249/", icon: "⚖️", title: isKo ? "번아웃 위험도 7" : "번아웃 위험도 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-250/", icon: "🌱", title: isKo ? "일중독 체크 7" : "일중독 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-251/", icon: "⏰", title: isKo ? "우울감 체크 7" : "우울감 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-252/", icon: "😴", title: isKo ? "불안 수준 7" : "불안 수준 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-253/", icon: "🍽️", title: isKo ? "자존감 테스트 7" : "자존감 테스트 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-254/", icon: "🏃", title: isKo ? "감정조절 7" : "감정조절 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-255/", icon: "😊", title: isKo ? "결단력 체크 7" : "결단력 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-256/", icon: "💪", title: isKo ? "리더십 스타일 7" : "리더십 스타일 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-257/", icon: "🌈", title: isKo ? "팀워크 성향 7" : "팀워크 성향 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-258/", icon: "📈", title: isKo ? "갈등해결 7" : "갈등해결 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-259/", icon: "🤝", title: isKo ? "재무 성향 7" : "재무 성향 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-260/", icon: "🧪", title: isKo ? "절약 지수 7" : "절약 지수 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-261/", icon: "📋", title: isKo ? "투자 성향 7" : "투자 성향 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-262/", icon: "💭", title: isKo ? "생활만족도 7" : "생활만족도 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-263/", icon: "🎯", title: isKo ? "워라밸 체크 7" : "워라밸 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-264/", icon: "📊", title: isKo ? "목표의식 7" : "목표의식 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-265/", icon: "🔍", title: isKo ? "학습 스타일 7" : "학습 스타일 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-266/", icon: "💡", title: isKo ? "집중력 체크 7" : "집중력 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-267/", icon: "❤️", title: isKo ? "에너지 레벨 7" : "에너지 레벨 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-268/", icon: "🧠", title: isKo ? "회복력 테스트 7" : "회복력 테스트 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-269/", icon: "⚖️", title: isKo ? "감사 성향 7" : "감사 성향 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-270/", icon: "🌱", title: isKo ? "낙관성 체크 7" : "낙관성 체크 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-271/", icon: "⏰", title: isKo ? "호기심 수준 7" : "호기심 수준 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-272/", icon: "😴", title: isKo ? "도전 성향 7" : "도전 성향 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-273/", icon: "🍽️", title: isKo ? "인내심 테스트 7" : "인내심 테스트 7", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-274/", icon: "🏃", title: isKo ? "스트레스 체크 8" : "스트레스 체크 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-275/", icon: "😊", title: isKo ? "습관 진단 8" : "습관 진단 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-276/", icon: "💪", title: isKo ? "관계 유형 8" : "관계 유형 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-277/", icon: "🌈", title: isKo ? "커리어 성향 8" : "커리어 성향 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-278/", icon: "📈", title: isKo ? "금융 지식 8" : "금융 지식 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-279/", icon: "🤝", title: isKo ? "건강 점수 8" : "건강 점수 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-280/", icon: "🧪", title: isKo ? "수면 품질 8" : "수면 품질 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-281/", icon: "📋", title: isKo ? "식습관 체크 8" : "식습관 체크 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-282/", icon: "💭", title: isKo ? "운동 습관 8" : "운동 습관 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-283/", icon: "🎯", title: isKo ? "기분 진단 8" : "기분 진단 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-284/", icon: "📊", title: isKo ? "자신감 테스트 8" : "자신감 테스트 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-285/", icon: "🔍", title: isKo ? "창의성 체크 8" : "창의성 체크 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-286/", icon: "💡", title: isKo ? "시간관리 8" : "시간관리 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-287/", icon: "❤️", title: isKo ? "소통 스타일 8" : "소통 스타일 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-288/", icon: "🧠", title: isKo ? "번아웃 위험도 8" : "번아웃 위험도 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-289/", icon: "⚖️", title: isKo ? "일중독 체크 8" : "일중독 체크 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-290/", icon: "🌱", title: isKo ? "우울감 체크 8" : "우울감 체크 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-291/", icon: "⏰", title: isKo ? "불안 수준 8" : "불안 수준 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-292/", icon: "😴", title: isKo ? "자존감 테스트 8" : "자존감 테스트 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-293/", icon: "🍽️", title: isKo ? "감정조절 8" : "감정조절 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-294/", icon: "🏃", title: isKo ? "결단력 체크 8" : "결단력 체크 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-295/", icon: "😊", title: isKo ? "리더십 스타일 8" : "리더십 스타일 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-296/", icon: "💪", title: isKo ? "팀워크 성향 8" : "팀워크 성향 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-297/", icon: "🌈", title: isKo ? "갈등해결 8" : "갈등해결 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-298/", icon: "📈", title: isKo ? "재무 성향 8" : "재무 성향 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-299/", icon: "🤝", title: isKo ? "절약 지수 8" : "절약 지수 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/test-300/", icon: "🧪", title: isKo ? "투자 성향 8" : "투자 성향 8", desc: isKo ? "간단 체크." : "간단 체크.", tags: isKo ? ["test"] : ["test"] },
    { href: "https://funnyfunny.cloud/tools/game-001/", icon: "🎯", title: isKo ? "간식 룰렛 1" : "간식 룰렛 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-002/", icon: "🍿", title: isKo ? "영화 장르 1" : "영화 장르 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-003/", icon: "🎵", title: isKo ? "노래 추천 1" : "노래 추천 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-004/", icon: "📖", title: isKo ? "책 테마 1" : "책 테마 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-005/", icon: "🎮", title: isKo ? "취미 뽑기 1" : "취미 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-006/", icon: "✈️", title: isKo ? "주말 룰렛 1" : "주말 룰렛 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-007/", icon: "🍹", title: isKo ? "여행지 뽑기 1" : "여행지 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-008/", icon: "🍰", title: isKo ? "음료 룰렛 1" : "음료 룰렛 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-009/", icon: "⚽", title: isKo ? "디저트 룰렛 1" : "디저트 룰렛 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-010/", icon: "🎬", title: isKo ? "운동 뽑기 1" : "운동 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-011/", icon: "🛍️", title: isKo ? "드라마 추천 1" : "드라마 추천 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-012/", icon: "🎲", title: isKo ? "쇼핑 카테고리 1" : "쇼핑 카테고리 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-013/", icon: "🎯", title: isKo ? "점심 룰렛 1" : "점심 룰렛 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-014/", icon: "🍿", title: isKo ? "저녁 메뉴 1" : "저녁 메뉴 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-015/", icon: "🎵", title: isKo ? "카페 메뉴 1" : "카페 메뉴 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-016/", icon: "📖", title: isKo ? "과일 뽑기 1" : "과일 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-017/", icon: "🎮", title: isKo ? "색상 뽑기 1" : "색상 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-018/", icon: "✈️", title: isKo ? "숫자 뽑기 1" : "숫자 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-019/", icon: "🍹", title: isKo ? "요일 뽑기 1" : "요일 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-020/", icon: "🍰", title: isKo ? "계절 뽑기 1" : "계절 뽑기 1", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-021/", icon: "⚽", title: isKo ? "간식 룰렛 2" : "간식 룰렛 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-022/", icon: "🎬", title: isKo ? "영화 장르 2" : "영화 장르 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-023/", icon: "🛍️", title: isKo ? "노래 추천 2" : "노래 추천 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-024/", icon: "🎲", title: isKo ? "책 테마 2" : "책 테마 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-025/", icon: "🎯", title: isKo ? "취미 뽑기 2" : "취미 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-026/", icon: "🍿", title: isKo ? "주말 룰렛 2" : "주말 룰렛 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-027/", icon: "🎵", title: isKo ? "여행지 뽑기 2" : "여행지 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-028/", icon: "📖", title: isKo ? "음료 룰렛 2" : "음료 룰렛 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-029/", icon: "🎮", title: isKo ? "디저트 룰렛 2" : "디저트 룰렛 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-030/", icon: "✈️", title: isKo ? "운동 뽑기 2" : "운동 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-031/", icon: "🍹", title: isKo ? "드라마 추천 2" : "드라마 추천 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-032/", icon: "🍰", title: isKo ? "쇼핑 카테고리 2" : "쇼핑 카테고리 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-033/", icon: "⚽", title: isKo ? "점심 룰렛 2" : "점심 룰렛 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-034/", icon: "🎬", title: isKo ? "저녁 메뉴 2" : "저녁 메뉴 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-035/", icon: "🛍️", title: isKo ? "카페 메뉴 2" : "카페 메뉴 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-036/", icon: "🎲", title: isKo ? "과일 뽑기 2" : "과일 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-037/", icon: "🎯", title: isKo ? "색상 뽑기 2" : "색상 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-038/", icon: "🍿", title: isKo ? "숫자 뽑기 2" : "숫자 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-039/", icon: "🎵", title: isKo ? "요일 뽑기 2" : "요일 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-040/", icon: "📖", title: isKo ? "계절 뽑기 2" : "계절 뽑기 2", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-041/", icon: "🎮", title: isKo ? "간식 룰렛 3" : "간식 룰렛 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-042/", icon: "✈️", title: isKo ? "영화 장르 3" : "영화 장르 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-043/", icon: "🍹", title: isKo ? "노래 추천 3" : "노래 추천 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-044/", icon: "🍰", title: isKo ? "책 테마 3" : "책 테마 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-045/", icon: "⚽", title: isKo ? "취미 뽑기 3" : "취미 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-046/", icon: "🎬", title: isKo ? "주말 룰렛 3" : "주말 룰렛 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-047/", icon: "🛍️", title: isKo ? "여행지 뽑기 3" : "여행지 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-048/", icon: "🎲", title: isKo ? "음료 룰렛 3" : "음료 룰렛 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-049/", icon: "🎯", title: isKo ? "디저트 룰렛 3" : "디저트 룰렛 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-050/", icon: "🍿", title: isKo ? "운동 뽑기 3" : "운동 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-051/", icon: "🎵", title: isKo ? "드라마 추천 3" : "드라마 추천 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-052/", icon: "📖", title: isKo ? "쇼핑 카테고리 3" : "쇼핑 카테고리 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-053/", icon: "🎮", title: isKo ? "점심 룰렛 3" : "점심 룰렛 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-054/", icon: "✈️", title: isKo ? "저녁 메뉴 3" : "저녁 메뉴 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-055/", icon: "🍹", title: isKo ? "카페 메뉴 3" : "카페 메뉴 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-056/", icon: "🍰", title: isKo ? "과일 뽑기 3" : "과일 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-057/", icon: "⚽", title: isKo ? "색상 뽑기 3" : "색상 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-058/", icon: "🎬", title: isKo ? "숫자 뽑기 3" : "숫자 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-059/", icon: "🛍️", title: isKo ? "요일 뽑기 3" : "요일 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-060/", icon: "🎲", title: isKo ? "계절 뽑기 3" : "계절 뽑기 3", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-061/", icon: "🎯", title: isKo ? "간식 룰렛 4" : "간식 룰렛 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-062/", icon: "🍿", title: isKo ? "영화 장르 4" : "영화 장르 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-063/", icon: "🎵", title: isKo ? "노래 추천 4" : "노래 추천 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-064/", icon: "📖", title: isKo ? "책 테마 4" : "책 테마 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-065/", icon: "🎮", title: isKo ? "취미 뽑기 4" : "취미 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-066/", icon: "✈️", title: isKo ? "주말 룰렛 4" : "주말 룰렛 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-067/", icon: "🍹", title: isKo ? "여행지 뽑기 4" : "여행지 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-068/", icon: "🍰", title: isKo ? "음료 룰렛 4" : "음료 룰렛 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-069/", icon: "⚽", title: isKo ? "디저트 룰렛 4" : "디저트 룰렛 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-070/", icon: "🎬", title: isKo ? "운동 뽑기 4" : "운동 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-071/", icon: "🛍️", title: isKo ? "드라마 추천 4" : "드라마 추천 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-072/", icon: "🎲", title: isKo ? "쇼핑 카테고리 4" : "쇼핑 카테고리 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-073/", icon: "🎯", title: isKo ? "점심 룰렛 4" : "점심 룰렛 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-074/", icon: "🍿", title: isKo ? "저녁 메뉴 4" : "저녁 메뉴 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-075/", icon: "🎵", title: isKo ? "카페 메뉴 4" : "카페 메뉴 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-076/", icon: "📖", title: isKo ? "과일 뽑기 4" : "과일 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-077/", icon: "🎮", title: isKo ? "색상 뽑기 4" : "색상 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-078/", icon: "✈️", title: isKo ? "숫자 뽑기 4" : "숫자 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-079/", icon: "🍹", title: isKo ? "요일 뽑기 4" : "요일 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-080/", icon: "🍰", title: isKo ? "계절 뽑기 4" : "계절 뽑기 4", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-081/", icon: "⚽", title: isKo ? "간식 룰렛 5" : "간식 룰렛 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-082/", icon: "🎬", title: isKo ? "영화 장르 5" : "영화 장르 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-083/", icon: "🛍️", title: isKo ? "노래 추천 5" : "노래 추천 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-084/", icon: "🎲", title: isKo ? "책 테마 5" : "책 테마 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-085/", icon: "🎯", title: isKo ? "취미 뽑기 5" : "취미 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-086/", icon: "🍿", title: isKo ? "주말 룰렛 5" : "주말 룰렛 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-087/", icon: "🎵", title: isKo ? "여행지 뽑기 5" : "여행지 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-088/", icon: "📖", title: isKo ? "음료 룰렛 5" : "음료 룰렛 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-089/", icon: "🎮", title: isKo ? "디저트 룰렛 5" : "디저트 룰렛 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-090/", icon: "✈️", title: isKo ? "운동 뽑기 5" : "운동 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-091/", icon: "🍹", title: isKo ? "드라마 추천 5" : "드라마 추천 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-092/", icon: "🍰", title: isKo ? "쇼핑 카테고리 5" : "쇼핑 카테고리 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-093/", icon: "⚽", title: isKo ? "점심 룰렛 5" : "점심 룰렛 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-094/", icon: "🎬", title: isKo ? "저녁 메뉴 5" : "저녁 메뉴 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-095/", icon: "🛍️", title: isKo ? "카페 메뉴 5" : "카페 메뉴 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-096/", icon: "🎲", title: isKo ? "과일 뽑기 5" : "과일 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-097/", icon: "🎯", title: isKo ? "색상 뽑기 5" : "색상 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-098/", icon: "🍿", title: isKo ? "숫자 뽑기 5" : "숫자 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-099/", icon: "🎵", title: isKo ? "요일 뽑기 5" : "요일 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-100/", icon: "📖", title: isKo ? "계절 뽑기 5" : "계절 뽑기 5", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-101/", icon: "🎮", title: isKo ? "간식 룰렛 6" : "간식 룰렛 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-102/", icon: "✈️", title: isKo ? "영화 장르 6" : "영화 장르 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-103/", icon: "🍹", title: isKo ? "노래 추천 6" : "노래 추천 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-104/", icon: "🍰", title: isKo ? "책 테마 6" : "책 테마 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-105/", icon: "⚽", title: isKo ? "취미 뽑기 6" : "취미 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-106/", icon: "🎬", title: isKo ? "주말 룰렛 6" : "주말 룰렛 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-107/", icon: "🛍️", title: isKo ? "여행지 뽑기 6" : "여행지 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-108/", icon: "🎲", title: isKo ? "음료 룰렛 6" : "음료 룰렛 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-109/", icon: "🎯", title: isKo ? "디저트 룰렛 6" : "디저트 룰렛 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-110/", icon: "🍿", title: isKo ? "운동 뽑기 6" : "운동 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-111/", icon: "🎵", title: isKo ? "드라마 추천 6" : "드라마 추천 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-112/", icon: "📖", title: isKo ? "쇼핑 카테고리 6" : "쇼핑 카테고리 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-113/", icon: "🎮", title: isKo ? "점심 룰렛 6" : "점심 룰렛 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-114/", icon: "✈️", title: isKo ? "저녁 메뉴 6" : "저녁 메뉴 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-115/", icon: "🍹", title: isKo ? "카페 메뉴 6" : "카페 메뉴 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-116/", icon: "🍰", title: isKo ? "과일 뽑기 6" : "과일 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-117/", icon: "⚽", title: isKo ? "색상 뽑기 6" : "색상 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-118/", icon: "🎬", title: isKo ? "숫자 뽑기 6" : "숫자 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-119/", icon: "🛍️", title: isKo ? "요일 뽑기 6" : "요일 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    { href: "https://funnyfunny.cloud/tools/game-120/", icon: "🎲", title: isKo ? "계절 뽑기 6" : "계절 뽑기 6", desc: isKo ? "랜덤 뽑기." : "랜덤 뽑기.", tags: isKo ? ["game"] : ["game"] },
    {
      href: "https://time.funnyfunny.cloud",
      icon: "⏰",
      title: isKo ? "예매는타이밍" : "Time Checker",
      desc: isKo
        ? "정확한 서버 시간과 예매 도우미."
        : "Accurate server time and ticketing helper.",
      tags: isKo
        ? ["시간", "서버시간", "예매"]
        : ["time", "server-time", "ticketing"],
    },
    {
      href: "https://news.funnyfunny.cloud",
      icon: "📰",
      title: isKo ? "오늘의 IT 뉴스" : "IT News Today",
      desc: isKo
        ? "국내·해외 IT 뉴스 빠른 요약."
        : "Quick summaries of domestic and global IT news.",
      tags: isKo ? ["뉴스", "IT", "요약"] : ["news", "IT", "summary"],
    },
    {
      href: "https://weather.funnyfunny.cloud",
      icon: "🌤️",
      title: isKo ? "지금날씨" : "Current Weather",
      desc: isKo
        ? "내 근처 날씨 조건 확인."
        : "Check nearby weather conditions.",
      tags: isKo ? ["날씨", "미세먼지", "자외선"] : ["weather", "dust", "UV"],
    },
    {
      href: "https://emojicon.funnyfunny.cloud",
      icon: "🎨",
      title: isKo ? "EmojiCon Studio" : "EmojiCon Studio",
      desc: isKo
        ? "이모지로 아이콘·파비콘 제작."
        : "Create icons and favicons from emojis.",
      tags: isKo
        ? ["아이콘", "파비콘", "이모지"]
        : ["icons", "favicon", "emoji"],
    },
    {
      href: "https://snaptrail.funnyfunny.cloud",
      icon: "📍",
      title: isKo ? "SnapTrail" : "SnapTrail",
      desc: isKo
        ? "자동 그룹화된 사진 타임라인 생성기."
        : "Automatically grouped photo timeline generator.",
      tags: isKo
        ? ["사진", "타임라인", "추억"]
        : ["photos", "timeline", "memories"],
    },
    {
      href: "https://day.funnyfunny.cloud",
      icon: "📅",
      title: isKo ? "D-day 계산기" : "D-day Calculator",
      desc: isKo
        ? "날짜 계산, D-day, N일 후, 기념일, 위젯."
        : "Date calculations, D-Day, days after, anniversaries, widgets.",
      tags: isKo
        ? ["날짜", "D-day", "기념일"]
        : ["date", "D-day", "anniversary"],
    },
    {
      href: "https://birth.funnyfunny.cloud",
      icon: "🎂",
      title: isKo ? "나이 계산기" : "Birth Age Calculator",
      desc: isKo
        ? "생년월일만 입력하면 만·연·세는 나이를 한 번에. 다음 생일 D-day, 링크 공유."
        : "Enter birth date to get Korean age, international age, and next birthday D-day. Share via link.",
      tags: isKo
        ? ["나이", "만 나이", "생년월일", "D-day"]
        : ["age", "birth", "calculator", "D-day"],
    },
    {
      href: "https://emote.funnyfunny.cloud",
      icon: "😊",
      title: isKo ? "희노애락" : "Emote",
      desc: isKo
        ? "감정을 털어놓는 익명 썰 플랫폼. 희·노·애·락으로 공감받으세요."
        : "Anonymous emotion story platform. Share joy, anger, love, and fun.",
      tags: isKo
        ? ["감정", "썰", "익명", "공감", "희노애락"]
        : ["emotion", "story", "anonymous", "community"],
    },
    {
      href: "https://run.funnyfunny.cloud",
      icon: "🦖",
      title: isKo ? "공룡 러너" : "Dino Runner",
      desc: isKo
        ? "공룡 러너 스타일 랭킹 게임."
        : "Dino runner-style ranking game.",
      tags: isKo ? ["게임", "공룡", "랭킹"] : ["game", "dino", "ranking"],
    },
    {
      href: "https://charm.funnyfunny.cloud/",
      icon: "🛸",
      title: isKo ? "참참참 (NEON ARCADE)" : "Cham Cham Cham! (NEON ARCADE)",
      desc: isKo
        ? "차선을 바꿔 미사일 피하기."
        : "Switch lanes to dodge missiles.",
      tags: isKo ? ["게임", "아케이드", "회피"] : ["game", "arcade", "dodge"],
    },
    {
      href: "https://downy.funnyfunny.cloud/",
      icon: "🪜",
      title: isKo ? "Downy (NEON STAIRS)" : "Downy (NEON STAIRS)",
      desc: isKo
        ? "계단에서 좌우로 발 디디기. 떨어지면 끝."
        : "Step left/right on stairs; fall and it’s over.",
      tags: isKo ? ["게임", "아케이드", "계단"] : ["game", "arcade", "stairs"],
    },
    {
      href: "https://neox.funnyfunny.cloud/",
      icon: "🚀",
      title: isKo ? "NEOX 네오 아케이드 슈터" : "NEOX Neo Arcade Shooter",
      desc: isKo
        ? "네온 탄막을 피하며 점수를 올리는 슈팅 게임."
        : "An arcade shooter where you dodge neon barrages and climb the score.",
      tags: isKo
        ? ["게임", "아케이드", "슈팅", "네온"]
        : ["game", "arcade", "shooter", "neon"],
    },
    {
      href: "https://tet.funnyfunny.cloud/",
      icon: "🧱",
      title: isKo ? "데일리 테트리스" : "Daily Tetris",
      desc: isKo
        ? "솔로 AI와 2인용 지원 테트리스."
        : "Tetris with solo AI and two-player support.",
      tags: isKo
        ? ["게임", "테트리스", "퍼즐", "2인용"]
        : ["game", "tetris", "puzzle", "two-player"],
    },
    {
      href: "https://solhwatu.funnyfunny.cloud",
      icon: "🎴",
      title: isKo ? "화투 솔리테어" : "Hwatu Solitaire",
      desc: isKo
        ? "트럼프 대신 화투로 즐기는 카드 쌓기 게임."
        : "A card stacking game using Hwatu cards instead of playing cards.",
      tags: isKo
        ? ["화투", "솔리테어", "게임", "카드", "퍼즐", "오락"]
        : ["hwatu", "solitaire", "game", "cards", "puzzle", "entertainment"],
    },
    {
      href: "https://random.funnyfunny.cloud/",
      icon: "🎱",
      title: isKo ? "네온 핀볼 랜덤 뽑기 — 번호 추첨" : "Neon Pinball Random Draw",
      desc: isKo
        ? "굴러가는 핀볼로 랜덤 당첨자 선택."
        : "Rolling pinballs pick a random winner.",
      tags: isKo ? ["게임", "랜덤", "핀볼"] : ["game", "random", "pinball"],
    },
    {
      href: "https://balance.funnyfunny.cloud/",
      icon: "⚖️",
      title: isKo ? "밸런스 게임" : "Balance Game",
      desc: isKo
        ? "두 가지 선택 질문 만들고 바로 공유."
        : "Create two-choice questions and share instantly.",
      tags: isKo
        ? ["게임", "밸런스", "질문", "선택"]
        : ["game", "balance", "questions", "choices"],
    },
    {
      href: "https://xmas.funnyfunny.cloud/",
      icon: "🎁",
      title: isKo ? "따뜻한 선물 보고서" : "Warm Gift Report",
      desc: isKo
        ? "🎯 따뜻한 선물 도착 확률."
        : "🎯 Probability of a warm gift arrival.",
      tags: isKo
        ? ["크리스마스", "선물", "확률", "보고서"]
        : ["christmas", "gift", "probability", "report"],
    },
    {
      href: "https://hand.funnyfunny.cloud/",
      icon: "✋",
      title: isKo ? "손바닥 썰 푼다" : "Palm Reading Story",
      desc: isKo
        ? "사진 한 장으로 손금 인사이트."
        : "Palm-line insights from a single photo.",
      tags: isKo
        ? ["손금", "성격", "분석", "사진"]
        : ["palm", "personality", "analysis", "photo"],
    },
    {
      href: "https://soccer.funnyfunny.cloud/",
      icon: "⚽",
      title: isKo ? "우리 둘의 조합 축구선수" : "Soccer Combo",
      desc: isKo
        ? "두 성향을 섞어 맞는 축구선수 찾기."
        : "Combine two personalities to find a matching footballer.",
      tags: isKo
        ? ["축구", "조합", "궁합", "테스트"]
        : ["soccer", "combo", "compatibility", "test"],
    },
    {
      href: "http://sudoku.funnyfunny.cloud/",
      icon: "🧩",
      title: isKo ? "스도쿠 웹게임" : "Sudoku Web Game",
      desc: isKo
        ? "난이도별로 선택할 수 있는 클래식 스도쿠."
        : "Classic sudoku with selectable difficulty.",
      tags: isKo
        ? ["스도쿠", "퍼즐", "게임", "두뇌"]
        : ["sudoku", "puzzle", "game", "brain"],
    },
  ];
}

/** Path 이식 SEO: subdomain href → path slug (1:1). 예외는 HREF_TO_SLUG로. */
const HREF_TO_SLUG = {
  "http://heic.funnyfunny.cloud/": "heic",
  "http://sudoku.funnyfunny.cloud/": "sudoku",
};

export const TOOL_PATH_BASE = "https://funnyfunny.cloud";

export function hrefToSlug(href) {
  const normalized = href.replace(/\/$/, "") + "/";
  if (HREF_TO_SLUG[normalized]) return HREF_TO_SLUG[normalized];
  try {
    const u = new URL(href);
    const m = u.pathname.match(/^\/tools\/([^/]+)\/$/);
    if (m && u.hostname === "funnyfunny.cloud") return m[1];
    const host = u.hostname;
    const sub = host.split(".")[0];
    return sub || "";
  } catch {
    return "";
  }
}

export function getToolSlugs(lang = "en") {
  const services = getAllServices(lang);
  const slugs = [
    ...new Set(
      services.map((s) => hrefToSlug(s.href)).filter(Boolean)
    ),
  ];
  return slugs.sort();
}

export function getToolPath(slug) {
  return `${TOOL_PATH_BASE}/tools/${slug}/`;
}

/** 계산기·변환·시뮬레이션 도구 슬러그 (랜딩 페이지용) */
const CALCULATOR_SLUGS = [
  "n", "tax", "space", "bit", "house", "commute", "birth", "day", "edu",
  "nospend", "cafe", "drink", "waste", "year", "lotto", "average", "life",
  "miracle", "baby", "loancalc", "electric", "platformfee", "severance", "vat", "gas",
  "saving", "exchange", "unit", "savings-goal",
  "salary-tax", "yield", "age-now", "discount", "bmi-check", "wage", "dsr",
  "tip", "annual-leave", "moving", "tdee", "rent", "realtor-fee", "parking",
  "standard-weight", "installment", "unemployment", "unit-price", "parental-leave", "pension-monthly", "compare",
  "tax-refund", "weekly-rest", "inflation", "leave-balance", "debt-ratio", "savings-rate", "real-rate",
  "due-date", "interest-simple", "calorie-goal", "vacation-cost", "present-value", "daily-prorated", "target-yield",
  "compound-interest", "loan-remaining", "break-even", "cagr", "roi", "subscription-yearly", "fuel-cost", "emergency-fund", "mortgage-monthly", "fee-per-use", "doubling-time", "pension-lump", "child-cost", "pet-cost", "wedding-cost",
  "business-days", "countdown", "week-number", "add-days", "time-between", "work-hours", "meeting-cost", "age-diff",
  "protein-goal", "water-intake", "bmr-only", "one-rep-max", "pace-calc", "calorie-burn", "sleep-debt", "bmi-range", "ideal-weight", "body-fat-est",
  "coffee-yearly", "delivery-yearly", "ott-total", "gym-value", "lunch-cost", "cigarette-cost", "alcohol-monthly", "snack-cost", "phone-compare", "car-depreciation", "book-budget", "study-hours",
  "percent-change", "percent-of", "reverse-percent", "margin-markup", "split-percent", "tax-bracket", "allocation", "growth-rate",
  "area-convert", "volume-convert", "speed-convert", "data-size", "timezone-diff", "pressure-convert", "energy-convert",
  "loan-payoff-date", "solar-payback", "carbon-footprint", "habit-streak", "dice", "marathon-pace", "readability", "battery-life", "discount-stack", "rent-ratio",
  "coin-flip", "rps", "random-name", "random-number", "team-split", "spin-wheel", "card-draw", "bingo-caller", "truth-dare", "yes-no",
  "random-pair", "order-random", "lottery-six", "word-random", "color-random", "penalty-random", "random-first", "elimination-order", "emoji-random", "random-line",
  "countdown-timer", "stopwatch", "turn-timer", "scoreboard", "life-counter", "game-timer", "score-keeper", "timer-bomb", "quick-draw", "reaction-test",
  "dice-d20", "dice-2d6", "dice-d100", "dice-fate", "card-deck", "uno-draw", "rps-lizard-spock", "coin-flip-3", "dice-pool", "card-hand",
  "mafia-role", "werewolf-role", "charade-word", "pictionary-word", "secret-santa", "dinner-picker", "movie-picker", "song-random", "tier-picker", "mood-random",
  "nickname-gen", "couple-name", "mbti-random", "lucky-number", "fortune-cookie", "compliment-random", "excuse-generator", "decision-wheel", "bottle-spin", "random-date",
  "tarot-single", "horoscope-daily", "mood-ring", "random-advice", "would-you-rather", "never-have-i", "this-or-that", "random-challenge", "gratitude-pick", "hobby-suggest",
  "weekend-idea", "coffee-order", "workout-random", "book-suggest", "movie-genre", "korean-name", "team-name-gen", "slogan-random", "daily-quote", "emoji-combo", "first-letter",
  "random-food", "magic-8-ball", "pet-name-gen", "band-name-gen", "dinner-roulette", "affirmation-daily", "birth-flower", "icebreaker", "dare-random", "color-palette", "number-lucky", "conversation-starter", "recipe-roulette", "gift-idea", "date-idea", "motivation-daily", "mantra-daily", "two-truths-lie", "random-superpower", "random-country", "random-job", "tongue-twister", "riddle-daily", "roast-mild", "pep-talk", "cocktail-random", "dessert-roulette", "travel-destination", "weekend-trip", "indoor-activity", "outdoor-activity", "rainy-day", "playlist-mood", "study-tip", "sleep-tip", "focus-tip", "random-act-kindness", "self-care-idea", "gratitude-daily", "letter-to-self", "enneagram-random", "love-language", "spirit-animal", "hogwarts-house", "harry-potter-random", "kdrama-pick", "anime-pick", "podcast-genre", "writing-prompt", "drawing-prompt", "coding-project-idea", "startup-idea", "debate-topic", "question-of-day", "poll-idea", "rpg-class", "character-trait", "baby-name-ko", "wedding-vow-idea", "apology-msg", "thank-you-note", "random-recipe", "random-exercise", "random-instrument", "random-art-style", "random-plant", "random-flag", "omen-today", "lucky-charm", "zodiac-compat", "patronus-idea", "marvel-hero", "disney-character", "ghibli-character", "netflix-pick", "hashtag-random", "caption-idea", "bio-idea", "content-idea", "blog-topic", "vlog-idea", "meeting-icebreaker", "interview-question", "salary-tip", "morning-routine", "evening-routine", "habit-to-start", "bucket-list-one", "new-year-resolution", "gift-under-50", "holiday-idea", "birthday-idea", "anniversary-idea", "random-emoji-story", "random-hex", "random-question", "option-roulette", "choice-picker", "kind-message", "joke-clean",
  "game-001", "game-002", "game-003", "game-004", "game-005", "game-006", "game-007", "game-008", "game-009", "game-010", "game-011", "game-012", "game-013", "game-014", "game-015", "game-016", "game-017", "game-018", "game-019", "game-020", "game-021", "game-022", "game-023", "game-024", "game-025", "game-026", "game-027", "game-028", "game-029", "game-030", "game-031", "game-032", "game-033", "game-034", "game-035", "game-036", "game-037", "game-038", "game-039", "game-040", "game-041", "game-042", "game-043", "game-044", "game-045", "game-046", "game-047", "game-048", "game-049", "game-050", "game-051", "game-052", "game-053", "game-054", "game-055", "game-056", "game-057", "game-058", "game-059", "game-060", "game-061", "game-062", "game-063", "game-064", "game-065", "game-066", "game-067", "game-068", "game-069", "game-070", "game-071", "game-072", "game-073", "game-074", "game-075", "game-076", "game-077", "game-078", "game-079", "game-080", "game-081", "game-082", "game-083", "game-084", "game-085", "game-086", "game-087", "game-088", "game-089", "game-090", "game-091", "game-092", "game-093", "game-094", "game-095", "game-096", "game-097", "game-098", "game-099", "game-100", "game-101", "game-102", "game-103", "game-104", "game-105", "game-106", "game-107", "game-108", "game-109", "game-110", "game-111", "game-112", "game-113", "game-114", "game-115", "game-116", "game-117", "game-118", "game-119", "game-120",
];

/** 테스트·체크·진단 도구 슬러그 (랜딩 페이지용) */
const TEST_SLUGS = [
  "money", "coffee", "beauty", "cosmetics", "ego", "human", "alcohol", "lazy",
  "mental", "product", "rest", "dailycheck", "melancholy", "energy", "drain",
  "senseyear", "hairloss", "bmi", "specific", "invest", "next", "winter",
  "today", "todo", "dream", "fortune", "heal", "need", "mind", "temple",
  "test-001", "test-002", "test-003", "test-004", "test-005", "test-006", "test-007", "test-008", "test-009", "test-010", "test-011", "test-012", "test-013", "test-014", "test-015", "test-016", "test-017", "test-018", "test-019", "test-020", "test-021", "test-022", "test-023", "test-024", "test-025", "test-026", "test-027", "test-028", "test-029", "test-030", "test-031", "test-032", "test-033", "test-034", "test-035", "test-036", "test-037", "test-038", "test-039", "test-040", "test-041", "test-042", "test-043", "test-044", "test-045", "test-046", "test-047", "test-048", "test-049", "test-050", "test-051", "test-052", "test-053", "test-054", "test-055", "test-056", "test-057", "test-058", "test-059", "test-060", "test-061", "test-062", "test-063", "test-064", "test-065", "test-066", "test-067", "test-068", "test-069", "test-070", "test-071", "test-072", "test-073", "test-074", "test-075", "test-076", "test-077", "test-078", "test-079", "test-080", "test-081", "test-082", "test-083", "test-084", "test-085", "test-086", "test-087", "test-088", "test-089", "test-090", "test-091", "test-092", "test-093", "test-094", "test-095", "test-096", "test-097", "test-098", "test-099", "test-100", "test-101", "test-102", "test-103", "test-104", "test-105", "test-106", "test-107", "test-108", "test-109", "test-110", "test-111", "test-112", "test-113", "test-114", "test-115", "test-116", "test-117", "test-118", "test-119", "test-120", "test-121", "test-122", "test-123", "test-124", "test-125", "test-126", "test-127", "test-128", "test-129", "test-130", "test-131", "test-132", "test-133", "test-134", "test-135", "test-136", "test-137", "test-138", "test-139", "test-140", "test-141", "test-142", "test-143", "test-144", "test-145", "test-146", "test-147", "test-148", "test-149", "test-150", "test-151", "test-152", "test-153", "test-154", "test-155", "test-156", "test-157", "test-158", "test-159", "test-160", "test-161", "test-162", "test-163", "test-164", "test-165", "test-166", "test-167", "test-168", "test-169", "test-170", "test-171", "test-172", "test-173", "test-174", "test-175", "test-176", "test-177", "test-178", "test-179", "test-180", "test-181", "test-182", "test-183", "test-184", "test-185", "test-186", "test-187", "test-188", "test-189", "test-190", "test-191", "test-192", "test-193", "test-194", "test-195", "test-196", "test-197", "test-198", "test-199", "test-200", "test-201", "test-202", "test-203", "test-204", "test-205", "test-206", "test-207", "test-208", "test-209", "test-210", "test-211", "test-212", "test-213", "test-214", "test-215", "test-216", "test-217", "test-218", "test-219", "test-220", "test-221", "test-222", "test-223", "test-224", "test-225", "test-226", "test-227", "test-228", "test-229", "test-230", "test-231", "test-232", "test-233", "test-234", "test-235", "test-236", "test-237", "test-238", "test-239", "test-240", "test-241", "test-242", "test-243", "test-244", "test-245", "test-246", "test-247", "test-248", "test-249", "test-250", "test-251", "test-252", "test-253", "test-254", "test-255", "test-256", "test-257", "test-258", "test-259", "test-260", "test-261", "test-262", "test-263", "test-264", "test-265", "test-266", "test-267", "test-268", "test-269", "test-270", "test-271", "test-272", "test-273", "test-274", "test-275", "test-276", "test-277", "test-278", "test-279", "test-280", "test-281", "test-282", "test-283", "test-284", "test-285", "test-286", "test-287", "test-288", "test-289", "test-290", "test-291", "test-292", "test-293", "test-294", "test-295", "test-296", "test-297", "test-298", "test-299", "test-300",
];

/** 게임·랜덤 뽑기 도구 슬러그 (coin-flip 이후 = 랜덤/게임 성격) */
const GAME_SLUGS = CALCULATOR_SLUGS.slice(CALCULATOR_SLUGS.indexOf("coin-flip"));

export function getCalculators(lang = "en") {
  const services = getAllServices(lang);
  return services.filter((s) => CALCULATOR_SLUGS.includes(hrefToSlug(s.href)));
}

export function getTests(lang = "en") {
  const services = getAllServices(lang);
  return services.filter((s) => TEST_SLUGS.includes(hrefToSlug(s.href)));
}

export function getGames(lang = "en") {
  const services = getAllServices(lang);
  return services.filter((s) => GAME_SLUGS.includes(hrefToSlug(s.href)));
}
