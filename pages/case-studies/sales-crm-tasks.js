import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/CaseStudy.module.css';

export default function SalesCrmTasksCaseStudy() {
  return (
    <>
      <Head>
        <title>Sales CRM — Tasks | Lerer Holdings Case Study</title>
        <meta
          name="description"
          content="An internal task and account management system Lerer Holdings built and runs its own sales and account management operations on."
        />
      </Head>

      <div className="bg-glow"></div>

      <nav className="subnav">
        <Link className="subnav-side" href="/case-studies">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Case Studies
        </Link>
        <Link className="subnav-logo" href="/" aria-label="Lerer Holdings home">
          <Image src="/images/logo.png" alt="Lerer Holdings" width={30} height={30} quality={100} />
        </Link>
        <span className="subnav-side subnav-side--right">sales-crm-tasks <em>· internal build</em></span>
      </nav>

      <header className={styles.hero}>
        <div className={styles.eyebrow}>Built In-House · Case Study</div>
        <h1>The system we run our own <span>sales and account management</span> operations on</h1>
        <p className={styles.lede}>
          We track every demo, POC, RFP, and renewal against the account it belongs to — with the audit
          trail, filtering, and access control we&rsquo;d expect from any tool we recommend to a client.
        </p>

        <div className={styles.accessRow}>
          <a className={styles.accessBtn} href="/sales-tasks">
            Access here
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <span className={styles.accessNote}>Invite-only — sign-in via Clerk, restricted to our team</span>
        </div>

        <div className={styles.cascadeStage}>
          <div className={`${styles.shot} ${styles.shotAdmin}`}>
            <div className={styles.chrome}><i></i><i></i><i></i><span className={styles.url}>/admin</span></div>
            <img
              src="/images/product/admin-task-types.png"
              alt="Admin panel: task types grouped by pre-sale, post-sale, and account category, each with an active/inactive toggle"
            />
          </div>
          <div className={`${styles.shot} ${styles.shotAccounts}`}>
            <div className={styles.chrome}><i></i><i></i><i></i><span className={styles.url}>/accounts</span></div>
            <img
              src="/images/product/accounts.png"
              alt="Accounts list showing ACV, country, Salesforce link, and last-updated attribution per account"
            />
          </div>
          <div className={`${styles.shot} ${styles.shotTasks}`}>
            <div className={styles.chrome}><i></i><i></i><i></i><span className={styles.url}>/tasks</span></div>
            <img
              src="/images/product/tasks.png"
              alt="Tasks board grouped by account and partner, showing priority, notes, and status for each task"
            />
          </div>
        </div>
      </header>

      <section className={styles.block}>
        <div className={styles.blockHead}>
          <div className={styles.eyebrow}>What it does</div>
          <h2>Three views. One source of truth for the deal.</h2>
          <p>
            No spreadsheet tabs, no &ldquo;who owns this account&rdquo; Slack threads. Every task, account,
            and permission lives in one system, scoped to the people who actually touch sales and account
            work.
          </p>
        </div>

        <div className={styles.capList}>
          <div className={styles.capRow}>
            <div className={styles.capLabel}>
              <div className={styles.capIcon}>
                <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
              </div>
              <h3>Tasks</h3>
            </div>
            <div className={styles.capBody}>
              <p>
                Grouped by account and partner, so a rep opens <code className={styles.field}>Acme Corp — I8</code> and
                sees exactly what&rsquo;s outstanding — not a flat list they have to mentally re-sort.
              </p>
              <p>Each task carries a priority, a running note timeline, and one of four states:</p>
              <div className={styles.chips}>
                <span className={`${styles.chip} ${styles.chipBacklog}`}>Backlog</span>
                <span className={`${styles.chip} ${styles.chipProgress}`}>In progress</span>
                <span className={`${styles.chip} ${styles.chipWaiting}`}>Waiting</span>
                <span className={`${styles.chip} ${styles.chipDone}`}>Done</span>
              </div>
            </div>
          </div>

          <div className={styles.capRow}>
            <div className={styles.capLabel}>
              <div className={styles.capIcon}>
                <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01" /></svg>
              </div>
              <h3>Accounts</h3>
            </div>
            <div className={styles.capBody}>
              <p>
                Every account carries its ACV, country, and a direct link out to the matching Salesforce
                record — so nobody&rsquo;s cross-referencing two systems to confirm they&rsquo;re looking at
                the same deal.
              </p>
              <p>Last-updated attribution is always visible: who touched it, and when.</p>
            </div>
          </div>

          <div className={styles.capRow}>
            <div className={styles.capLabel}>
              <div className={styles.capIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Admin &amp; audit</h3>
            </div>
            <div className={styles.capBody}>
              <p>
                Task types are defined per category — <code className={styles.field}>pre-sale</code>,{' '}
                <code className={styles.field}>post-sale</code>, <code className={styles.field}>account</code> —
                and can be retired without deleting the history that used them.
              </p>
              <p>
                Every change anyone makes is written to an audit log tied back to the task or account it
                touched. Admin access is role-gated; invitations are the only way in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.stackStrip}>
        <div className={styles.dividerLine}></div>
        <div className={styles.stackInner}>
          <span className={styles.stackLabel}>Built with</span>
          <span className={styles.stackPill}>React</span>
          <span className={styles.stackPill}>Vercel</span>
          <span className={styles.stackPill}>Postgres</span>
          <span className={styles.stackPill}>Clerk Auth</span>
        </div>
      </div>

      <footer>
        <Link className="footer-logo" href="/">
          <Image src="/images/logo.png" alt="Lerer Holdings Logo" width={22} height={22} quality={100} />
          <span className="footer-logo-name">Lerer Holdings Pty Ltd</span>
        </Link>
        <p className="footer-copy">© 2026 Lerer Holdings. Internal tooling, shown as a capability reference. Contact: info@lererholdings.com.au</p>
      </footer>
    </>
  );
}
