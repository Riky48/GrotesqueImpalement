import React, { useState, useEffect } from 'react';
import { Disc, ExternalLink } from 'lucide-react';

// COMPONENTE DE TRANSICIÓN SUAVE TAPA / CONTRATAPA
function AlbumCoverTransition({ front, back, title }) {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    if (!back) return;
    const interval = setInterval(() => {
      setShowBack((prev) => !prev);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [back]);

  return (
    <div className="w-full md:w-80 h-80 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-800 shadow-md relative bg-zinc-950">
      {/* TAPA (FRENTE) */}
      <img 
        src={front} 
        alt={`${title} Tapa`} 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          showBack && back ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* CONTRATAPA (DORSO) */}
      {back && (
        <img 
          src={back} 
          alt={`${title} Contratapa`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            showBack ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* ETIQUETA INDICADORA SUTIL */}
      {back && (
        <span className="absolute bottom-2 right-2 bg-zinc-950/80 text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30 z-10">
          {showBack ? 'Contratapa' : 'Tapa'}
        </span>
      )}
    </div>
  );
}

export default function DiscographySection({ albums }) {
  return (
    <section id="discography" className="py-20 border-b border-zinc-800/80 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 mb-12 flex items-center gap-3">
          <Disc /> Discografía
        </h2>

        <div className="space-y-12">
          {albums.map((album) => (
            <div 
              key={album.id} 
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 transition duration-300 flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden"
            >
              {/* TAPA CON TRANSICIÓN CONTINUA */}
              <AlbumCoverTransition 
                front={album.cover} 
                back={album.backCover} 
                title={album.title} 
              />
              
              {/* CONTENIDO Y REPRODUCTOR SPOTIFY */}
              <div className="flex flex-col justify-between flex-grow w-full">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                    {album.type} • {album.year}
                  </span>
                  <h3 className="text-3xl font-black uppercase text-white mt-1 mb-4">
                    {album.title}
                  </h3>
                  
                  {/* WIDGET REPRODUCTOR */}
                  {album.spotifyId && (
                    <div className="w-full my-2 rounded-lg overflow-hidden border border-zinc-800 bg-black/40">
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
          ))}
        </div>
      </div>
    </section>
  );
}