import { HeaderSimple } from '../components/HeaderSimple';
import { FooterSimple } from '../components/FooterSimple';

export const metadata = {
  title: 'Operations Policy — FunnyFunny Cloud',
  description: 'Operations policy and community guidelines for FunnyFunny Cloud',
  openGraph: {
    type: 'website',
    url: 'https://funnyfunny.cloud/policy',
    title: 'Operations Policy — FunnyFunny Cloud',
    description: 'Operations policy and community guidelines for FunnyFunny Cloud'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Policy — FunnyFunny Cloud',
    description: 'Operations policy and community guidelines for FunnyFunny Cloud'
  }
};

export default function PolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Operations Policy</h1>

        <div className="bg-white rounded-lg shadow p-8 space-y-6 text-sm leading-relaxed">
          <p className="text-gray-600">Last updated: January 1, 2024</p>

          <section>
            <h2 className="text-xl font-bold mb-4">1. Purpose</h2>
            <p className="mb-4">
              funnyfunny.cloud exists to help people understand everyday numbers
              and data through useful and enjoyable tests, calculators, and
              information tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Service Principles</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All services aim to provide useful information.</li>
              <li>Ads and all elements comply with Google policies and applicable laws.</li>
              <li>User privacy is protected and handled safely.</li>
              <li>We continuously improve services and add new features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Community Guidelines</h2>
            <p className="mb-4">Please follow these rules in community spaces:</p>

            <h3 className="font-semibold mb-2 mt-4">✅ Recommended</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be respectful and courteous.</li>
              <li>Share constructive, useful information.</li>
              <li>Respect others’ opinions.</li>
              <li>Provide accurate and trustworthy information.</li>
            </ul>

            <h3 className="font-semibold mb-2 mt-4">❌ Prohibited</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Abusive, defamatory, or discriminatory language</li>
              <li>Spam, ads, or promotional posts</li>
              <li>Sharing others’ personal information without consent</li>
              <li>Copyright-infringing content</li>
              <li>Illegal or harmful content</li>
              <li>Harassment or threats</li>
              <li>Provoking political or religious disputes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Content Moderation</h2>
            <p className="mb-4">
              We do not pre-screen user content. However, content that violates
              this policy or the law may be removed or restricted without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Service Restrictions</h2>
            <p className="mb-4">Access may be restricted if:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You repeatedly violate this policy</li>
              <li>You break applicable laws</li>
              <li>You cause harm to other users</li>
              <li>Your actions adversely affect the system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Advertising Policy</h2>
            <p className="mb-4">
              This site serves ads via Google AdSense. All ads comply with
              Google’s policies and are provided in a way that minimizes user
              disruption.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Click manipulation is prohibited.</li>
              <li>Advertisers are responsible for ad content.</li>
              <li>Please report inappropriate ads if found.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Reports & Contact</h2>
            <p className="mb-4">
              If you find policy violations or inappropriate content, please
              contact us below.
            </p>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p>
                <strong>Policy inquiries</strong>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:ashlight2510@gmail.com" className="text-blue-600 hover:underline">
                  ashlight2510@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Policy Changes</h2>
            <p>
              We may update this policy when necessary. Updates will be posted
              on this page and take effect on the announced date.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to home
          </a>
        </div>
      </main>
      <FooterSimple />
    </div>
  );
}
