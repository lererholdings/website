import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/CaseStudies.module.css';

const CASE_STUDIES = [
  {
    slug: 'sales-crm-tasks',
    tag: 'Internal Tooling',
    title: 'Sales CRM — Tasks',
    summary:
      'A task and account management system we built and run our own sales and account management operations on — tasks, accounts, admin, and a full audit trail.',
    image: '/images/product/tasks.png',
    imageAlt: 'Tasks board grouped by account and partner, showing priority and status for each task',
  },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <Head>
        <title>Case Studies | Lerer Holdings</title>
        <meta
          name="description"
          content="Software Lerer Holdings has designed and built in-house, including the internal tools we run our own operations on."
        />
      </Head>

      <div className="bg-glow"></div>

      <nav className="subnav">
        <span></span>
        <Link className="subnav-logo" href="/" aria-label="Lerer Holdings home">
          <Image src="/images/logo.png" alt="Lerer Holdings" width={30} height={30} quality={100} />
        </Link>
        <span></span>
      </nav>

      <header className={styles.hero}>
        <div className={styles.eyebrow}>Case Studies</div>
        <h1>Software we&rsquo;ve designed and built</h1>
        <p>
          Alongside our Veracode work, we build the internal tools our own team runs on — proof of how we
          approach software, not just advice about it.
        </p>
      </header>

      <div className={styles.list}>
        {CASE_STUDIES.map((cs) => (
          <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className={styles.card}>
            <div className={styles.thumb}>
              <img src={cs.image} alt={cs.imageAlt} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.tag}>{cs.tag}</span>
              <h2>{cs.title}</h2>
              <p>{cs.summary}</p>
              <span className={styles.cardLink}>
                Read the case study
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

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
