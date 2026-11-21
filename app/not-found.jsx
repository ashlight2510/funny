"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const path = window.location.pathname;
    // /tools/xxx (끝에 슬래시 없음) -> /tools/xxx/ 로 리다이렉트 (디렉터리 인덱스)
    const m = path.match(/^\/tools\/([^/]+)$/);
    if (m) {
      window.location.replace(path + "/");
      return;
    }
  }, []);

  return (
    <div className="ink-bg min-h-screen flex flex-col">
      <div className="awning" aria-hidden="true" />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="font-latin text-xs font-bold tracking-[0.24em] text-[var(--sun)]">FUNNYFUNNY CLOUD · NO TICKET</p>
        <h1 className="font-display mt-4 text-[clamp(4rem,18vw,8rem)] leading-none text-[var(--paper)]">
          4<span className="text-[var(--sun)]" style={{ textShadow: "5px 5px 0 var(--coral)" }}>0</span>4
        </h1>
        <p className="font-play mt-4 text-2xl text-[var(--paper)]">이 티켓은 없는 자리예요.</p>
        <p className="mt-2 text-[15px] text-[var(--muted-on-ink)]">This page could not be found.</p>
        <div className="ticket-panel mt-8 w-full max-w-sm text-left">
          <div className="awning-sm" aria-hidden="true" />
          <div className="p-5">
            <p className="font-latin text-[11px] font-bold tracking-[0.18em] text-[var(--muted-on-paper)]">PICK TICKET · GO ELSEWHERE</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="/" className="btn-coral w-full">🎟️ FunnyFunny Cloud 홈으로</a>
              <a href="/games/" className="btn-paper w-full">🎰 뽑기통 가기</a>
              <a href="/calculators/" className="btn-paper w-full">🧮 계산기 모음</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
