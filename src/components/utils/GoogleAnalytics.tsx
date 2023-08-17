import React, { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[]; // Declare the dataLayer property
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", measurementId);
    };
  }, [measurementId]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;

export type { GoogleAnalyticsProps };
