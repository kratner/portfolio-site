import React, { useEffect, useRef } from "react";

interface IntersectionObserverComponentProps {
  targetSelector: string;
  className: string;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

const IntersectionObserverComponent: React.FC<
  IntersectionObserverComponentProps
> = ({
  targetSelector,
  className,
  root = null,
  rootMargin = "0px",
  threshold = 0.5,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observerRef.current?.unobserve(entry.target);
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

    if (targets.length > 0) {
      targets.forEach((target) => observer.observe(target));
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [targetSelector, className, root, rootMargin, threshold]);

  return null;
};

export default IntersectionObserverComponent;
