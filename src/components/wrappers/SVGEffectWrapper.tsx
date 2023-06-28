// SVGEffectWrapper.tsx
import React from 'react';
import SVGEffect from '../SVGEffect';
import TestSVG from '../../assets/images/test.svg';

const SVGEffectWrapper: React.FC = () => {
  return (
    <SVGEffect
      svgFile={TestSVG}
      targetElement="path"
      effectType="fade-in"
      delay={5000}
    />
  );
};

export default SVGEffectWrapper;
