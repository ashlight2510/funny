/* eslint-disable react/no-unescaped-entities */
import { HeaderSimple } from '../components/HeaderSimple';
import { FooterSimple } from '../components/FooterSimple';

export const metadata = {
  title: 'Terms of Service — FunnyFunny Cloud',
  description: 'FunnyFunny Cloud terms of service',
  openGraph: {
    type: 'website',
    url: 'https://funnyfunny.cloud/terms',
    title: 'Terms of Service — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud terms of service'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud terms of service'
  }
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <div className="bg-white rounded-lg shadow p-8 space-y-6 text-sm leading-relaxed">
          <p className="text-gray-600">Last updated: January 1, 2024</p>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 1 (Purpose)</h2>
            <p>
              These Terms govern the conditions, procedures, rights, duties,
              and responsibilities between FunnyFunny Cloud (“the site”) and
              users for all services provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 2 (Definitions)</h2>
            <p className="mb-4">Key terms are defined as follows:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>“Services” include all calculators, tests, utilities, and related offerings on the site.</li>
              <li>“User” means anyone who accesses the site and uses the services, whether registered or not.</li>
              <li>“Content” refers to all information, text, graphics, and links provided on the site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 3 (Posting and Amendments)</h2>
            <p className="mb-4">
              These Terms are posted on the initial service screen for easy access.
            </p>
            <p>
              We may revise these Terms within the limits of applicable law.
              Updated Terms will be announced on the service screen or by other
              appropriate means.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 4 (Provision and Changes)</h2>
            <p className="mb-4">The site provides services such as:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Various calculators and tests</li>
              <li>Utilities and tools</li>
              <li>Information services</li>
              <li>Other services developed or provided through partnerships</li>
            </ul>
            <p className="mt-4">
              We may change service content and will provide notice in advance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 5 (Service Suspension)</h2>
            <p className="mb-4">We may suspend service in cases such as:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintenance or construction of service facilities</li>
              <li>Telecommunications service interruptions by carriers</li>
              <li>National emergencies, system failures, or usage spikes</li>
              <li>Other significant reasons making continued service impractical</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 6 (User Obligations)</h2>
            <p className="mb-4">Users must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Register false information or make false changes</li>
              <li>Impersonate others or misuse their information</li>
              <li>Alter posted information without authorization</li>
              <li>Transmit or post unauthorized materials (e.g., programs)</li>
              <li>Infringe on intellectual property rights</li>
              <li>Damage the reputation of the site or third parties</li>
              <li>Post obscene, violent, or otherwise inappropriate content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 7 (Copyright and Use)</h2>
            <p className="mb-4">
              Copyright and other intellectual property rights for site-created
              works belong to the site.
            </p>
            <p className="mb-4">
              Users may not reproduce, transmit, publish, distribute, or
              otherwise use site-owned content for commercial purposes without
              prior permission, nor enable third parties to do so.
            </p>
            <p>
              If we use content owned by users under an agreement, we will
              notify the user accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 8 (Disclaimer)</h2>
            <p className="mb-4">
              We are not liable for failure to provide services due to force
              majeure or similar circumstances.
            </p>
            <p className="mb-4">
              We are not responsible for service disruptions caused by users.
            </p>
            <p className="mb-4">
              We are not liable for losses arising from user expectations or
              use of information provided through the service.
            </p>
            <p>
              Calculations and information are for reference only. Users are
              responsible for their decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 9 (Dispute Resolution)</h2>
            <p className="mb-4">
              Lawsuits related to disputes between the site and users will be
              filed in the court of the user’s address at the time of filing,
              or the competent district court if no address is available. If
              the address is unclear or the user resides abroad, jurisdiction
              follows the Civil Procedure Act.
            </p>
            <p>Korean law governs disputes between the site and users.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Article 10 (Miscellaneous)</h2>
            <p>Matters not covered herein follow applicable laws or customary practices.</p>
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
