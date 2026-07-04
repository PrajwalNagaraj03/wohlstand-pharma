import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'White Label Cosmetic Solutions',
  description:
    'White-label and private-label cosmetic development support from WohlStand Pharma for B2B brands, clinics, salons, distributors, and sports-focused businesses.',
};

const partnerTypes = [
  'D2C and private-label brands',
  'Cosmetic distributors',
  'Clinics and wellness operators',
  'Salons and professional-care businesses',
  'Sports and active-lifestyle brands',
];

const developmentModes = [
  {
    title: 'Adapt an existing direction',
    text: 'A faster path for buyers who have a category in mind and need a practical white-label product route.',
  },
  {
    title: 'Create from a brief',
    text: 'Custom formulation work for brands with specific audience, texture, ingredient, claim, or price-position needs.',
  },
  {
    title: 'Prepare launch batches',
    text: 'Small-scale cosmetic batch support for sampling, pilots, first orders, and market validation.',
  },
];

export default function WorkWithUs() {
  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">White label</p>
          <h1 className="page-title">Cosmetic product development for B2B brands.</h1>
          <p className="page-subtitle">
            WPPL supports private-label and white-label cosmetic projects where
            the buyer needs formulation thinking, small-batch manufacturing, and
            a practical route from product brief to launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2 className="section-heading">For businesses building their own cosmetic line.</h2>
            <p className="section-copy">
              The white-label model fits buyers who want to sell under their
              brand while relying on WPPL for formulation, product development,
              and batch support.
            </p>
          </div>
          <ul className="partner-list">
            {partnerTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container capability-grid three">
          {developmentModes.map((mode) => (
            <article key={mode.title} className="capability-card">
              <h3>{mode.title}</h3>
              <p>{mode.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Best-fit products</p>
            <h2 className="section-heading">Topical cosmetics and active-use personal care.</h2>
          </div>
          <div>
            <p className="section-copy">
              Suitable project categories can include creams, gels, lotions,
              serums, cleansers, basic haircare, skin-comfort formats, and
              sports-oriented cosmetic concepts. Final product scope should be
              confirmed through the project brief.
            </p>
            <Link href="/write-to-us" className="btn btn-primary">
              Share a Product Brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
