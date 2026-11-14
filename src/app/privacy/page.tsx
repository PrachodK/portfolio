import type { Metadata } from "next";
import Link from "next/link";

// Set the privacy notice page title and description.
export const metadata: Metadata = {
  title: "privacy | prachod kakatur",
  description: "How this website uses Vercel hosting and self-hosted Umami analytics.",
};

// Explain portfolio hosting, analytics data, and privacy choices.
export default function PrivacyPage() {
  return (
    <div className="page">
      <article className="container privacy-policy">
        <h1 className="page-title">privacy</h1>
        <p className="privacy-updated">Last updated November 14, 2026.</p>
        <p>
          We respect your privacy. This website is hosted on Vercel.
          We use self-hosted Umami to collect aggregate usage statistics and improve the website.
          We do not track you across websites or collect names or email addresses through analytics.
        </p>

        <h2>Data we collect</h2>
        <p>
          This website does not use tracking cookies. We do not send names, email addresses,
          contact details, or message contents to Umami. Query strings and URL fragments are
          excluded from analytics page addresses and referrers.
        </p>

        <h2>Vercel</h2>
        <p>
          Our hosting provider is <a href="https://vercel.com/">Vercel Inc.</a>,
          440 N Barranca Avenue #4133, Covina, CA 91723, United States.
        </p>
        <p>As a hosting provider, Vercel may process technical information for security and website delivery:</p>
        <ul>
          <li>IP addresses and referring websites</li>
          <li>Request dates, times, page addresses, and data volume</li>
          <li>Browser, device, and operating system information</li>
        </ul>
        <p>
          Read <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a> for
          information about how Vercel handles this data.
        </p>

        <h2>Umami Software</h2>
        <p>
          We use Umami, a web analytics service hosted by us, to understand overall traffic trends.
          For example, we can see which pages receive the most visits.
        </p>
        <p>Umami collects the following usage data:</p>
        <ul>
          <li>Page views, page addresses, and referring URLs</li>
          <li>Device type, browser, operating system, language, and screen size</li>
          <li>IP addresses, processed to derive approximate location and visitor statistics</li>
          <li>Time of visit and visit duration</li>
        </ul>
        <p>
          Umami does not use tracking cookies or store raw IP addresses in analytics records.
          It uses a rotating hashed identifier to group visits. We do not supply personal user
          IDs or use session recordings. The tracker respects your browser’s Do Not Track setting.
        </p>
        <p>
          Read about <a href="https://docs.umami.is/docs/faq">Umami’s privacy practices</a> for more information.
        </p>

        <h2>Fonts and external links</h2>
        <p>
          This website loads fonts from Google Fonts. Your browser sends technical information,
          including your IP address, when it requests those fonts.
          Read <a href="https://developers.google.com/fonts/faq/privacy">Google Fonts’ privacy information</a> for details.
          If you follow an external link, the destination’s privacy policy applies.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about this notice or the data we process, use the contact details
          on the <Link href="/contact">contact page</Link>.
        </p>
      </article>
    </div>
  );
}
