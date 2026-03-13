/**
 * 확장 도구 데이터: 계산기 65 + 테스트 170 + 유틸 500 + 게임 199 = 934개
 * - CALC_65: calc-001~065 (계산기)
 * - TEST_170: test-301~470 (테스트)
 * - UTIL_500: util-001~500 (유틸·인사이트)
 * - GAME_199: game-121~319 (게임)
 */
const TEST_ICONS = ["🧪", "📋", "💭", "🎯", "📊", "🔍", "💡", "❤️", "🧠", "⚖️", "🌱", "⏰", "😴", "🍽️", "🏃", "😊", "💪", "🌈", "📈", "🤝"];
const TEST_TITLES = [
  "스트레스 체크", "습관 진단", "관계 유형", "커리어 성향", "금융 지식", "건강 점수", "수면 품질", "식습관 체크",
  "운동 습관", "기분 진단", "자신감 테스트", "창의성 체크", "시간관리", "소통 스타일", "번아웃 위험도", "일중독 체크",
  "우울감 체크", "불안 수준", "자존감 테스트", "감정조절", "결단력 체크", "리더십 스타일", "팀워크 성향", "갈등해결",
  "재무 성향", "절약 지수", "투자 성향", "생활만족도", "워라밸 체크", "목표의식", "학습 스타일", "집중력 체크",
  "에너지 레벨", "회복력 테스트", "감사 성향", "낙관성 체크", "호기심 수준", "도전 성향", "인내심 테스트"
];
const TEST_DESC = "간단 체크";
const TEST_DATA_POOL = [
  "매우 그렇다", "그런 편이다", "보통이다", "별로 아니다", "전혀 아니다",
  "자주 그렇다", "가끔 그렇다", "거의 없다", "항상 그렇다", "전혀 없다"
];

const GAME_ICONS = ["🎲", "🎯", "🍿", "🎵", "📖", "🎮", "✈️", "🍹", "🍰", "⚽", "🎬", "🛍️"];
const GAME_TITLES = [
  "간식 룰렛", "영화 장르", "노래 추천", "책 테마", "취미 뽑기", "주말 룰렛", "여행지 뽑기", "음료 룰렛",
  "디저트 룰렛", "운동 뽑기", "드라마 추천", "쇼핑 카테고리", "점심 룰렛", "저녁 메뉴", "카페 메뉴", "과일 뽑기",
  "색상 뽑기", "숫자 뽑기", "요일 뽑기", "계절 뽑기"
];
const GAME_DESC = "랜덤 뽑기";
const GAME_DATA_POOL = [
  "옵션 A", "옵션 B", "옵션 C", "옵션 D", "옵션 E", "옵션 F", "옵션 G", "옵션 H", "옵션 I", "옵션 J",
  "선택 1", "선택 2", "선택 3", "선택 4", "선택 5", "선택 6", "선택 7", "선택 8", "선택 9", "선택 10"
];

const CALC_ICONS = ["🧮", "📐", "📊", "💰", "⏱️", "📏", "🔢", "📈", "🔄", "⚖️"];
const CALC_TITLES = [
  "단가 계산", "비율 계산", "평균 계산", "할인 계산", "시간 계산", "면적 계산", "요약 계산", "증가율 계산", "변환 계산", "비교 계산"
];
const CALC_DESC = "간단 계산";

const UTIL_ICONS = ["🛠️", "💡", "📌", "🔧", "📋", "⚙️", "🎯", "📎", "✨", "🔍"];
const UTIL_TITLES = [
  "데이터 인사이트", "요약 도구", "체크리스트", "변환 유틸", "정리 도구", "설정 도우미", "목표 체크", "링크 정리", "인사이트 한줄", "검색 도우미"
];
const UTIL_DESC = "유틸·인사이트";

function pad3(n) {
  return String(n).padStart(3, "0");
}

function buildCalc65() {
  const out = [];
  for (let i = 1; i <= 65; i++) {
    const slug = `calc-${pad3(i)}`;
    const icon = CALC_ICONS[i % CALC_ICONS.length];
    const titleIdx = (i - 1) % CALC_TITLES.length;
    const titleKo = `${CALC_TITLES[titleIdx]} ${Math.floor((i - 1) / CALC_TITLES.length) + 1}`.trim();
    const data = ["결과 1", "결과 2", "결과 3", "결과 4", "결과 5"].slice(0, 3 + (i % 3));
    out.push({ slug, icon, titleKo, descKo: CALC_DESC, data });
  }
  return out;
}

function buildTest170() {
  const out = [];
  for (let i = 301; i <= 470; i++) {
    const slug = `test-${pad3(i)}`;
    const icon = TEST_ICONS[i % TEST_ICONS.length];
    const titleIdx = (i - 1) % TEST_TITLES.length;
    const titleKo = `${TEST_TITLES[titleIdx]} ${Math.floor((i - 1) / TEST_TITLES.length) + 1}`.trim();
    const data = TEST_DATA_POOL.slice(0, 5 + (i % 6)).map((s, j) => `${s} ${j + 1}`);
    out.push({ slug, icon, titleKo, descKo: TEST_DESC, data });
  }
  return out;
}

function buildUtil500() {
  const out = [];
  for (let i = 1; i <= 500; i++) {
    const slug = `util-${pad3(i)}`;
    const icon = UTIL_ICONS[i % UTIL_ICONS.length];
    const titleIdx = (i - 1) % UTIL_TITLES.length;
    const titleKo = `${UTIL_TITLES[titleIdx]} ${Math.floor((i - 1) / UTIL_TITLES.length) + 1}`.trim();
    const data = ["인사이트 A", "인사이트 B", "인사이트 C", "인사이트 D", "인사이트 E", "인사이트 F"].slice(0, 4 + (i % 3)).map((s, j) => `${s} ${i}-${j + 1}`);
    out.push({ slug, icon, titleKo, descKo: UTIL_DESC, data });
  }
  return out;
}

function buildGame199() {
  const out = [];
  for (let i = 121; i <= 319; i++) {
    const slug = `game-${pad3(i)}`;
    const icon = GAME_ICONS[i % GAME_ICONS.length];
    const titleIdx = (i - 1) % GAME_TITLES.length;
    const titleKo = `${GAME_TITLES[titleIdx]} ${Math.floor((i - 1) / GAME_TITLES.length) + 1}`.trim();
    const data = GAME_DATA_POOL.slice(0, 5 + (i % 6)).map((s, j) => `${s} ${i}-${j + 1}`);
    out.push({ slug, icon, titleKo, descKo: GAME_DESC, data });
  }
  return out;
}

export const CALC_65 = buildCalc65();
export const TEST_170 = buildTest170();
export const UTIL_500 = buildUtil500();
export const GAME_199 = buildGame199();
export const TOOLS_EXTEND_934 = [...CALC_65, ...TEST_170, ...UTIL_500, ...GAME_199];
