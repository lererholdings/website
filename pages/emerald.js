import Link from 'next/link';

export default function HomeEmerald() {
  return (
    <>
      <div className="bg-glow"></div>

      {/* Nav */}
      <nav>
        <Link className="logo" href="/">
          <div className="logo-icon">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8l6 6 8-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-name">Lerer Holdings</span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-tag">Technical Services & Investments</div>
        <h1>Expert Support<br/>for Application<br/><span>Security.</span></h1>
        <p>Lerer Holdings specializes in technical and pre-sale support for Veracode, with deep expertise in GitHub integration. We also manage strategic investments in ETFs and US Options to maximize your portfolio returns.</p>

        <div className="form-wrapper">
          <div className="form-row">
            <input type="email" placeholder="Enter your email address" />
            <button type="button">Contact Us</button>
          </div>
          <p className="form-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            24/7 support available. Your data is secure.
          </p>
        </div>
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
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Link className="footer-logo" href="/">
          <div className="footer-logo-dot"></div>
          <span className="footer-logo-name">Lerer Holdings Pty Ltd</span>
        </Link>
        <p className="footer-copy">© 2026 Lerer Holdings. All rights reserved. Contact: info@lererholdings.com.au</p>
      </footer>
    </>
  );
}