import React from "react";

// YouTube API Key:
// AIzaSyBP91njRFNfXTpx5aymmfqc1SjeviO2o2s

const YouTubePlaylist = ({
  playlistID,
  width,
  height,
  background,
  iframeWidth,
  iframeHeight,
  iframeBorder,
}) => {
  //   const playlistId = playlistID;
  const iframeSrc = `https://www.youtube.com/embed/videoseries?list=${playlistID}`;

  const iframeStyle = {
    height: iframeHeight,
    width: iframeWidth,
    border: iframeBorder,
  };

  const containerStyle = {
    height: height + "vh",
    width: width + "vw",
    position: "absolute",
    transform:
      "translateX(-" + width / 2 + "%) translateY(-" + height / 2 + "%)",
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
