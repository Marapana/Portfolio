import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { projects } from '../../data/portfolioData.js';
import SectionHeading from './SectionHeading.jsx';

const ProjectsSection = () => {
  return (
    <section id="projects" className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Professional product and website work grounded in clarity."
          description="Each card highlights real launched work. The layout is structured to support stronger project storytelling now, while also leaving room for Figma and GitHub links when you add them."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.accent}`} key={project.title}>
              <div className="project-thumb">
                <div className="project-thumb-overlay" aria-hidden="true" />
                <img className="project-icon" src={project.icon} alt="" aria-hidden="true" />
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>

              <div className="project-content">
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    className={`project-link ${project.figmaUrl ? '' : 'is-disabled'}`}
                    href={project.figmaUrl || '#'}
                    target={project.figmaUrl ? '_blank' : undefined}
                    rel={project.figmaUrl ? 'noreferrer' : undefined}
                    aria-disabled={!project.figmaUrl}
                    onClick={(event) => {
                      if (!project.figmaUrl) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <i className="fa-brands fa-figma" aria-hidden="true" />
                    <span>Figma</span>
                  </a>

                  <a className="project-link project-link-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ArrowTopRightOnSquareIcon className="project-link-icon" aria-hidden="true" />
                    <span>{project.codeUrl ? 'GitHub' : 'Website'}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
