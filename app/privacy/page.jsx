/* eslint-disable react/no-unescaped-entities */
import { HeaderSimple } from '../components/HeaderSimple';
import { FooterSimple } from '../components/FooterSimple';

export const metadata = {
  title: 'Privacy Policy — FunnyFunny Cloud',
  description: 'FunnyFunny Cloud privacy policy',
  openGraph: {
    type: 'website',
    url: 'https://funnyfunny.cloud/privacy',
    title: 'Privacy Policy — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud privacy policy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud privacy policy'
  }
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow p-8 space-y-6 text-sm leading-relaxed">
          <p className="text-gray-600">Last updated: January 1, 2024</p>

          <section>
            <h2 className="text-xl font-bold mb-4">1. Purpose of Processing</h2>
            <p className="mb-4">
              FunnyFunny Cloud (“the site”) processes personal information for
              the purposes below. We do not use information for purposes other
              than those listed here, and if the purpose changes, we will take
              appropriate measures such as obtaining consent as required by law.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service delivery: calculators, tests, and utility tools</li>
              <li>Service improvement: enhancing UX and service quality</li>
              <li>Analytics: visitor statistics and usage analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Retention Period</h2>
            <p className="mb-4">
              We retain personal information only for the period required by
              law or agreed to by the data subject at the time of collection.
            </p>
            <p className="mb-4">Retention periods include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service usage logs: up to 3 years from the date of consent</li>
              <li>Analytics data: may be stored indefinitely after anonymization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Items Collected</h2>
            <p className="mb-4">We process the following information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Automatically collected info: IP address, cookies, visit time, usage logs, device info</li>
              <li>Visitor statistics via Google Analytics</li>
            </ul>
            <p className="mt-4">
              Note: Most services do not require sign-up, and we do not store
              personal information that users directly enter into tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Sharing with Third Parties</h2>
            <p className="mb-4">
              We do not share personal information with third parties unless:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Required by law</li>
              <li>For anonymized analytics via Google Analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Outsourcing</h2>
            <p className="mb-4">
              We outsource certain processing tasks to the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Analytics: visitor analytics</li>
              <li>Google AdSense: advertising services (planned)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
            <p className="mb-4">You may exercise the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction or deletion</li>
              <li>Request suspension of processing</li>
            </ul>
            <p className="mt-4">
              Requests may be made in writing, by email, or by fax pursuant to
              applicable law, and we will respond without undue delay.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Destruction of Data</h2>
            <p className="mb-4">
              We destroy personal information without delay once retention
              periods end or the purpose of processing is fulfilled.
            </p>
            <p className="mb-4">Procedures and methods include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Selection and approval by the privacy officer</li>
              <li>Irreversible deletion of electronic records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Cookies</h2>
            <p className="mb-4">
              We use cookies to provide personalized services. Cookies are
              small text files stored in your browser when you visit a site.
            </p>
            <p className="mb-4">Cookie purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Visitor analytics</li>
              <li>Usage pattern analysis</li>
              <li>Ad optimization</li>
            </ul>
            <p className="mt-4">
              You can choose whether to allow cookies in your browser settings.
              Refusing cookies may affect service usability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. Privacy Officer</h2>
            <p className="mb-4">
              We designate a privacy officer to handle privacy-related
              inquiries, complaints, and remedies as follows:
            </p>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p>
                <strong>Privacy Officer</strong>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:ashlight2510@gmail.com" className="text-blue-600 hover:underline">
                  ashlight2510@gmail.com
                </a>
              </p>
              <p>
                You may contact the privacy officer about any privacy-related
                questions or issues that arise while using the site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. Policy Updates</h2>
            <p>
              This policy is effective as of January 1, 2024. We will announce
              material changes at least seven days before they take effect.
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
