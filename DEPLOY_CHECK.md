# /tools/xxx 404 점검 체크리스트

## 1. 빌드 결과물 확인 (로컬)

```bash
cd funny
yarn build
ls out/tools/          # 90개 이상 폴더 있어야 함
ls out/tools/vocal/    # index.html 있어야 함
```

- `out/tools/vocal/index.html` 등이 있으면 **빌드는 정상**입니다.

## 2. 배포 시 “어떤 폴더”를 올리는지

- **반드시 배포하는 것은 `out/` 전체** (또는 `out/` 안 내용을 루트로 배포).
- `out/tools/` 가 빠지면 `/tools/vocal/` 등은 전부 404입니다.
- Vercel/Netlify: 보통 `yarn build` 후 `out`(Next export)을 Output Directory로 지정.
- GitHub Pages: `out` 내용을 배포 브랜치/폴더에 올려야 하고, 루트에 `.nojekyll` 있으면 좋음 (이제 `public/.nojekyll` 포함됨).

## 3. URL은 반드시 **끝에 슬래시**

- ✅ `https://funnyfunny.cloud/tools/vocal/`
- ❌ `https://funnyfunny.cloud/tools/vocal` (일부 호스트에서 404 가능)
- 링크/사이트맵은 모두 trailing slash로 맞춰 두었음.

## 4. 도메인/서브도메인

- `funnyfunny.cloud` 가 **이 repo 빌드 결과**를 서빙하는지 확인.
- 다른 레포/서브도메인을 가리키면 당연히 404.

## 5. CI에서 funny만 클론해서 배포할 때

- **funny** 레포만 클론하면 부모에 `pdfimg`, `alcohol` 등 서비스 폴더가 없음.
- `copy-tools.mjs`는 "부모에서 복사 가능한 게 5개 미만"이면 **public/tools를 비우지 않고** 커밋된 내용을 그대로 씀.
- 따라서 **CI로 배포하려면 `public/tools/`를 반드시 커밋**해 두어야 함. (이미 527개 파일 커밋된 상태면 OK.)

## 6. 여전히 404일 때

1. 배포 플랫폼에서 “빌드 산출물 디렉터리”가 `out` (또는 그 내용)인지 확인.
2. 배포 로그에서 `out/tools/` 가 업로드되는지 확인.
3. 배포 로그에 `copy-tools: only N sources found... Using committed public/tools` 가 뜨는지 확인 (N이 0~4면 정상).
4. 브라우저에서 직접 `https://funnyfunny.cloud/tools/vocal/` (끝에 `/`) 호출.
5. 플랫폼이 “디렉터리 인덱스”(`/tools/vocal/` → `index.html`)를 지원하는지 확인.
