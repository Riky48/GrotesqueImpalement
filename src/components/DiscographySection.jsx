import React from 'react';
import { Disc, Play, Pause } from 'lucide-react';

export default function DiscographySection({ albums, currentTrack, isPlaying, onPlayTrack }) {
  return (
    <section id="discography" className="py-20 border-b border-zinc-800/60 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-lime-600 mb-10 flex items-center gap-3">
          <Disc /> Discografía Interactiva
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-6 hover:border-lime-900/60 transition flex flex-col sm:flex-row gap-6 shadow-xl">
              <img 
                src={album.cover} 
                alt={album.title} 
                className="w-full sm:w-44 h-44 object-cover rounded-md border border-zinc-800 flex-shrink-0"
              />
              
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono text-lime-600 font-bold uppercase">{album.type} • {album.year}</span>
                  <h3 className="text-2xl font-black uppercase text-white mt-1 mb-3">{album.title}</h3>
                  
                  <div className="space-y-1">
                    {album.tracks.map((track, idx) => {
                      const isThisPlaying = currentTrack?.name === track.name && isPlaying;
                      return (
                        <button
                          key={idx}
                          onClick={() => onPlayTrack(track)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs flex items-center justify-between transition ${
                            isThisPlaying ? 'bg-lime-950 text-white font-bold border border-lime-800' : 'hover:bg-zinc-800/80 text-zinc-300'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            {isThisPlaying ? <Pause size={14} className="text-lime-600" /> : <Play size={14} className="text-zinc-500" />}
                            {idx + 1}. {track.name}
                          </span>
                          <span className="font-mono text-zinc-500">{track.duration}</span>
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