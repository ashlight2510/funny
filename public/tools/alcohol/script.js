// 질문 데이터
const questions = [
  {
    question: "Q1. 선호하는 술자리 분위기는?",
    choices: [
      { label: "조용하고 소수만 있는 술자리", types: ["I"] },
      { label: "적당히 북적한 술집", types: ["E"] },
      { label: "다른 테이블과도 금방 친해질 장소", types: ["E"] },
      { label: "혼술이 최고", types: ["I"] }
    ]
  },
  {
    question: "Q2. 술자리에 도착했을 때 당신은?",
    choices: [
      { label: "조용히 자기 자리", types: ["I"] },
      { label: "먼저 질문 던짐", types: ["E"] },
      { label: "농담하고 분위기 띄움", types: ["E"] },
      { label: "상황 보고 반응만", types: ["I"] }
    ]
  },
  {
    question: "Q3. 술을 마시는 주된 이유는?",
    choices: [
      { label: "인간관계·네트워킹", types: ["T", "J"] },
      { label: "스트레스 해소", types: ["T", "P"] },
      { label: "감성·수다", types: ["F", "E"] },
      { label: "맛·경험", types: ["S", "N"] }
    ]
  },
  {
    question: "Q4. 술자리에서 주로 하는 대화는?",
    choices: [
      { label: "현실적 주제", types: ["S", "T"] },
      { label: "인생/철학 대화", types: ["N", "F"] },
      { label: "잡담·가십", types: ["E", "F"] },
      { label: "듣기 위주", types: ["I", "N"] }
    ]
  },
  {
    question: "Q5. 술이 들어가면 당신은?",
    choices: [
      { label: "말 많아짐", types: ["E"] },
      { label: "말 줄고 미소", types: ["I"] },
      { label: "감성과몰입", types: ["N", "F"] },
      { label: "내일 일정·정리", types: ["T", "J"] }
    ]
  },
  {
    question: "Q6. 술자리 약속 스타일은?",
    choices: [
      { label: "미리 약속 잡기", types: ["J"] },
      { label: "즉흥 술자리", types: ["P", "E"] },
      { label: "컨디션 보고 결정", types: ["P"] },
      { label: "내일 힘들면 캔슬", types: ["J", "T"] }
    ]
  },
  {
    question: "Q7. 술자리에서 주문 스타일은?",
    choices: [
      { label: "메뉴 맞춰 주문", types: ["S", "J"] },
      { label: "각자 원하는 걸 주문", types: ["P", "F"] },
      { label: "신메뉴 시도", types: ["N", "P"] },
      { label: "가격·가성비 고려", types: ["T", "J"] }
    ]
  },
  {
    question: "Q8. 술자리 다음날 기억은?",
    choices: [
      { label: "필름 끊김 잦음", types: ["P", "F"] },
      { label: "디테일 기억함", types: ["S", "T"] },
      { label: "감정만 기억", types: ["F", "N"] },
      { label: "술 줄이자 다짐", types: ["J", "T"] }
    ]
  },
  {
    question: "Q9. 술자리에서 갈등 상황이 생기면?",
    choices: [
      { label: "바로 정리·룰 세움", types: ["T", "J"] },
      { label: "분위기 위해 넘김", types: ["F", "E"] },
      { label: "조율·중재", types: ["F", "J"] },
      { label: "상황 보고 빠짐", types: ["I", "P"] }
    ]
  },
  {
    question: "Q10. 이상적인 술자리는?",
    choices: [
      { label: "단골집 루틴 술자리", types: ["S", "J"] },
      { label: "여행지·새 경험", types: ["N", "P"] },
      { label: "소수 홈술", types: ["I", "F"] },
      { label: "대형 네트워킹", types: ["E", "T"] }
    ]
  }
];

// MBTI 결과 데이터
const mbtiResults = {
  ISTJ: {
    title: "절제형 술고래",
    desc: "계획적으로 마시고, 실수 없는 타입. 주량은 꽤 있지만 깔끔하게 컨트롤."
  },
  ISFJ: {
    title: "보살형 챙김러",
    desc: "잔·안주·귀가까지 다 챙기는 따뜻한 타입."
  },
  INFJ: {
    title: "감성 상담가형",
    desc: "술잔만 보면 인생 상담 모드. 조용히 깊게 취하는 타입."
  },
  INTJ: {
    title: "관찰자 설계자형",
    desc: "술자리 구조를 조용히 분석하고 최적화."
  },
  ISTP: {
    title: "무심한 실용주의형",
    desc: "필요하면 마시고 아니면 바로 귀가. 과묵하지만 멋있음."
  },
  ISFP: {
    title: "잔잔 감성파",
    desc: "편안한 분위기와 감성 위주 술자리 선호."
  },
  INFP: {
    title: "취하면 시인형",
    desc: "첫사랑·꿈·인생 얘기 나오는 감성폭발형."
  },
  INTP: {
    title: "말없이 취하는 과학자형",
    desc: "티 안 나게 취하지만 머릿속은 시끄러움."
  },
  ESTP: {
    title: "액션 플레이어형",
    desc: "게임·노래방·2차 주도. 술자리 에너지 담당."
  },
  ESFP: {
    title: "인싸 아이돌형",
    desc: "필름은 끊겨도 텐션은 안 끊김. 웃음 폭탄."
  },
  ENFP: {
    title: "필름끊고 텐션은 안끊김형",
    desc: "초면과 친구됨. 흑역사 뿜뿜."
  },
  ENTP: {
    title: "토론·드립 폭격기형",
    desc: "말발 터지고 밈 난사하는 타입."
  },
  ESTJ: {
    title: "술자리 운영자형",
    desc: "PM처럼 모임 운영·정리. 책임감 강함."
  },
  ESFJ: {
    title: "분위기 케어 리더형",
    desc: "다 함께 재밌어야 하는 분위기 메이커."
  },
  ENFJ: {
    title: "술판 인생코치형",
    desc: "칭찬·피드백 폭격. 사람 남기는 술자리."
  },
  ENTJ: {
    title: "술판 리더형",
    desc: "오늘 모임의 진행·결정·아젠다 설정 담당."
  }
};

// 상태 관리
let currentQuestionIndex = 0;
let scores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

const MORE_TESTS_URL = 'https://funnyfunny.cloud/';

/* i18n */
const translations = {
  ko: {
    metaTitle: "나의 주량 MBTI 테스트",
    metaDescription: "당신의 술자리 성향을 알아보는 재미있는 MBTI 테스트",
    title: "🍺 나의 주량 MBTI 테스트",
    subtitle: "당신의 술자리 성향을 알아보는<br />재미있는 테스트입니다",
    startBtn: "테스트 시작하기",
    restartBtn: "다시하기",
    shareBtn: "결과 공유하기",
    moreTestsBtn: "더 많은 테스트 해보기",
    progressText: "질문 {current} / {total}",
    resultMessage: "당신의 술자리 성향을 확인했어요! 🎉"
  },
  en: {
    metaTitle: "My Drinking MBTI Test",
    metaDescription: "A fun MBTI test to discover your drinking personality",
    title: "🍺 My Drinking MBTI Test",
    subtitle: "A fun test to discover<br />your drinking personality",
    startBtn: "Start Test",
    restartBtn: "Try Again",
    shareBtn: "Share Result",
    moreTestsBtn: "Try More Tests",
    progressText: "Question {current} / {total}",
    resultMessage: "Your drinking personality has been confirmed! 🎉"
  }
};

const defaultLang = "ko";
const supportedLangs = ["ko", "en"];
let currentLang = defaultLang;

function t(key, vars = {}) {
  const langTable = translations[currentLang] || translations.ko;
  const template = langTable?.[key] ?? translations.ko?.[key] ?? key;
  if (typeof template !== "string") return template;
  return template.replace(/\{(\w+)\}/g, (_, token) =>
    vars[token] !== undefined ? vars[token] : `{${token}}`
  );
}

function applyTranslations() {
  document.title = t("metaTitle");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("metaDescription"));
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.dataset.i18n === "subtitle") {
      el.innerHTML = t("subtitle");
    } else {
      el.textContent = t(el.dataset.i18n);
    }
  });
}

function setLang(lang, options = {}) {
  const nextLang = translations[lang] ? lang : defaultLang;
  currentLang = nextLang;
  document.documentElement.lang = nextLang;
  localStorage.setItem("preferredLang", nextLang);
  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLang);
  });
  applyTranslations();
  if (options.updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.replaceState({}, "", url);
  }
}

function detectLang() {
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get("lang");
  if (supportedLangs.includes(paramLang)) return paramLang;
  const stored = localStorage.getItem("preferredLang");
  if (supportedLangs.includes(stored)) return stored;
  const browserLang =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  if (browserLang && browserLang.toLowerCase().startsWith("ko")) {
    return "ko";
  }
  return defaultLang;
}

document.querySelectorAll(".lang-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    setLang(button.dataset.lang, { updateUrl: true });
  });
});

setLang(detectLang(), { updateUrl: false });

// DOM 요소
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const moreTestsBtn = document.getElementById('moreTestsBtn');
const questionText = document.getElementById('questionText');
const choicesContainer = document.getElementById('choicesContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const progressPercent = document.getElementById('progressPercent');
const resultContent = document.getElementById('resultContent');

// 시작 버튼 클릭
startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  showQuestion(0);
});

// 다시하기 버튼 클릭
restartBtn.addEventListener('click', () => {
  // 상태 초기화
  currentQuestionIndex = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  // 화면 전환
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  showQuestion(0);
});

// 공유 버튼 클릭
shareBtn.addEventListener('click', () => {
  const mbtiType = calculateMBTI();
  const result = mbtiResults[mbtiType];
  const shareText = `나의 주량 MBTI는 "${result.title}" (${mbtiType})입니다!\n${result.desc}\n\n테스트 해보기: ${window.location.href}`;
  
  // 클립보드에 복사
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('결과가 클립보드에 복사되었습니다!');
    }).catch(() => {
      // 폴백: 텍스트 선택 방식
      fallbackCopyText(shareText);
    });
  } else {
    fallbackCopyText(shareText);
  }
});

// 더 많은 테스트 해보기 버튼 클릭
if (moreTestsBtn) {
  moreTestsBtn.addEventListener('click', () => {
    window.open(MORE_TESTS_URL, '_blank', 'noopener');
  });
}

// 폴백 복사 함수
function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('결과가 클립보드에 복사되었습니다!');
  } catch (err) {
    alert('복사에 실패했습니다. 수동으로 복사해주세요.');
  }
  
  document.body.removeChild(textArea);
}

// 질문 표시
function showQuestion(index) {
  if (index >= questions.length) {
    showResult();
    return;
  }
  
  currentQuestionIndex = index;
  const question = questions[index];
  
  // 질문 텍스트 업데이트
  questionText.textContent = question.question;
  
  // 프로그레스 바 업데이트
  const progress = ((index + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = t("progressText", { current: index + 1, total: questions.length });
  progressPercent.textContent = `${Math.round(progress)}%`;
  
  // 선택지 렌더링
  choicesContainer.innerHTML = '';
  question.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement('button');
    button.className = 'w-full bg-gradient-to-r from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md text-left';
    button.textContent = choice.label;
    button.addEventListener('click', () => {
      // 점수 추가
      choice.types.forEach(type => {
        scores[type]++;
      });
      
      // 다음 질문으로
      setTimeout(() => {
        showQuestion(index + 1);
      }, 200);
    });
    
    choicesContainer.appendChild(button);
  });
}

// 결과 계산 및 표시
function calculateMBTI() {
  const eScore = scores.E;
  const iScore = scores.I;
  const sScore = scores.S;
  const nScore = scores.N;
  const tScore = scores.T;
  const fScore = scores.F;
  const jScore = scores.J;
  const pScore = scores.P;
  
  const mbti = 
    (eScore >= iScore ? 'E' : 'I') +
    (sScore >= nScore ? 'S' : 'N') +
    (tScore >= fScore ? 'T' : 'F') +
    (jScore >= pScore ? 'J' : 'P');
  
  return mbti;
}

// 결과 화면 표시
function showResult() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  
  const mbtiType = calculateMBTI();
  const result = mbtiResults[mbtiType];
  
  resultContent.innerHTML = `
    <div class="mb-6">
      <div class="text-6xl mb-4">🍺</div>
      <div class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">${mbtiType}</div>
      <div class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">${result.title}</div>
    </div>
    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6">
      <p class="text-lg text-gray-700 leading-relaxed">${result.desc}</p>
    </div>
    <div class="text-sm text-gray-500">
      ${t("resultMessage")}
    </div>
  `;
  
  // 결과를 URL에 추가 (선택사항)
  const url = new URL(window.location);
  url.searchParams.set('result', mbtiType);
  window.history.pushState({}, '', url);
}
