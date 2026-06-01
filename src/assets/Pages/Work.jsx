import React from 'react';
import HeroSection from '../Components/sections/HeroSection.jsx';
import SkillsMarquee from '../Components/sections/SkillsMarquee.jsx';
import AboutSection from '../Components/sections/AboutSection.jsx';
import ProjectsSection from '../Components/sections/ProjectsSection.jsx';
import ProcessSection from '../Components/sections/ProcessSection.jsx';
import ContactSection from '../Components/sections/ContactSection.jsx';

const Work = () => {
  return (
    <div className="portfolio-page">
      <HeroSection />
      <SkillsMarquee />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default Work;
