import Link from 'next/link';
import Image from 'next/image';

const focusAreas = [
  {
    title: 'Pharma research',
    description:
      'Formulation research, prototype development, and technical exploration for pharmaceutical product ideas.',
  },
  {
    title: 'Cosmetic R&D',
    description:
      'Custom cosmetic formulation work across creams, gels, lotions, serums, cleansers, and topical personal-care formats.',
  },
  {
    title: 'Small-scale manufacturing',
    description:
      'Practical manufacturing support for cosmetic batches, sampling, pilot runs, and early B2B launch quantities.',
  },
  {
    title: 'White-label cosmetics',
    description:
      'Private-label and white-label cosmetic development for brands that need formulation, batch, and launch support.',
  },
];

const processSteps = [
  'Requirement mapping',
  'Formula direction',
  'Prototype batches',
  'Feedback refinement',
  'Small-batch production',
  'White-label handover',
];

export default function Home() {
  return (
    <div className="pharma-site">
      <section className="b2b-hero">
        <div className="container b2b-hero-grid">
          <div className="b2b-hero-copy">
            <p className="eyebrow">B2B research and formulation partner</p>
            <h1>Pharma research and cosmetic white-label manufacturing.</h1>
            <p className="lead">
              WohlStand Pharma works with businesses on pharma research, cosmetic
              formulation, and small-scale cosmetic manufacturing. We are an
              R&D-led company built for practical B2B development, private-label
              launches, and emerging sports-focused cosmetic concepts.
            </p>
            <div className="hero-actions">
              <Link href="/write-to-us" className="btn btn-primary">
                Start a B2B Project
              </Link>
              <Link href="/what-we-do" className="btn btn-outline">
                View Capabilities
              </Link>
            </div>
          </div>
          <div className="b2b-hero-panel" aria-label="Company focus">
            <Image
              src="/pharma_lab_hero.png"
              alt="Research and formulation laboratory"
              width={640}
              height={480}
              priority
              className="b2b-hero-image"
            />
            <div className="capability-strip">
              <span>Pharma R&D</span>
              <span>Cosmetic R&D</span>
              <span>White Label</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="container proof-grid">
          <div>
            <strong>Business model</strong>
            <span>B2B and private-label partnerships</span>
          </div>
          <div>
            <strong>Current scale</strong>
            <span>Small R&D and cosmetic manufacturing setup</span>
          </div>
          <div>
            <strong>New direction</strong>
            <span>Sports-focused cosmetic products in development</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">What WPPL does</p>
            <h2 className="section-heading">Focused, technical, and built for early-stage product work.</h2>
          </div>
          <p className="section-copy">
            The company is positioned for businesses that need a formulation
            partner before they need a large factory. That means research,
            prototype iteration, small cosmetic batches, and white-label support
            with clear communication around what is ready, what is custom, and
            what is still being developed.
          </p>
        </div>
        <div className="container capability-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="capability-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted-section">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">B2B workflow</p>
            <h2 className="section-heading">From idea to test batch without overcomplicating the start.</h2>
            <p className="section-copy">
              WPPL can support brands, distributors, clinics, salons, wellness
              operators, and sports businesses that want to explore a product
              concept, validate a formula direction, or prepare a white-label
              cosmetic line.
            </p>
            <Link href="/write-to-us" className="btn btn-secondary">
              Discuss Requirements
            </Link>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section sports-section">
        <div className="container sports-panel">
          <div>
            <p className="eyebrow">Emerging focus</p>
            <h2 className="section-heading">Sports cosmetics are the next product direction.</h2>
            <p className="section-copy">
              The company is moving into sports-oriented cosmetic research, with
              room to develop products for active lifestyles such as sweat-aware
              skincare, friction-care formats, recovery topicals, and outdoor-use
              cosmetic concepts.
            </p>
          </div>
          <Link href="/what-we-do" className="btn btn-outline light-outline">
            Explore Sports Cosmetics
          </Link>
        </div>
      </section>
    </div>
  );
}
