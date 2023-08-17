import React from 'react';

export interface SVGPreloaderProps {
  indeterminate?: boolean;
  indeterminateAnimationDuration?: string;
  circleColor?: string;
  strokeWidth?: number;
  containerBackgroundCSS?: string;
  containerClassName?: string;
  wrapperClassName?: string;
}

const SVGPreloader: React.FC<SVGPreloaderProps> = ({
  indeterminate = true,
  indeterminateAnimationDuration = '1s',
  circleColor = '#ccc',
  strokeWidth = 10,
  containerBackgroundCSS = 'transparent',
  containerClassName = '',
  wrapperClassName = ''
}) => {
  const containerStyles: React.CSSProperties = {
    position: 'fixed',
    background: containerBackgroundCSS,
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const wrapperStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const indeterminateWrapperStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
  }

  const indeterminateSVGStyles: React.CSSProperties = {
    overflow: 'visible'
  }

  return (
    <div className={containerClassName} style={containerStyles}>
      <div className={wrapperClassName} style={wrapperStyles}>
        {indeterminate ? (
          <div className="indeterminate-loader" style={indeterminateWrapperStyles} >
            <svg xmlns="http://www.w3.org/2000/svg" style={indeterminateSVGStyles} >
              <circle
                cx="50%"
                cy="50%"
                r="30"
                stroke={circleColor}
                fill="none"
                strokeWidth={strokeWidth}
              >
                <animate
                  attributeName="r"
                  repeatCount="indefinite"
                  dur={indeterminateAnimationDuration}
                  values="0;40"
                  keyTimes="0;1"
                  keySplines="0 0.2 0.8 1"
                  calcMode="spline"
                  begin="0s"
                ></animate>
                <animate
                  attributeName="opacity"
                  repeatCount="indefinite"
                  dur={indeterminateAnimationDuration}
                  values="1;0"
                  keyTimes="0;1"
                  keySplines="0.2 0 0.8 1"
                  calcMode="spline"
                  begin="0s"
                ></animate>
              </circle>
            </svg>
          </div>
        ) : (
          <div className="determinate-loader" />
        )}
      </div>
    </div>
  );
};

export default SVGPreloader;
