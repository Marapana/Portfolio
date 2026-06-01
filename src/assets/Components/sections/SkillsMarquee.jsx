import React from 'react';
import { marqueeItems } from '../../data/portfolioData.js';

const repeatedItems = [...marqueeItems, ...marqueeItems];

const SkillsMarquee = () => {
  return (
    <section className="skills-ribbon">
      <div className="skills-ribbon-inner">
        <div className="skills-ribbon-copy">
          <span className="eyebrow">Core Stack</span>
          <p className='hero-intro'>Design systems, front-end craft, modern tooling, and UX thinking working together.</p>
        </div>

        <div className="marquee-shell" aria-label="Core tools and capabilities">
          <div className="marquee-track">
            {repeatedItems.map((item, index) => (
              <div className="marquee-pill" key={`${item.name}-${index}`}>
                <i className={item.icon} aria-hidden="true" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
