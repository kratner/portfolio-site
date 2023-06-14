import React from "react";

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

interface YouTubePlaylistProps {
  playlistID: string;
  width?: number;
  height?: number;
  background?: string;
  iframeWidth?: string;
  iframeHeight?: string;
  iframeBorder?: string;
}

const YouTubePlaylist: React.FC<YouTubePlaylistProps> = ({
  playlistID,
  width = 100,
  height = 100,
  background,
  iframeWidth,
  iframeHeight,
  iframeBorder,
}) => {
  const iframeSrc = `https://www.youtube.com/embed/videoseries?list=${playlistID}`;

  const iframeStyle = {
    height: iframeHeight,
    width: iframeWidth,
    border: iframeBorder,
  };

  const containerStyle = {
    height: `${height}vh`,
    width: `${width}vw`,
    position: "absolute" as Position, // Specify the position type
    transform: `translateX(-${width / 2}%) translateY(-${height / 2}%)`,
    left: "50%",
    top: "50%",
    background: background,
  };

  return (
    <div className="youtube-playlist-container" style={containerStyle}>
      <iframe
        style={iframeStyle}
        src={iframeSrc}
        allow="autoplay; encrypted-media"
        title="YouTube Playlist"
      />
    </div>
  );
};

export default YouTubePlaylist;
