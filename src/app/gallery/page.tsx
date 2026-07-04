import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facility Notes',
  description:
    'Facility and capability notes for WohlStand Pharma Private Limited. Verified images and details can be added as they become available.',
};

const notes = [
  'Pharma research activity',
  'Cosmetic formulation work',
  'Small-scale cosmetic batches',
  'White-label project support',
  'Sports cosmetic concepts in development',
  'B2B project discussions by appointment',
];

export default function Gallery() {
  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">Facility notes</p>
          <h1 className="page-title">A place for verified facility details.</h1>
          <p className="page-subtitle">
            Real facility photography, equipment details, and process notes
            should be added only after they are confirmed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container capability-grid three">
          {notes.map((note) => (
            <article key={note} className="capability-card compact-card">
              <h3>{note}</h3>
              <p>Details can be expanded with verified content.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
