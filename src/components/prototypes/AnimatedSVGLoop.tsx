import React, { useEffect, useRef, useState } from 'react';

interface SvgData {
  svgPath: string;
  captionTitle: string;
  captionDescription: string;
}

export interface AnimatedSVGLoopProps {
  containerBackgroundCSS?: string;
  svgData: SvgData[];
  targetElements: string[];
  fadeInDuration?: string;
  fadeOutDuration?: string;
  captionStyle?: React.CSSProperties;
  captionTitleStyle?: React.CSSProperties;
  captionDescriptionStyle?: React.CSSProperties;
}

const AnimatedSVGLoop: React.FC<AnimatedSVGLoopProps> = ({
  containerBackgroundCSS,
  svgData,
  targetElements,
  fadeInDuration = '.1s',
  fadeOutDuration = '.1s',
  captionStyle,
  captionTitleStyle,
  captionDescriptionStyle
}) => {
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const svgContainerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [completedElements, setCompletedElements] = useState(0);

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
      svgRef.current.style.width = `${containerSize.width}px`;
      svgRef.current.style.height = `${containerSize.height}px`;
    }
  }, [containerSize]);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const svgItem = svgData[currentIndex];
        const response = await fetch(svgItem.svgPath);
        if (!response.ok) {
          console.error('Failed to fetch SVG:', response.statusText);
          return;
        }

        const svgText = await response.text();
        svgRef.current!.innerHTML = svgText;
        console.log(svgText);

        const elements = targetElements.map((selector) => svgRef.current!.querySelectorAll(selector));
        const totalElementsCount = elements.reduce((count, elementList) => count + elementList.length, 0);
        setTotalElements(totalElementsCount);

        const fadeElementsIn = () => {
          elements.forEach((elementList, elementListIndex) => {
            elementList.forEach((element, elementIndex) => {
              const fadeInDelay = parseFloat(fadeInDuration) * elementIndex;
              (element as HTMLElement).style.opacity = '0';
              (element as HTMLElement).style.transition = `opacity ${fadeInDuration} ease ${fadeInDelay}s`;
              setTimeout(() => {
                (element as HTMLElement).style.opacity = '1';
                setCompletedElements((prevCount) => prevCount + 1);
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
          }, (fadeOutDuration ? parseFloat(fadeOutDuration) : 0) * elements.length * 1000);
        };

        const svgImage = new Image();
        svgImage.onload = () => {
          startFadeLoop();
          if (currentIndex + 1 < svgData.length) {
            setTimeout(() => {
              if (completedElements >= totalElements) {
                setCurrentIndex(currentIndex + 1);
                setCompletedElements(0);
              }
            }, (fadeInDuration ? parseFloat(fadeInDuration) : 0) * totalElementsCount * 1000);
          }
        };
        svgImage.src = svgItem.svgPath;
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    if (svgData.length > 0) {
      fetchSvg();
    } else {
      console.warn('No SVG data provided.');
    }
  }, [svgData, targetElements, fadeInDuration, fadeOutDuration, currentIndex, completedElements, totalElements]);

  return (
    <div
      ref={svgContainerRef}
      style={{
        background: containerBackgroundCSS,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div
          ref={svgRef}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>
      <div className="svg-caption" style={captionStyle}>
        <div className="caption-title" style={captionTitleStyle}>
          {svgData[currentIndex]?.captionTitle}
        </div>
        <div
          className="caption-description"
          style={captionDescriptionStyle}
          dangerouslySetInnerHTML={{ __html: svgData[currentIndex]?.captionDescription }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedSVGLoop;
