// 언어 관련 유틸리티 함수
import { pageCopy } from "./translations";

/** Hub default: Korean. English for non-Korean browsers / foreign timezones. */
export const defaultLang = "ko";

/**
 * 템플릿 문자열에서 변수를 치환합니다.
 * @param {string} template - {변수명} 형식의 템플릿 문자열
 * @param {object} vars - 치환할 변수 객체
 * @returns {string} 치환된 문자열
 */
export function formatTemplate(template, vars = {}) {
  if (typeof template !== "string") return template;
  return template.replace(/\{(.*?)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : ""
  );
}

function browserLangTags() {
  if (typeof navigator === "undefined") return [];
  if (navigator.languages?.length) return [...navigator.languages];
  if (navigator.language) return [navigator.language];
  return [];
}

function isKoreanTimezone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Asia/Seoul" || tz === "Asia/Pyongyang";
  } catch {
    return false;
  }
}

/**
 * 초기 언어를 감지합니다.
 * 1. localStorage 수동 선택
 * 2. 브라우저 언어에 한국어 있으면 ko
 * 3. 그 외 브라우저 언어면 en (외국 방문)
 * 4. 언어 없고 한국 타임존이면 ko, 아니면 en
 * 5. 기본 ko
 * @returns {string} 언어 코드 ('ko' | 'en')
 */
export function getInitialLang() {
  if (typeof window === "undefined") return defaultLang;

  const stored = window.localStorage?.getItem("preferredLang");
  if (stored && pageCopy[stored]) return stored;

  const tags = browserLangTags().map((l) => String(l).toLowerCase());
  if (tags.some((l) => l.startsWith("ko"))) return "ko";
  if (tags.length > 0) return "en";

  if (isKoreanTimezone()) return "ko";
  try {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone) return "en";
  } catch {
    /* ignore */
  }
  return defaultLang;
}

/**
 * 번역 함수를 생성합니다.
 * @param {string} lang - 언어 코드
 * @returns {function} 번역 함수 t(key, vars)
 */
export function createTranslator(lang) {
  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];

  return (key, vars = {}) =>
    formatTemplate(translationPack[key] ?? fallbackPack[key] ?? key, vars);
}
