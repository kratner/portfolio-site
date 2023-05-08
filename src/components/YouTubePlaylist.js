import React from "react";

const YouTubePlaylist = ({ playlistID, width, height }) => {
  //   const playlistId = playlistID;
  const iframeSrc = `https://www.youtube.com/embed/videoseries?list=${playlistID}`;

  const iframeStyle = {
    height: height,
    width: width,
  };

  return (
    <div className="youtube-playlist-container">
      <iframe
        style={iframeStyle}
        src={iframeSrc}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="YouTube Playlist"
      />
    </div>
  );
};

export default YouTubePlaylist;
