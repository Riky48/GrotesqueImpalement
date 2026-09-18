import React, { useState } from 'react';
import { Disc, ExternalLink, Play, Volume2 } from 'lucide-react';

export default function DiscographySection({ albums = [] }) {
  // Por defecto, activamos el primer disco (el lanzamiento más reciente)
  const [activeAlbumId, setActiveAlbumId] = useState(albums[0]?.id || null);

  return (
    <section id="discography" className="py-20 border-b border-zinc-800/80 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 mb-12 flex items-center gap-3">
          <Disc /> Discografía
        </h2>

        <div className="space-y-12">
          {albums.map((album) => {
            const isActive = activeAlbumId === album.id;

            return (
              <div 
                key={album.id} 
                className={`bg-zinc-950 border rounded-xl p-6 md:p-8 transition duration-300 flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden ${
                  isActive ? 'border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.15)]' : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* PORTADA FÍSICA DEL DISCO */}
                <div className="w-full md:w-80 h-72 md:h-80 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-800 shadow-md relative bg-zinc-900">
                  <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* CONTENIDO Y REPRODUCTOR */}
                <div className="flex flex-col justify-between flex-grow w-full">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                      {album.type} • {album.year}
                    </span>
                    <h3 className="text-3xl font-black uppercase text-white mt-1 mb-4">
                      {album.title}
                    </h3>
                    
                    {/* REPRODUCTOR ÚNICO ACTIVO */}
                    {album.spotifyId && (
                      <div className="w-full my-3">
                        {isActive ? (
                          /* IFRAME ACTIVO EN PANTALLA */
                          <div className="rounded-lg overflow-hidden border border-cyan-500/50 bg-black/60 shadow-lg">
                            <iframe 
                              style={{ borderRadius: "12px" }}
                              src={`https://open.spotify.com/embed/album/${album.spotifyId}?utm_source=generator&theme=0`} 
                              width="100%" 
                              height="352" 
                              frameBorder="0" 
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                              loading="lazy"
                              title={`Spotify Embed ${album.title}`}
                            />
                          </div>
                        ) : (
                          /* BOTÓN PARA ACTIVAR ESTE DISCO (Desmonta el anterior y apaga su audio) */
                          <button
                            onClick={() => setActiveAlbumId(album.id)}
                            className="w-full h-32 rounded-lg border border-zinc-800/80 bg-zinc-900/60 hover:bg-zinc-900 hover:border-cyan-500/40 transition duration-300 flex flex-col items-center justify-center gap-2 group cursor-pointer"
                          >
                            <div className="p-3 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-500/40 group-hover:scale-110 transition shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                              <Play size={22} className="ml-0.5 fill-current" />
                            </div>
                            <span className="text-xs font-mono uppercase text-zinc-300 group-hover:text-cyan-400 transition font-bold tracking-wider flex items-center gap-2">
                              <Volume2 size={14} /> Reproducir este álbum
                            </span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* BOTÓN BANDCAMP */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-end gap-4 mt-4">
                    <a 
                      href={album.bandcampUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black px-6 py-3 rounded-md uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(6,182,212,0.3)] hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Comprar Álbum Digital (Bandcamp)</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}