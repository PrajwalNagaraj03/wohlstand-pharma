import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Location',
  description:
    'WohlStand Pharma Private Limited is located in Harohalli Industrial Area, Ramanagara District, Karnataka, India.',
};

export default function WhereWeAre() {
  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">Location</p>
          <h1 className="page-title">Located in Harohalli, Karnataka.</h1>
          <p className="page-subtitle">
            WPPL operates from Harohalli Industrial Area in Ramanagara District,
            with access to the wider Bengaluru business and pharma ecosystem.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-detail">
          <article className="detail-panel">
            <p className="eyebrow">Registered location</p>
            <h2>Harohalli Industrial Area</h2>
            <p>
              WohlStand Pharma Private Limited is based in Ramanagara District,
              Karnataka, India. Project visits and business meetings should be
              scheduled in advance.
            </p>
            <div className="contact-note">
              <strong>Address</strong>
              <span>Harohalli Industrial Area, Ramanagara District, Karnataka, India</span>
            </div>
          </article>

          <article className="detail-panel accent-panel">
            <p className="eyebrow">Plan a discussion</p>
            <h2>Start with a project brief.</h2>
            <p>
              For B2B product work, the best first step is to share the product
              category, intended use, development stage, and batch expectations.
            </p>
            <Link href="/write-to-us" className="btn btn-primary">
              Start a Project
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
