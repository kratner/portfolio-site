import React from "react";
import SvgEffect from "../SVGEffect";

const SVGEffectWrapper: React.FC = () => {
    return (
        <SvgEffect
            imagePath="https://kratner.github.io/portfolio-site/images/moeba-white.svg"
            targetElement="path"
            effectType="fade-in"
            delay={5000}
            loop={true}
            transitionDuration={5000}
        />
    );
};

export default SVGEffectWrapper;