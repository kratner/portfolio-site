import React from 'react';
import ComponentCard from './ComponentCard';

interface ReelComponent {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  techStack: string[];
  codeUrl?: string;
  iframeHeight?: number;
}

const baseUrl = import.meta.env.BASE_URL;

const REELS_DATA: ReelComponent[] = [
  {
    id: 'scroll-narrative',
    title: 'Scroll-Triggered Bundle Showcase',
    description:
      'A 3-act scroll-driven narrative with pinned sequencing, animated transitions, and dynamic progress tracking. Guides users through product features with smooth scroll-linked reveals.',
    demoUrl: `${baseUrl}reels/scroll-triggered-narrative/demo.html`,
    iframeHeight: 600,
    techStack: [
      'GSAP 3.14.2',
      'ScrollTrigger',
      'HTML5',
      'CSS3 Transforms',
      'Vanilla JavaScript',
    ],
  },
  {
    id: 'image-carousel',
    title: 'Image Carousel',
    description:
      'Responsive image carousel with smooth transitions, keyboard navigation, and optional auto-advance. Perfect for product galleries and feature showcases.',
    demoUrl: `${baseUrl}reels/image-carousel/recon-knife-carousel.html`,
    iframeHeight: 320,
    techStack: ['Vanilla JavaScript', 'CSS Transforms', 'HTML5', 'Responsive Design'],
  },
];

const ReelsGallery: React.FC = () => {
  return (
    <section className="reels-section">
      <div className="reel-header">
        <h2>Motion Graphics & Interactive Components</h2>
        <p>
          Production-tested animations and interactive components built for high-converting
          landing pages. Built with vanilla JavaScript, GSAP, and modern CSS.
        </p>
      </div>

      <div className="reel-content">
        {REELS_DATA.map((reel) => (
          <ComponentCard
            key={reel.id}
            title={reel.title}
            description={reel.description}
            demoUrl={reel.demoUrl}
            techStack={reel.techStack}
            codeUrl={reel.codeUrl}
            iframeHeight={reel.iframeHeight}
          />
        ))}
      </div>
    </section>
  );
};

export default ReelsGallery;
