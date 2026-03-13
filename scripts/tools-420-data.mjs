/**
 * 테스트 300개 + 게임 120개 = 420개 도구 메타·데이터.
 * slug: test-001~test-300 (테스트), game-001~game-120 (게임)
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

function pad3(n) {
  return String(n).padStart(3, "0");
}

function buildTests300() {
  const out = [];
  for (let i = 1; i <= 300; i++) {
    const slug = `test-${pad3(i)}`;
    const icon = TEST_ICONS[i % TEST_ICONS.length];
    const titleIdx = (i - 1) % TEST_TITLES.length;
    const titleKo = `${TEST_TITLES[titleIdx]} ${Math.floor((i - 1) / TEST_TITLES.length) + 1}`.trim();
    const data = TEST_DATA_POOL.slice(0, 5 + (i % 6)).map((s, j) => `${s} ${j + 1}`);
    out.push({ slug, icon, titleKo, descKo: TEST_DESC, data });
  }
  return out;
}

function buildGames120() {
  const out = [];
  for (let i = 1; i <= 120; i++) {
    const slug = `game-${pad3(i)}`;
    const icon = GAME_ICONS[i % GAME_ICONS.length];
    const titleIdx = (i - 1) % GAME_TITLES.length;
    const titleKo = `${GAME_TITLES[titleIdx]} ${Math.floor((i - 1) / GAME_TITLES.length) + 1}`.trim();
    const data = GAME_DATA_POOL.slice(0, 5 + (i % 6)).map((s, j) => `${s} ${i}-${j + 1}`);
    out.push({ slug, icon, titleKo, descKo: GAME_DESC, data });
  }
  return out;
}

export const TESTS_300 = buildTests300();
export const GAMES_120 = buildGames120();
export const TOOLS_420 = [...TESTS_300, ...GAMES_120];
