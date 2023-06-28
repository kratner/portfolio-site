// SVGEffect.tsx
import React, { useEffect, useRef } from 'react';

interface SVGEffectProps {
  svgFile: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Use React.ComponentType
  targetElement: string;
  effectType: string;
  delay?: number;
  loop?: boolean;
  transitionDuration?: number;
}

const SVGEffect: React.FC<SVGEffectProps> = ({
  svgFile: SVGComponent, // Rename svgFile to SVGComponent
  targetElement,
  effectType,
  delay = 0,
  loop = false,
  transitionDuration = 1000,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      // Apply fade-in effect
      if (effectType === 'fade-in') {
        svgRef.current.style.opacity = '0';
        svgRef.current.style.transition = `opacity ${transitionDuration}ms ease-in-out ${delay}ms`;

        if (loop) {
          svgRef.current.style.animationIterationCount = 'infinite';
        }

        setTimeout(() => {
          svgRef.current?.style.setProperty('opacity', '1');
        }, 0);
      }

      // Attach the modified SVG to the target element
      const target = document.querySelector(targetElement);
      if (target) {
        target.appendChild(svgRef.current);
      }
    }
  }, [targetElement, effectType, delay, loop, transitionDuration]);

  return <SVGComponent ref={svgRef} />;
};

export default SVGEffect;
