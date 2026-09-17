import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import DiscographySection from './components/DiscographySection';
import ShowsSection from './components/ShowsSection';
import MerchSection from './components/MerchSection';
import GallerySection from './components/GallerySection';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

import { ALBUMS_DATA, SHOWS_DATA, MERCH_DATA, GALLERY_DATA } from './data/bandData';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayTrack = (track) => {
    if (currentTrack?.name === track.name && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play();
      }
    }
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleClosePlayer = () => {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }
  setIsPlaying(false);
  setCurrentTrack(null);
};

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-lime-900 selection:text-white">
      {/* Elemento Audio HTML5 global */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      <Navbar />
      <Hero />
      <BioSection />
      
      <DiscographySection 
        albums={ALBUMS_DATA} 
        currentTrack={currentTrack} 
        isPlaying={isPlaying} 
        onPlayTrack={handlePlayTrack} 
      />
      
      <ShowsSection shows={SHOWS_DATA} />
      <MerchSection merchItems={MERCH_DATA} />
      <GallerySection images={GALLERY_DATA} />
      
      <Footer />

      <AudioPlayer 
        currentTrack={currentTrack} 
        isPlaying={isPlaying} 
        onTogglePlay={handleTogglePlay} 
        onClose={handleClosePlayer}
      />
    </div>
  );
}