import React, { useEffect } from "react";

interface IntersectionObserverComponentProps {
  targetSelector: string;
  className: string;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  onIntersection: (target: Element) => void;
}

const IntersectionObserverComponent: React.FC<
  IntersectionObserverComponentProps
> = ({
  targetSelector,
  className,
  root = null,
  rootMargin = "0px",
  threshold = 0.5,
  onIntersection,
}) => {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersection(entry.target);
        }
      });
    };

    const options = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(targetSelector);

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [targetSelector, root, rootMargin, threshold, onIntersection]);

  return null;
};

export default IntersectionObserverComponent;
