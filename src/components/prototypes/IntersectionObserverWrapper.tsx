import React, { useRef, useEffect, ReactNode } from "react";

interface IntersectionObserverWrapperProps {
  children: ReactNode;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void;
}

const IntersectionObserverWrapper: React.FC<
  IntersectionObserverWrapperProps
> = ({ children, root, rootMargin = "0px", threshold = 0, onIntersect }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    };

    observerRef.current = new IntersectionObserver((entries, observer) => {
      onIntersect(entries, observer);
    }, observerOptions);

    if (observerRef.current) {
      React.Children.forEach(children, (child) => {
        if (child instanceof Element) {
          observerRef.current!.observe(child);
        }
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [children, root, rootMargin, threshold, onIntersect]);

  return <div>{children}</div>;
};

export default IntersectionObserverWrapper;
