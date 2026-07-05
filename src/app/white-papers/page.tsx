import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Downloads',
  description:
    'Downloads and company documents for WohlStand Pharma B2B pharma research and cosmetic formulation inquiries.',
};

export default function WhitePapers() {
  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">Downloads</p>
          <h1 className="page-title">Company documents can be added here.</h1>
          <p className="page-subtitle">
            This page is prepared for brochures, capability notes, formulation
            category sheets, and confirmed compliance documents when they are
            available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container capability-grid three">
          <article className="capability-card">
            <h3>Company profile</h3>
            <p>A short PDF introducing WPPL, its B2B focus, and project categories.</p>
          </article>
          <article className="capability-card">
            <h3>Cosmetic capabilities</h3>
            <p>A category sheet for cosmetic R&D and small-batch support.</p>
          </article>
          <article className="capability-card">
            <h3>Confirmed documents</h3>
            <p>Certificates or registrations should only be added here after verification.</p>
          </article>
        </div>
        <div className="container centered-note">
          <p>
            No downloadable documents are attached yet. Use the project form to
            request current details.
          </p>
          <Link href="/write-to-us" className="btn btn-primary">
            Request Details
          </Link>
        </div>
      </section>
    </div>
  );
}
