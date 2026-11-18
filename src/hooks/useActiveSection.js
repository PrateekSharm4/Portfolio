import { useState, useEffect } from 'react';

/**
 * Custom hook to track the active section using IntersectionObserver
 * 
 * @param {string[]} sectionIds - List of section DOM IDs to monitor
 * @param {string} defaultSection - Fallback section ID
 * @returns {string} activeSection
 */
export function useActiveSection(sectionIds, defaultSection = 'home') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [sectionIds, defaultSection]);

  return activeSection;
}
