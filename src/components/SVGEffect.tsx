import React, { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'react';

type Position =
  | 'absolute'
  | 'relative'
  | 'static'
  | 'fixed'
  | 'sticky'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

type SvgEffectProps = {
  imagePath: string;
  targetElement: string;
  effectType: string;
  delay: number;
  loop?: boolean;
  loopCount?: number;
  transitionDuration?: number;
};

const SvgEffect: React.FC<SvgEffectProps> = ({
  imagePath,
  targetElement,
  effectType,
  delay,
  loop = false,
  loopCount,
  transitionDuration = 1000,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSvgReady, setIsSvgReady] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleSvgReady = () => {
    setIsSvgReady(true);
  };

  const svgStyle: CSSProperties = {
    width: '100vh',
    height: '100vh',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  useEffect(() => {
    const applyEffect = (element: SVGElement, index: number) => {
      // Apply the specified effect to the target element
      // Modify the element's style accordingly based on the effectType
      if (effectType === 'fade-in') {
        element.style.opacity = '1';
      }
      // Add other effect types here

      // Check if the loop condition is satisfied
      const loopCondition = loop && (!loopCount || index + 1 < loopCount);
      if (loopCondition) {
        // If looping, recursively apply the effect to the next target element after the delay
        const elements = Array.from(svgRef.current!.querySelectorAll(targetElement)) as SVGElement[];
        const nextIndex = (index + 1) % elements.length;
        setTimeout(() => {
          applyEffect(elements[nextIndex], nextIndex);
        }, delay);
      }
    };

    const initializeElements = () => {
      if (svgRef.current) {
        const elements = Array.from(svgRef.current.querySelectorAll(targetElement)) as SVGElement[];

        // Set initial attributes for target elements
        elements.forEach((element) => {
          element.style.opacity = '0';
          // Add other initial attributes based on the effectType if needed
        });

        // Apply the effect to the first target element after the specified delay
        if (elements.length > 0) {
          setTimeout(() => {
            applyEffect(elements[0], 0);
          }, delay);
        }
      }
    };

    if (imagePath) {
      const image = new Image();
      image.src = imagePath;
      image.onload = handleImageLoad;
    }

    if (isLoaded && isSvgReady) {
      initializeElements();
    }
  }, [imagePath, targetElement, effectType, delay, loop, loopCount, isLoaded, isSvgReady]);

  return (
    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" xlinkHref={imagePath} style={svgStyle}>
      <image href={imagePath} onLoad={handleImageLoad} />
      <script type="text/ecmascript" onLoad={handleSvgReady} />
    </svg>
  );
};

export default SvgEffect;
