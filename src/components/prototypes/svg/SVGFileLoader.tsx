import { useEffect } from 'react';

interface SVGFileLoaderProps {
  src: string;
  onLoading: () => void;
  onLoaded: (content: string) => void;
}

const SVGFileLoader: React.FC<SVGFileLoaderProps> = ({ src, onLoading, onLoaded }) => {
  useEffect(() => {
    const fetchSVG = async () => {
      onLoading(); // Trigger the onLoading event

      try {
        const response = await fetch(src);
        const text = await response.text();
        onLoaded(text); // Trigger the onLoaded event with the loaded SVG content
      } catch (error) {
        console.error('Error loading SVG:', error);
        onLoaded(''); // Trigger the onLoaded event with an empty string in case of an error
      }
    };

    fetchSVG();
  }, [src, onLoading, onLoaded]);

  return null; // Do not render anything on screen
};

export default SVGFileLoader;
