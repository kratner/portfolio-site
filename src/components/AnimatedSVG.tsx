import React, { useEffect, useRef } from 'react';

interface AnimatedSVGProps {
  svgPath: string;
  targetElements: string[];
  fadeInDuration?: string;
  fadeOutDuration?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  svgPath,
  targetElements,
  fadeInDuration = '.1s',
  fadeOutDuration = '.1s',
}) => {
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(svgPath);
        if (!response.ok) {
          console.error('Failed to fetch SVG:', response.statusText);
          return;
        }

        const svgText = await response.text();
        svgRef.current!.innerHTML = svgText;

        const elements = targetElements.map((selector) => svgRef.current!.querySelectorAll(selector));

        const fadeElementsIn = () => {
          elements.forEach((elementList, elementListIndex) => {
            elementList.forEach((element, elementIndex) => {
              const fadeInDelay = parseFloat(fadeInDuration) * elementIndex;
              (element as HTMLElement).style.opacity = '0';
              (element as HTMLElement).style.transition = `opacity ${fadeInDuration} ease ${fadeInDelay}s`;
              setTimeout(() => {
                (element as HTMLElement).style.opacity = '1';
              }, fadeInDelay * 1000);
            });
          });
        };

        const fadeElementsOut = () => {
          elements.forEach((elementList, elementListIndex) => {
            elementList.forEach((element, elementIndex) => {
              const fadeOutDelay = parseFloat(fadeOutDuration) * elementIndex;
              (element as HTMLElement).style.opacity = '0';
              (element as HTMLElement).style.transition = `opacity ${fadeOutDuration} ease ${fadeOutDelay}s`;
            });
          });
        };

        const startFadeLoop = () => {
          fadeElementsOut();
          setTimeout(() => {
            fadeElementsIn();
            setTimeout(startFadeLoop, (fadeInDuration ? parseFloat(fadeInDuration) : 0) * elements.length * 1000);
          }, (fadeOutDuration ? parseFloat(fadeOutDuration) : 0) * elements.length * 1000);
        };

        const svgImage = new Image();
        svgImage.onload = () => {
          startFadeLoop();
        };
        svgImage.src = svgPath;
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    if (svgPath) {
      fetchSvg();
    } else {
      console.warn('No SVG path provided.');
    }
  }, [svgPath, targetElements, fadeInDuration, fadeOutDuration]);

  return (
    <>
      <div
        ref={svgRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

    </>
  );
};

export default AnimatedSVG;
