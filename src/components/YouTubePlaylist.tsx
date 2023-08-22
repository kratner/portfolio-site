import React from "react";

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

interface YouTubePlaylistProps {
  playlistID: string;
  width?: number;
  height?: number;
  background?: string;
  iframeWidth?: number;
  iframeHeight?: number;
  iframeBorder?: string;
  position?: string;
  left?: string;
  top?: string;
  containerDisplay?: string;
  heading?: string;
  subHeading?: string;
}

const YouTubePlaylist: React.FC<YouTubePlaylistProps> = ({
  playlistID,
  width = 100,
  height = 100,
  position = "absolute",
  left = "0",
  top = "0",
  background,
  iframeWidth,
  iframeHeight,
  iframeBorder,
  containerDisplay = "flex",
  heading,
  subHeading,
}) => {
  const iframeSrc = `https://www.youtube.com/embed/videoseries?list=${playlistID}`;

  const iframeStyle = {
    height: `${iframeHeight}vh`,
    width: `${iframeWidth}%`,
    border: iframeBorder,
  };

  const containerStyle = {
    display: `${containerDisplay}`,
    height: `${height}vh`,
    width: `${width}%`,
    position: `${position}` as Position, // Specify the position type
    left: `${left}`,
    top: `${top}`,
    background: background,
  };

  return (
    <React.Fragment>
      {heading && (
        <div className="panel-heading">
          <h3>{heading}</h3>
        </div>
      )}
      {subHeading && (
        <div className="panel-subheading">
          <h4>{subHeading}</h4>
        </div>
      )}
      <div className="youtube-playlist-container" style={containerStyle}>
        <iframe
          style={iframeStyle}
          src={iframeSrc}
          allow="autoplay; encrypted-media"
          title="YouTube Playlist"
        />
      </div>
    </React.Fragment>
  );
};

export default YouTubePlaylist;
