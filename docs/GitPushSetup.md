# Git 푸시 설정 (에이전트/터미널 자동 푸시)

이 저장소는 **HTTPS + GitHub 토큰**으로 푸시할 수 있도록 credential helper가 설정되어 있습니다.  
한 번만 토큰을 넣어 두면, Cursor 에이전트나 터미널에서 `git push` 시 로그인 창 없이 푸시됩니다.

## 1. GitHub Personal Access Token 만들기

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. **Generate new token (classic)** 선택
3. Note: 예) `funny push`
4. Expiration: 원하는 기간 (예: 90 days, No expiration)
5. Scope: **repo** 체크
6. 생성 후 **토큰 값을 복사** (한 번만 보이므로 저장해 두기)

## 2. 토큰 넣기 (아래 중 하나만 하면 됨)

### 방법 A: 파일로 넣기 (추천)

```bash
mkdir -p ~/.config
echo "여기에_복사한_토큰_붙여넣기" > ~/.config/funny-github-token
chmod 600 ~/.config/funny-github-token
```

### 방법 B: 환경 변수로 넣기

Cursor에서 사용하려면:

- **Cursor** → **Settings** → **Cursor Settings** → **Features** → **Environment** (또는 프로젝트 설정)
- `GITHUB_TOKEN` = `ghp_xxxx...` 추가

또는 셸에서 매번 쓰려면 `~/.zshrc`에:

```bash
export GITHUB_TOKEN="ghp_xxxx..."
```

### 방법 C: 다른 경로 파일로 넣기

```bash
echo "토큰" > /원하는/경로/token
export GITHUB_TOKEN_FILE=/원하는/경로/token
# 이후 git push 시 이 경로를 쓰려면 터미널에서 GITHUB_TOKEN_FILE을 내보내거나,
# credential helper는 현재 터미널/에이전트 환경의 GITHUB_TOKEN_FILE을 읽습니다.
```

## 3. 확인

```bash
cd /Users/yong/project/web/funny
git push
```

한 번 성공하면 이후에는 토큰 입력 없이 푸시됩니다.

---

- Credential helper 스크립트: `scripts/git-credential-github-token.sh`
- 토큰은 **저장소에 커밋하지 마세요.** (항상 로컬·환경변수·`~/.config`만 사용)
