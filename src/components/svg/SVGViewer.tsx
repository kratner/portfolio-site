import React, { useEffect, useRef } from 'react';

interface SVGViewerProps {
  svgContent: string | null;
}

const SVGViewer: React.FC<SVGViewerProps> = ({ svgContent }) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      const svgContainer = svgContainerRef.current;
      if (svgContainer) {
        const { clientWidth, clientHeight } = svgContainer;
        const svgElement = svgContainer.querySelector('svg');

        if (svgElement) {
          svgElement.setAttribute('width', `${clientWidth}`);
          svgElement.setAttribute('height', `${clientHeight}`);
        }
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  if (!svgContent) {
    return <div>No SVG content available.</div>;
  }

  return (
    <div
      ref={svgContainerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* Render the SVG */}
      <div
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};

export default SVGViewer;
