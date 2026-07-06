import React from 'react';

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

  return (
    <article className="motion-component">
      <div className="component-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="component-demo">
        <iframe
          src={demoUrl}
          title={`${title} Demo`}
          className="demo-iframe"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          style={{ height: `${iframeHeight}px` }}
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
