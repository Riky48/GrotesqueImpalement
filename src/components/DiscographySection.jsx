import React from 'react';
import { Disc, Play, Pause } from 'lucide-react';

export default function DiscographySection({ albums, currentTrack, isPlaying, onPlayTrack }) {
  return (
    <section id="discography" className="py-20 border-b border-zinc-800/80 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 mb-12 flex items-center gap-3">
          <Disc /> Discografía
        </h2>

        <div className="space-y-10">
          {albums.map((album) => (
            <div 
              key={album.id} 
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-cyan-500/50 transition duration-300 flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden group"
            >
              {/* PORTADA GRANDE */}
              <div className="w-full md:w-64 h-64 md:h-64 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-800 relative group-hover:border-cyan-500/60 transition">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* DETALLES Y CANCIONES AL LATERAL */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">{album.type} • {album.year}</span>
                      <h3 className="text-3xl font-black uppercase text-white mt-1 mb-4">{album.title}</h3>
                    </div>
                  </div>
                  
                  {/* TRACKLIST */}
                  <div className="space-y-2 mt-2">
                    {album.tracks.map((track, idx) => {
                      const isThisPlaying = currentTrack?.name === track.name && isPlaying;
                      return (
                        <button
                          key={idx}
                          onClick={() => onPlayTrack(track)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm flex items-center justify-between transition ${
                            isThisPlaying 
                              ? 'bg-cyan-950/80 text-cyan-300 font-bold border border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.2)]' 
                              : 'bg-zinc-900/60 hover:bg-zinc-800/90 text-zinc-300 border border-zinc-800/80'
                          }`}
                        >
                          <span className="flex items-center gap-3 truncate">
                            {isThisPlaying ? <Pause size={16} className="text-cyan-400" /> : <Play size={16} className="text-zinc-500" />}
                            <span>{idx + 1}. {track.name}</span>
                          </span>
                          <span className="font-mono text-xs text-zinc-500">{track.duration}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}