// 언어 관련 유틸리티 함수
import { pageCopy } from "./translations";

export const defaultLang = "en";

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

/**
 * 초기 언어를 감지합니다.
 * 1. localStorage에서 저장된 언어 확인
 * 2. 브라우저 언어 확인
 * 3. 기본값 반환
 * @returns {string} 언어 코드 ('ko' | 'en')
 */
export function getInitialLang() {
  if (typeof window === "undefined") return defaultLang;
  const stored = window.localStorage?.getItem("preferredLang");
  if (stored && pageCopy[stored]) {
    return stored;
  }
  const hasNavigator = typeof navigator !== "undefined";
  if (hasNavigator) {
    const browserLang =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    if (browserLang && browserLang.toLowerCase().startsWith("ko")) {
      return "ko";
    }
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
