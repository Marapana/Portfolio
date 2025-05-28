import React from 'react';
import { Container } from 'react-bootstrap';

const experiences = [
  {
    title: 'UI/UX Engineer',
    company: 'Infinity Innovators',
    year: '2024 Aug – Present',
  },
  {
    title: 'Associate UI/UX Engineer',
    company: 'Infinity Innovators',
    year: '2023 Aug – 2024 June',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Konekt Holdings (Pvt) Ltd',
    year: '2022 May – Nov',
  },
  {
    title: 'UI/UX Engineer Intern',
    company: 'Infini Solutions',
    year: '2020 Jan – June',
  },
];

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-5">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="d-flex position-relative mb-5" key={index}>
            {/* Dot and Line Column */}
            <div className="timeline-indicator">
              <span className="dot" />
              {index !== experiences.length - 1 && <span className="line" />}
            </div>

            {/* Content Column */}
            <div className="ps-4">
              <div className="fw-semibold">{exp.title}</div>
              <div className="text-muted">— {exp.company}</div>
              <div className="text-muted small">{exp.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Styles */}
      <style>{`
        .timeline-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 4px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background-color: gray;
          border-radius: 50%;
          z-index: 2;
        }

        .line {
          width: 2px;
          background-color: #ccc;
          flex-grow: 1;
          margin-top: 2px;
        }

        @media (min-width: 768px) {
          .timeline .timeline-indicator {
            min-width: 16px;
            margin-right: 16px;
          }
        }
      `}</style>
    </Container>
  );
};

export default About;
