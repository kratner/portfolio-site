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
    id: 'image-carousel',
    title: 'Image Carousel',
    description:
      'Responsive image carousel with smooth transitions, keyboard navigation, and optional auto-advance. Perfect for product galleries and feature showcases.',
    demoUrl: `${baseUrl}reels/image-carousel/recon-knife-carousel.html`,
    iframeHeight: 320,
    techStack: ['Vanilla JavaScript', 'CSS Transforms', 'HTML5', 'Responsive Design'],
  },

  // DEFERRED: Scroll-Triggered Bundle Showcase (GSAP + ScrollTrigger)
  // Location: public/reels/scroll-triggered-narrative/demo.html
  // Status: Deferred - Fully functional but removed to streamline gallery
  // Reason: Portfolio focused on Image Carousel as primary interactive demo
  // To re-enable:
  //   1. Uncomment block below
  //   2. Move above Image Carousel if desired as primary
  //   3. Rebuild with: npm run build
  //   4. Deploy with: npm run deploy
  // {
  //   id: 'scroll-narrative',
  //   title: 'Scroll-Triggered Bundle Showcase',
  //   description:
  //     'A 3-act scroll-driven narrative with pinned sequencing, animated transitions, and dynamic progress tracking. Guides users through product features with smooth scroll-linked reveals.',
  //   demoUrl: `${baseUrl}reels/scroll-triggered-narrative/demo.html`,
  //   iframeHeight: 600,
  //   techStack: [
  //     'GSAP 3.14.2',
  //     'ScrollTrigger',
  //     'HTML5',
  //     'CSS3 Transforms',
  //     'Vanilla JavaScript',
  //   ],
  // },

  // SCAFFOLD: Scroll-Triggered Toolkit (Intersection Observer + Radial Tool Fan)
  // Location: public/reels/scroll-triggered-toolkit/demo.html
  // Status: Deferred - Fully functional but removed for MVP scope
  // Architecture: Intersection Observer triggers animation when entering viewport
  // Animation: Tools fan out radially from center case, counter 0→6, color transition
  // To re-enable:
  //   1. Uncomment block below
  //   2. Rebuild with: npm run build
  //   3. Deploy with: npm run deploy
  // Design notes:
  //   - Uses Intersection Observer (works in iframe context)
  //   - Staggered tool expansion (60ms between each)
  //   - 600ms total animation duration
  //   - Resets when scrolled out of view
  //   - Fully responsive (700px stage height)
  // Debug doc: See TOOLKIT_DEMO_DEBUG.md for implementation notes
  // {
  //   id: 'scroll-toolkit',
  //   title: 'Scroll-Triggered Toolkit',
  //   description:
  //     'Interactive toolkit that opens and closes as you scroll. Floating capability cards fan out from a central case. Demonstrates scroll-driven animation with Intersection Observer API.',
  //   demoUrl: `${baseUrl}reels/scroll-triggered-toolkit/demo.html`,
  //   iframeHeight: 850,
  //   techStack: [
  //     'Vanilla JavaScript',
  //     'CSS3 Transforms',
  //     'Intersection Observer',
  //     'Responsive Design',
  //   ],
  // },
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
