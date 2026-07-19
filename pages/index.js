import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-glow"></div>

      {/* Nav */}
      <nav>
        <div></div>
        <Link className="logo" href="/">
          <div className="logo-icon">
            <Image src="/images/logo.png" alt="Lerer Holdings Logo" width={256} height={256} priority quality={100} />
          </div>
          <span className="logo-name">Lerer Holdings</span>
        </Link>
        <div className="nav-links">
          <Link href="/case-studies">Case Studies</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-tag">Technical Services & Investments</div>
        <h1>Expert services for <br/><span>Application Security</span><br/>and integration</h1>
        <p>Lerer Holdings specializes in technical and pre-sale support for Veracode, with deep expertise in CI/CD integration. We also manage strategic investments in ETFs and US stocks and index Options to maximize out investment portfolio returns.</p>
      </section>

      <div className="divider">
        <div className="divider-line"></div>
      </div>

      {/* Features */}
      <section className="features">
        <div className="features-header">
          <div className="section-tag">What We Offer</div>
          <h2>Comprehensive Security<br/>& Investment Solutions</h2>
        </div>

        <div className="features-grid">

          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Veracode Expertise</h3>
            <p>Expert technical and pre-sale support for Veracode application security platform. Seamless GitHub integration and comprehensive vulnerability management strategies.</p>
            <span className="feature-badge">Enterprise Grade</span>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 12l-4-4v3H2v2h16v3l4-4zM2 12l4 4v-3h16v-2H6V8l-4 4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>GitHub Integration</h3>
            <p>Deep GitHub knowledge for seamless CI/CD pipeline integration. Secure code scanning, automated testing, and deployment workflows for modern development teams.</p>
            <span className="feature-badge">DevOps Ready</span>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l9.09 1.45L21.45 13 12 22l-9.45-9 .36-9.55L12 2zM12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Investment Management</h3>
            <p>Strategic portfolio management through ETF diversification and US Options trading. Maximize returns with data-driven investment strategies and risk management.</p>
            <span className="feature-badge">Wealth Building</span>
          </div>

          {/* Feature 4 */}
          <Link href="/case-studies/sales-crm-tasks" className="feature-card feature-card--link">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Software Development</h3>
            <p>We build the internal tools we use ourselves — from a Postgres-backed CRM to CI/CD-integrated ops software. See it in the case study below.</p>
            <span className="feature-link-out">
              View case study
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </Link>
        </div>
      </section>

        <footer>
        <Link className="footer-logo" href="/">
          <Image src="/images/logo.png" alt="Lerer Holdings Logo" width={22} height={22} quality={100} />
          <span className="footer-logo-name">Lerer Holdings Pty Ltd</span>
        </Link>
        <p className="footer-copy">© 2026 Lerer Holdings. All rights reserved. Contact: info@lererholdings.com.au</p>
      </footer>
    </>
  );
}
