import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import TerminalCard from './TerminalCard.jsx';

const AboutSection = () => {
  return (
    <section id="about-skills" className="page-section page-section-alt">
      <div className="container">
        <div className="about-layout">
          <div className="about-copy">
            <SectionHeading
              eyebrow="About & Skills"
              title="Bringing structure, intention, and stronger UX thinking into every interface."
              description="UX research, design systems, interaction design, and responsive front-end delivery shaped into one practical workflow."
            />

            <div className="about-text">
              <p>
                I work across <span className="text-highlight">UX Research</span> and{' '}
                <span className="text-highlight">Figma</span> to shape clearer product experiences before moving into
                implementation.
              </p>
              <p>
                My framework stack includes <span className="text-highlight">ReactJs</span>,{' '}
                <span className="text-highlight">Angular</span>, and <span className="text-highlight">Laravel</span>,
                supported by <span className="text-highlight">Bootstrap</span>,{' '}
                <span className="text-highlight">Tailwind</span>,{' '}
                <span className="text-highlight">Material UI</span>, and{' '}
                <span className="text-highlight">ReactBootstrap</span> for responsive interfaces.
              </p>
              <p>
                My work also covers design systems, interaction design, responsive front-end, and usability-focused UI,
                with delivery workflows supported by <span className="text-highlight">GitHub</span>,{' '}
                <span className="text-highlight">Bitbucket</span>, <span className="text-highlight">Azure</span>,{' '}
                and agile tools like <span className="text-highlight">ClickUp</span>,{' '}
                <span className="text-highlight">Jira</span>, and <span className="text-highlight">Zoho</span>.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-aside">
              <TerminalCard />
              <div className="about-note-card">
                <span className="about-note-kicker">Working style</span>
                <h3>Design decisions backed by clarity, usability, and front-end realism.</h3>
                <p>
                  I focus on structure first, then refine the visual language and interactions so the final output
                  feels intentional instead of overloaded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
