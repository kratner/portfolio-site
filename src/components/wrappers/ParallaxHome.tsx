import React, { useEffect, useRef, useMemo } from 'react';
import ParallaxContent from '../ParallaxContent';

const ParallaxHome: React.FC = () => {
  const positions = [
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  ];
  const zIndexes = [1, 3, 2];

  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const perspectives = [1000, 2000, 500]; // Moved perspectives inside useEffect

    const handleScroll = () => {
      if (parallaxContainerRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const containerTop = parallaxContainerRef.current.offsetTop;
        const containerHeight = parallaxContainerRef.current.offsetHeight;

        const elementTransforms = perspectives.map((perspective, index) => {
          const translateY = ((scrollTop - containerTop) / containerHeight) * perspective;
          return `translateY(${translateY}px)`;
        });

        if (parallaxContainerRef.current.children.length === perspectives.length) {
          Array.from(parallaxContainerRef.current.children).forEach((element, index) => {
            (element as HTMLElement).style.transform = elementTransforms[index];
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Removed perspectives from dependency array

  const elements = useMemo(
    () => [
      <img src="https://kratner.github.io/portfolio-site/images/moeba-white.svg" alt="Moeba" />,
      <h2>Title</h2>,
      <p>Some text content</p>,
    ],
    []
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '60px', background: '#000', color: '#fff', zIndex: 10 }}>
        Header
      </header>
      <div ref={parallaxContainerRef} style={{ marginTop: '60px', marginBottom: '60px' }}>
        <ParallaxContent elements={elements} positions={positions} zIndexes={zIndexes} />
      </div>
      <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '60px', background: '#000', color: '#fff', zIndex: 10 }}>
        Footer
      </footer>
    </div>
  );
};

export default ParallaxHome;
