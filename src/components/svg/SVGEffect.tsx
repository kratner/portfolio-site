import React, { useEffect } from 'react';

interface SVGEffectProps {
  svgContent: string | null;
  targetElements: string[];
  effectClass: string;
}

const SVGEffect: React.FC<SVGEffectProps> = ({ svgContent, targetElements, effectClass }) => {
  useEffect(() => {
    if (!svgContent) {
      return; // No need to apply effects if svgContent is null
    }

    const applyEffects = () => {
      targetElements.forEach((elementSelector) => {
        const elements = document.querySelectorAll<SVGElement>(elementSelector);
        elements.forEach((element) => {
          element.classList.add(effectClass);
        });
      });
    };

    applyEffects();

    // Clean up the effects when the component unmounts
    return () => {
      targetElements.forEach((elementSelector) => {
        const elements = document.querySelectorAll<SVGElement>(elementSelector);
        elements.forEach((element) => {
          element.classList.remove(effectClass);
        });
      });
    };
  }, [svgContent, targetElements, effectClass]);

  return null; // SVGEffect doesn't render any UI, so it returns null
};

export default SVGEffect;
