import React, { useRef, useEffect } from 'react';

type Position = {
  top?: string;
  left?: string;
  transform?: string;
};

type ParallaxContentProps = {
  elements: React.ReactElement[];
  zIndexes?: number[];
  speeds?: number[];
  positions?: Position[];
};

const ParallaxContent: React.FC<ParallaxContentProps> = ({ elements, zIndexes = [], speeds = [], positions = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;

      elements.forEach((element, index) => {
        const zIndex = zIndexes[index] || 1;
        const speed = speeds[index] || 1;
        const position = positions[index] || {};

        const elementRef = containerRef.current?.children[index] as HTMLElement | undefined;
        if (elementRef) {
          const elementTop = elementRef.getBoundingClientRect().top;
          const translateY = ((scrollPosition - elementTop + windowHeight) / windowHeight) * speed;
          elementRef.style.transform = `translateY(${translateY}px)`;
          elementRef.style.zIndex = zIndex.toString();
          Object.assign(elementRef.style, position);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elements, zIndexes, speeds, positions]);

  return <div ref={containerRef}>{elements}</div>;
};

export default ParallaxContent;
