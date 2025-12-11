import { HeaderSimple } from '../components/HeaderSimple';
import { FooterSimple } from '../components/FooterSimple';

export const metadata = {
  title: '운영정책 — FunnyFunny Cloud',
  description: 'FunnyFunny Cloud 운영정책 및 커뮤니티 가이드라인',
  openGraph: {
    type: 'website',
    url: 'https://funnyfunny.cloud/policy',
    title: '운영정책 — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud 운영정책 및 커뮤니티 가이드라인'
  },
  twitter: {
    card: 'summary_large_image',
    title: '운영정책 — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud 운영정책 및 커뮤니티 가이드라인'
  }
};

export default function PolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">운영정책</h1>

        <div className="bg-white rounded-lg shadow p-8 space-y-6 text-sm leading-relaxed">
          <p className="text-gray-600">최종 수정일: 2024년 1월 1일</p>

          <section>
            <h2 className="text-xl font-bold mb-4">1. 운영 목적</h2>
            <p className="mb-4">
              funnyfunny.cloud는 사용자에게 유익하고 재미있는 테스트, 계산기, 정보 도구를 제공하여 일상의 숫자와 데이터를
              쉽고 재미있게 이해할 수 있도록 돕는 것을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. 서비스 제공 원칙</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>모든 서비스는 사용자에게 유익한 정보를 제공하기 위해 개발되었습니다.</li>
              <li>광고를 포함한 모든 요소는 Google 정책 및 관련 법률을 준수합니다.</li>
              <li>사용자의 개인정보를 보호하고 안전하게 관리합니다.</li>
              <li>지속적인 서비스 개선과 새로운 기능 추가를 위해 노력합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. 커뮤니티 가이드라인</h2>
            <p className="mb-4">게시판 및 커뮤니티 공간을 이용할 때 다음 사항을 준수해 주세요:</p>

            <h3 className="font-semibold mb-2 mt-4">✅ 권장 사항</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>서로를 존중하고 예의를 지킵니다.</li>
              <li>건설적이고 유익한 정보를 공유합니다.</li>
              <li>다른 사용자의 의견을 존중합니다.</li>
              <li>정확하고 신뢰할 수 있는 정보를 제공합니다.</li>
            </ul>

            <h3 className="font-semibold mb-2 mt-4">❌ 금지 사항</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>욕설, 비방, 차별적 표현 등 부적절한 언어 사용</li>
              <li>스팸, 광고, 홍보성 게시물</li>
              <li>타인의 개인정보 무단 공개</li>
              <li>저작권 침해 콘텐츠 게시</li>
              <li>불법적이거나 유해한 콘텐츠 게시</li>
              <li>다른 사용자에 대한 괴롭힘 또는 협박</li>
              <li>정치적, 종교적 논쟁 유발</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. 콘텐츠 관리</h2>
            <p className="mb-4">
              본 사이트는 사용자가 게시한 콘텐츠에 대해 사전 검토를 실시하지 않습니다. 다만, 운영정책을 위반하거나
              법률에 저촉되는 콘텐츠가 발견될 경우, 사전 고지 없이 삭제하거나 접근을 제한할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. 계정 및 서비스 이용 제한</h2>
            <p className="mb-4">다음의 경우 서비스 이용이 제한될 수 있습니다:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>운영정책을 반복적으로 위반하는 경우</li>
              <li>법률을 위반하는 행위를 하는 경우</li>
              <li>다른 사용자에게 피해를 주는 행위를 하는 경우</li>
              <li>시스템에 악영향을 미치는 행위를 하는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. 광고 정책</h2>
            <p className="mb-4">
              본 사이트는 Google AdSense를 통해 광고를 제공합니다. 모든 광고는 Google의 광고 정책을 준수하며, 사용자
              경험을 해치지 않는 범위 내에서 제공됩니다.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>광고 클릭을 유도하는 행위는 금지됩니다.</li>
              <li>광고 콘텐츠에 대한 책임은 광고주에게 있습니다.</li>
              <li>부적절한 광고가 발견될 경우 신고해 주시기 바랍니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. 신고 및 문의</h2>
            <p className="mb-4">운영정책 위반 사항이나 부적절한 콘텐츠를 발견하신 경우, 아래 연락처로 신고해 주시기 바랍니다.</p>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p>
                <strong>운영정책 관련 문의</strong>
              </p>
              <p>
                이메일:{' '}
                <a href="mailto:ashlight2510@gmail.com" className="text-blue-600 hover:underline">
                  ashlight2510@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. 정책 변경</h2>
            <p>
              본 운영정책은 필요한 경우 사전 공지 후 변경될 수 있습니다. 변경된 정책은 본 페이지에 게시되며, 변경 사항은
              공지된 시점부터 효력을 발생합니다.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-blue-600 hover:underline">
            ← 홈으로 돌아가기
          </a>
        </div>
      </main>
      <FooterSimple />
    </div>
  );
}
