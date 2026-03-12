#!/usr/bin/env sh
# Git credential helper: GitHub 푸시용 토큰 사용 (에이전트/CI에서 푸시 가능)
# 토큰 소스 (우선순위): GITHUB_TOKEN 환경변수 > GITHUB_TOKEN_FILE 경로 파일 > ~/.config/funny-github-token
# 사용: git config credential.helper "!$(pwd)/scripts/git-credential-github-token.sh"

read line
while [ -n "$line" ]; do read line; done

token=""
if [ -n "$GITHUB_TOKEN" ]; then
  token="$GITHUB_TOKEN"
elif [ -n "$GITHUB_TOKEN_FILE" ] && [ -f "$GITHUB_TOKEN_FILE" ]; then
  token=$(cat "$GITHUB_TOKEN_FILE")
elif [ -f "$HOME/.config/funny-github-token" ]; then
  token=$(cat "$HOME/.config/funny-github-token")
fi

if [ -n "$token" ]; then
  echo "username=ashlight2510"
  echo "password=$token"
fi
