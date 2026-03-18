이 폴더는 Next.js 빌드 시 out/blog/ 로 복사되어 https://funnyfunny.cloud/blog/ 에 노출됩니다.

블로그 갱신 방법 (AWP 프로젝트에서):
  BLOG_OUTPUT=/Users/yong/project/web/funny/public/blog node scripts/export-blog.mjs

이후 funny 프로젝트에서 yarn build 후 배포하면 됩니다.
