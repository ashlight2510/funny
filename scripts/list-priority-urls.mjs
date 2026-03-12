#!/usr/bin/env node
/**
 * 수익·유입 우선 페이지 URL 목록 출력 (GSC URL 검사·Amplitude 확인용).
 * 사용: node scripts/list-priority-urls.mjs
 * 출력: 한 줄에 하나씩 전체 URL. 파이프로 복사하거나 GSC에 붙여넣기.
 */

const BASE = "https://funnyfunny.cloud";

const PRIORITY_PATHS = [
  "/",
  "/calculators/",
  "/tests/",
  "/guide/",
  "/guide/take-home-pay-how/",
  "/guide/four-insurance-deduction-how/",
  "/guide/nbang-calculator-how/",
  "/guide/year-end-tax-simple/",
  "/guide/tax-calculator-how/",
  "/guide/paystub-read-how/",
  "/guide/rest-check-how/",
  "/guide/bmi-calculator-how/",
  "/guide/asset-shield-index/",
  "/guide/nospend-wealth/",
  "/guide/cafe-cost/",
  "/guide/commute-cost-time/",
  "/tools/tax/",
  "/tools/n/",
  "/tools/rest/",
  "/tools/bmi/",
  "/tools/money/",
  "/tools/cafe/",
  "/tools/space/",
  "/tools/commute/",
  "/tools/imtranslate/",
  "/guide/image-translate-how/",
  "/tools/charcount/",
  "/tools/qrcode/",
  "/tools/datecalc/",
  "/guide/charcount-how/",
  "/guide/qrcode-how/",
  "/guide/datecalc-how/",
  "/tools/loancalc/",
  "/tools/electric/",
  "/tools/platformfee/",
  "/guide/loancalc-how/",
  "/guide/electric-how/",
  "/guide/platformfee-how/",
  "/tools/severance/",
  "/tools/vat/",
  "/tools/gas/",
  "/guide/severance-how/",
  "/guide/vat-how/",
  "/guide/gas-how/",
];

function main() {
  const urls = PRIORITY_PATHS.map((p) => BASE + p);
  urls.forEach((u) => console.log(u));
}

main();
