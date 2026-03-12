// Supabase: run과 동일 프로젝트 사용. 테이블 leaderboard_neox 사용.
// leaderboard_neox 생성: run의 leaderboard_scores와 동일 스키마 (period_type, period_start, name, score, created_at, user_agent).
// UNIQUE(period_type, period_start, name)
// SQL: create table leaderboard_neox ( period_type text not null, period_start text not null, name text not null, score int not null, created_at timestamptz default now(), user_agent text, primary key (period_type, period_start, name) );
window.SUPABASE_URL = "https://mawljjaittsnoyotxqhm.supabase.co";
window.SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hd2xqamFpdHRzbm95b3R4cWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMjIwNTgsImV4cCI6MjA4MTU5ODA1OH0.jzF9IqDtx6hcHwaWfjaT6GvG2jE7lotSaQMUdnRhaAM";
