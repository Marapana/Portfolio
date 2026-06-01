import React from 'react';
import SectionHeading from './SectionHeading.jsx';

const steps = [
  {
    index: '01',
    title: 'Understand the product',
    description: 'Clarify user goals, content priorities, and what the interface needs to communicate first.',
  },
  {
    index: '02',
    title: 'Shape the experience',
    description: 'Build the interaction flow, component structure, and visual hierarchy before polishing details.',
  },
  {
    index: '03',
    title: 'Refine for production',
    description: 'Translate direction into responsive front-end behavior with maintainability and usability in mind.',
  },
];

const ProcessSection = () => {
  return (
    <section className="page-section page-section-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Process"
          title="A workflow that keeps UX quality tied to real delivery."
          description="The work is strongest when design decisions and implementation decisions support each other early, not late."
          align="center"
        />

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.index}>
              <span className="process-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
