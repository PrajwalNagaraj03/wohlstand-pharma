import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'WohlStand Pharma capabilities for pharma research, cosmetic formulation, small-scale cosmetic manufacturing, and sports cosmetic concepts.',
};

const pharmaCapabilities = [
  'Formulation research and technical feasibility exploration',
  'Prototype development for pharmaceutical product ideas',
  'Excipient and dosage-form direction support',
  'Research documentation and formulation rationale support',
];

const cosmeticCapabilities = [
  'Custom cosmetic formulation for B2B brands',
  'Creams, gels, lotions, serums, cleansers, and topical formats',
  'Small-batch and pilot-scale cosmetic manufacturing',
  'Formula refinement for texture, sensory feel, stability, and use case',
];



const sportsIdeas = [
  'Sweat-aware skincare',
  'Anti-friction topical formats',
  'Outdoor-use cosmetic concepts',
  'Recovery and comfort-focused gels',
];

export default function WhatWeDo() {
  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <h1 className="page-title">Research-led support for B2B product development.</h1>
          <p className="page-subtitle">
            WPPL focuses on pharma research, cosmetic R&D, and small-scale cosmetic
            manufacturing for businesses preparing
            new product lines.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-detail">
          <article className="detail-panel">
            <p className="eyebrow">Pharma</p>
            <h2>Research only, not positioned as pharma manufacturing.</h2>
            <p>
              The pharma side is centered on research and formulation thinking.
              It is suited for technical exploration, early concept work, and
              prototype-level development conversations.
            </p>
            <ul className="check-list">
              {pharmaCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel accent-panel">
            <p className="eyebrow">Cosmetics</p>
            <h2>R&D plus small-scale manufacturing.</h2>
            <p>
              Cosmetic work can move from brief to formulation, sampling, and
              batch support. This is the stronger commercial pillar for B2B and
              manufacturing partnerships.
            </p>
            <ul className="check-list">
              {cosmeticCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>


      <section className="section">
        <div className="container sports-detail">
          <div>
            <p className="eyebrow">Sports cosmetics</p>
            <h2 className="section-heading">An emerging product direction for active-use personal care.</h2>
            <p className="section-copy">
              WPPL is moving into sports-focused cosmetic research. This area
              should be presented as a developing capability until specific
              launched products are confirmed.
            </p>
          </div>
          <div className="tag-grid">
            {sportsIdeas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Have a product brief?</h2>
          <p>
            Share the category, use case, expected batch size, and whether you
            need custom formulation or manufacturing support.
          </p>
          <div className="cta-actions">
            <Link href="/write-to-us" className="btn btn-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
