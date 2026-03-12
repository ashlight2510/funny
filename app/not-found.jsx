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
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <h1 style={{ display: "inline-block", margin: 0, paddingRight: 20, fontSize: 24, fontWeight: 500 }}>
        404
      </h1>
      <p style={{ margin: "0.5rem 0" }}>This page could not be found.</p>
      <a href="/" style={{ color: "#22c55e", marginTop: 8 }}>
        Go to FunnyFunny Cloud
      </a>
    </div>
  );
}
