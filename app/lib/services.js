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
    slug: "image-text-extract",
    emoji: "🔍",
    title: isKo ? "이미지 텍스트 추출기 가이드" : "Image Text Extractor Guide",
    desc: isKo ? "이미지에서 텍스트를 추출하고 복사하는 빠른 OCR 워크플로우." : "Quick OCR workflow to extract and copy text from images.",
  },
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
      title: isKo ? "오늘의 할 일" : "Today's To-Do",
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
      title: isKo ? "꿈 일기" : "Dream Diary",
      desc: isKo
        ? "태그로 정리하는 로컬 꿈 기록장."
        : "A local dream journal with tagging.",
      tags: isKo
        ? ["꿈", "일기", "기록", "로컬"]
        : ["dreams", "journal", "records", "local"],
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
      title: isKo ? "동기부여 리셋" : "Motivation Reset",
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
      title: isKo ? "투자 확신 빌더" : "Investment Confidence Builder",
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
      title: isKo ? "N빵 계산기" : "Split-the-Bill Calculator",
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
      title: isKo ? "냉장고 구조대" : "Fridge Rescue",
      desc: isKo
        ? "냉장고에 있는 재료로 지금 가능한 요리를 구조합니다."
        : "Rescue recipes you can make right now with ingredients in your fridge.",
      tags: isKo
        ? ["냉장고", "요리", "레시피", "재료", "구조", "음식"]
        : ["fridge", "cooking", "recipe", "ingredients", "rescue", "food"],
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
      href: "https://random.funnyfunny.cloud/",
      icon: "🎱",
      title: isKo ? "네온 핀볼 랜덤 뽑기" : "Neon Pinball Random Draw",
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
      title: "Sudoku Web Game",
      desc: "Classic sudoku with selectable difficulty.",
      tags: isKo
        ? ["스도쿠", "퍼즐", "게임", "두뇌"]
        : ["sudoku", "puzzle", "game", "brain"],
    },
  ];
}
