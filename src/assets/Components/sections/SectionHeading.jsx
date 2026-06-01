import React from 'react';

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow ? <h2 className="section-title">{eyebrow}</h2> : null}
      {title ? <span className="eyebrow section-subtitle-pill">{title}</span> : null}
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
