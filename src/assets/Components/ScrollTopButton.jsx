import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top-button ${visible ? 'is-visible' : ''}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon aria-hidden="true" />
    </button>
  );
};

export default ScrollTopButton;
