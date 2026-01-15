/* eslint-disable react/no-unescaped-entities */
import { HeaderSimple } from '../components/HeaderSimple';
import { FooterSimple } from '../components/FooterSimple';

export const metadata = {
  title: 'Copyright Notice — FunnyFunny Cloud',
  description: 'FunnyFunny Cloud copyright notice',
  openGraph: {
    type: 'website',
    url: 'https://funnyfunny.cloud/copyright',
    title: 'Copyright Notice — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud copyright notice'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copyright Notice — FunnyFunny Cloud',
    description: 'FunnyFunny Cloud copyright notice'
  }
};

export default function CopyrightPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Copyright Notice</h1>

        <div className="bg-white rounded-lg shadow p-8 space-y-6 text-sm leading-relaxed">
          <p className="text-gray-600">Last updated: January 1, 2024</p>

          <section>
            <h2 className="text-xl font-bold mb-4">1. Copyright Ownership</h2>
            <p className="mb-4">
              All content, designs, logos, images, text, and software code on
              funnyfunny.cloud (“the site”) are the intellectual property of
              AshLight and are protected by copyright laws and international
              treaties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Permitted Use</h2>
            <p className="mb-4">You may use site content only if:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>It is for personal, non-commercial use</li>
              <li>The source is clearly attributed when quoted</li>
              <li>You have explicit permission from the site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Prohibited Actions</h2>
            <p className="mb-4">The following actions are strictly prohibited:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Unauthorized reproduction, distribution, or transmission</li>
              <li>Commercial use of site content</li>
              <li>Modifying or altering site content</li>
              <li>Republishing content on other sites without permission</li>
              <li>Reverse engineering or copying source code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Third-Party Content</h2>
            <p className="mb-4">
              Some images, icons, and fonts are provided by third parties and
              remain the property of their respective owners. We use such
              content under appropriate licenses or fair use principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. User-Generated Content</h2>
            <p className="mb-4">
              Users retain copyright to content they create or post. By posting,
              users grant the site a non-exclusive license to use the content
              for site operation and promotion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Copyright Infringement Reports</h2>
            <p className="mb-4">
              If you believe your copyright is infringed, contact us with the
              following information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Description of the infringed work</li>
              <li>Location (URL) of the infringing material</li>
              <li>Copyright owner information</li>
              <li>Contact information</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p>
                <strong>Copyright report contact</strong>
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
            <h2 className="text-xl font-bold mb-4">7. Disclaimer</h2>
            <p>
              The site is not liable for damages arising from use of its
              content. Users are responsible for complying with relevant laws
              and regulations.
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
