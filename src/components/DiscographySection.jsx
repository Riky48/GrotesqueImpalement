import React, { useState, useEffect } from 'react';
import { Disc, ExternalLink, RotateCw } from 'lucide-react';

// COMPONENTE PARA INTERCALAR TAPA Y CONTRATAPA
function AlbumArtwork({ cover, backCover, title }) {
  const [showBack, setShowBack] = useState(false);

  // Alterna automáticamente cada 4 segundos si existe la contratapa
  useEffect(() => {
    if (!backCover) return;
    const interval = setInterval(() => {
      setShowBack((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, [backCover]);

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
      <div 
        className="w-full aspect-square bg-zinc-950 rounded-lg overflow-hidden border border-cyan-500/40 relative shadow-[0_0_20px_rgba(6,182,212,0.15)] group cursor-pointer"
        onClick={() => backCover && setShowBack(!showBack)}
      >
        <img 
          src={showBack && backCover ? backCover : cover} 
          alt={`${title} - ${showBack ? 'Contratapa' : 'Tapa'}`} 
          className="w-full h-full object-cover transition-all duration-700 filter contrast-105"
        />
        
        {/* ETIQUETA INDICADORA DE VISTA */}
        <div className="absolute top-3 left-3 bg-zinc-950/90 text-cyan-400 font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded border border-cyan-500/40 shadow-md">
          {showBack ? 'Contratapa' : 'Tapa Oficial'}
        </div>
      </div>

      {/* BOTÓN MANUAL PARA CAMBIAR TAPA / CONTRATAPA */}
      {backCover && (
        <button
          onClick={() => setShowBack(!showBack)}
          className="text-xs font-mono text-zinc-400 hover:text-cyan-400 flex items-center gap-1.5 transition py-1 px-3 rounded bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40"
        >
          <RotateCw size={12} className="text-cyan-400" />
          <span>Ver {showBack ? 'Tapa' : 'Contratapa'}</span>
        </button>
      )}
    </div>
  );
}

export default function DiscographySection({ albums = [] }) {
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
              className="bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 rounded-xl p-6 md:p-8 transition duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* CABECERA DEL ÁLBUM */}
              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  {album.type} • {album.year}
                </span>
                <h3 className="text-3xl font-black uppercase text-white mt-1">
                  {album.title}
                </h3>
              </div>

              {/* GRID: REPRODUCTOR (IZQ) Y FOTOS INTERCALADAS (DER) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* REPRODUCTOR BANDCAMP (7 COLUMNAS) */}
                <div className="lg:col-span-7 w-full">
                  {album.bandcampAlbumId && (
                    <div className="w-full rounded-lg overflow-hidden border border-cyan-500/30 bg-zinc-900/80 shadow-lg">
                      <iframe 
                        style={{ border: 0, width: '100%', height: '380px' }} 
                        src={`https://bandcamp.com/EmbeddedPlayer/album=${album.bandcampAlbumId}/size=large/bgcol=09090b/linkcol=06b6d4/artwork=small/transparent=true/`} 
                        seamless
                        title={`Bandcamp Player - ${album.title}`}
                      />
                    </div>
                  )}
                </div>

                {/* VISO DE TAPA / CONTRATAPA (5 COLUMNAS) */}
                <div className="lg:col-span-5 w-full flex justify-center">
                  <AlbumArtwork 
                    cover={album.cover} 
                    backCover={album.backCover} 
                    title={album.title} 
                  />
                </div>

              </div>

              {/* BOTÓN BANDCAMP ABAJO */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex justify-end">
                <a 
                  href={album.bandcampUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black px-6 py-3.5 rounded-md uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(6,182,212,0.3)] hover:scale-105"
                >
                  <ExternalLink size={16} />
                  <span>Apoyá a la banda comprando nuestro material en Bandcamp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}