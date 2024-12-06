// components/MusicPlayer.js
import React, { useState, useRef } from "react";
import "./MusicPlayer.css";

const songs = [
  { title: "Song 1", artist: "Artist 1", src: "/song1.mp3" },
  { title: "Song 2", artist: "Artist 2", src: "/song2.mp3" },
  { title: "Song 3", artist: "Artist 3", src: "/song3.mp3" },
];

const MusicPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songs[currentIndex].src));

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    audioRef.current.pause();
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    audioRef.current = new Audio(songs[nextIndex].src);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const prevSongHandler = () => {
    audioRef.current.pause();
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    audioRef.current = new Audio(songs[prevIndex].src);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="music-player">
      <h1>React Music Player</h1>
      <div className="song-details">
        <h2>{songs[currentIndex].title}</h2>
        <p>{songs[currentIndex].artist}</p>
      </div>
      <div className="controls">
        <button onClick={prevSongHandler}>&lt;&lt; Prev</button>
        <button onClick={playPauseHandler}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={nextSongHandler}>Next &gt;&gt;</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
