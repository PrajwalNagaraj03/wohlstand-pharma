import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About WPPL',
  description:
    'About WohlStand Pharma Private Limited, a small B2B R&D-led company focused on pharma research, cosmetic formulation, and small-scale cosmetic manufacturing.',
};

const principles = [
  {
    title: 'Research first',
    text: 'Projects begin with formulation logic, intended use, material choices, and a practical route to samples.',
  },
  {
    title: 'B2B clarity',
    text: 'The company works for business buyers, not consumer retail sales, so communication stays centered on briefs, batches, and launch needs.',
  },
  {
    title: 'Honest scale',
    text: 'WPPL is a small setup, which makes it better suited for focused R&D, prototyping, and early cosmetic manufacturing support.',
  },
  {
    title: 'Category focus',
    text: 'Pharma work remains research-led, while cosmetics carries the R&D and small-scale manufacturing opportunity.',
  },
];

export default function WhoWeAre() {
  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">About WPPL</p>
          <h1 className="page-title">A small R&D-led company for focused formulation work.</h1>
          <p className="page-subtitle">
            WohlStand Pharma Private Limited supports B2B product development
            through pharma research, cosmetic formulation, and small-scale
            cosmetic manufacturing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Positioning</p>
            <h2 className="section-heading">Technical enough for research. Practical enough for business.</h2>
          </div>
          <div>
            <p className="section-copy">
              WPPL is best presented as a formulation partner for businesses
              that need early product development support. The company can help
              turn a category idea into a research direction, prototype, or
              small cosmetic batch before the product is scaled through larger
              manufacturing channels.
            </p>
            <p className="section-copy">
              This positioning is deliberately focused: pharma research on one
              side, cosmetic R&D and manufacturing on the other, with manufacturing
              support as the commercial bridge.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container capability-grid">
          {principles.map((principle) => (
            <article key={principle.title} className="capability-card">
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-column-detail">
          <article className="detail-panel">
            <p className="eyebrow">Mission</p>
            <h2>Help businesses develop credible product concepts.</h2>
            <p>
              WPPL aims to support product owners with formulation research,
              sample development, cosmetic batch support, and practical technical
              guidance during the early stages of a product line.
            </p>
          </article>

          <article className="detail-panel">
            <p className="eyebrow">Direction</p>
            <h2>Build deeper capability in sports cosmetics.</h2>
            <p>
              The company is moving toward sports-focused cosmetics, where
              performance use cases, skin comfort, sweat exposure, and outdoor
              conditions can shape product development.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
