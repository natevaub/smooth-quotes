// import React from "react";

const SpotifyPlaylist = () => {
  return (
    <div className="playlist-container">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/73y1fbiUTNWMfI27Y8N7nE?utm_source=generator&theme=0"
        width="300vw"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Soulful Serenity Playlist"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;