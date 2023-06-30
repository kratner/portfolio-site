import React, { useEffect, useRef, useState } from 'react';

export interface AnimatedSVGProps {
  containerBackgroundStyle?: string;
  svgPath: string;
  targetElements: string[];
  fadeInDuration?: string;
  fadeOutDuration?: string;
  captionTitle?: string;
  captionDescription?: string;
  captionStyle?: React.CSSProperties;
  captionTitleStyle?: React.CSSProperties;
  captionDescriptionStyle?: React.CSSProperties;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  containerBackgroundStyle,
  svgPath,
  targetElements,
  fadeInDuration = '.1s',
  fadeOutDuration = '.1s',
  captionTitle = 'Title',
  captionDescription = 'Descriptive Text',
  captionStyle,
  captionTitleStyle,
  captionDescriptionStyle
}) => {
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const svgContainerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (svgContainerRef.current) {
        const { width, height } = svgContainerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.style.width = '100%';
      svgRef.current.style.height = '100%';
    }
  }, [containerSize]);

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
      <div
        ref={svgContainerRef}
        style={{
          background: containerBackgroundStyle,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            ref={svgRef}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className='svg-caption' style={captionStyle}>
          <div className='caption-title' style={captionTitleStyle}>{captionTitle}</div>
          <div className='caption-description' style={captionDescriptionStyle} dangerouslySetInnerHTML={{ __html: captionDescription }}></div>
        </div>
      </div>
  );
};

export default AnimatedSVG;
