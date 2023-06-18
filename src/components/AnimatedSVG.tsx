import React, { useEffect, useRef } from 'react';

interface AnimatedSVGProps {
  svgPath: string;
  targetElement: string;
  fadeInDuration?: string;
  fadeOutDuration?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  svgPath,
  targetElement,
  fadeInDuration = '0.5s',
  fadeOutDuration = '0.5s',
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    if (!svgElement) return;

    const targetElements = svgElement.querySelectorAll<HTMLElement>(targetElement);

    // Initial fade in
    Array.from(targetElements).forEach((element, index) => {
      element.style.opacity = '0';

      setTimeout(() => {
        element.style.transition = `opacity ${fadeInDuration}`;
        element.style.opacity = '1';
      }, index * 100); // Adjust the delay as needed
    });

    // Reverse fade out
    setTimeout(() => {
      Array.from(targetElements).forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '0';
        }, (targetElements.length - index) * 100); // Adjust the delay as needed
      });
    }, targetElements.length * 100); // Adjust the delay as needed
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 100 100">
      <use xlinkHref={svgPath} />
    </svg>
  );
};

export default AnimatedSVG;
