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
    id: 'scroll-toolkit',
    title: 'Scroll-Triggered Toolkit',
    description:
      'Interactive toolkit that opens and closes based on scroll position. Features floating capability cards that fan out from a central case. Demonstrates scroll-driven animation synchronized with user scroll behavior.',
    demoUrl: `${baseUrl}reels/scroll-triggered-toolkit/demo.html`,
    iframeHeight: 800,
    techStack: [
      'GSAP 3.14.2',
      'ScrollTrigger Plugin',
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
