import React, { useEffect, useRef, useState } from 'react';

interface ComponentCardProps {
  title: string;
  description: string;
  demoUrl: string;
  techStack: string[];
  codeUrl?: string;
  iframeHeight?: number;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  demoUrl,
  techStack,
  codeUrl,
  iframeHeight = 600,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [dynamicHeight, setDynamicHeight] = useState(iframeHeight);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Try to measure content height after load
    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc?.body) {
          const contentHeight = doc.body.scrollHeight;
          if (contentHeight > 0) {
            setDynamicHeight(contentHeight);
          }
        }
      } catch (e) {
        // Cross-origin: fall back to default height
        setDynamicHeight(iframeHeight);
      }
    };

    iframe.addEventListener('load', handleLoad);

    // Also use ResizeObserver to adjust on window resize
    const observer = new ResizeObserver(() => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc?.body) {
          const contentHeight = doc.body.scrollHeight;
          if (contentHeight > 0) {
            setDynamicHeight(contentHeight);
          }
        }
      } catch (e) {
        // Cross-origin: keep current height
      }
    });

    if (iframe.parentElement) {
      observer.observe(iframe.parentElement);
    }

    return () => {
      iframe.removeEventListener('load', handleLoad);
      observer.disconnect();
    };
  }, [iframeHeight]);

  return (
    <article className="motion-component">
      <div className="component-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="component-demo">
        <iframe
          ref={iframeRef}
          src={demoUrl}
          title={`${title} Demo`}
          className="demo-iframe"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          style={{ height: `${dynamicHeight}px` }}
        />
      </div>

      <div className="component-details">
        <div className="tech-stack">
          <h4>Tech Stack</h4>
          <ul>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        {codeUrl && (
          <div className="code-link">
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              View Source Code →
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ComponentCard;
