import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Pause, Play, Image as ImageIcon, Send } from 'lucide-react';

export default function ShowsSection({ shows = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // NÚMERO DE WHATSAPP DE LA BANDA (Código de país + área sin + ni espacios)
  const BAND_WHATSAPP_NUMBER = "5492284000000";

  useEffect(() => {
    if (isPaused || shows.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shows.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, shows.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % shows.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + shows.length) % shows.length);

  const currentShow = shows[currentIndex];

  // Mensaje automático personalizado para el show activo
  const waMessage = currentShow ? encodeURIComponent(
    `¡Hola! Quiero comprar/reservar entradas para ${currentShow.venue} (${currentShow.date} - ${currentShow.city}) desde la web oficial.`
  ) : '';

  const whatsappUrl = `https://wa.me/${BAND_WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <section id="shows" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-wider text-cyan-400 flex items-center gap-3">
            <Calendar /> Tour & Entradas
          </h2>

          <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
            {isPaused ? <Pause size={12} className="text-cyan-400" /> : <Play size={12} />}
            {isPaused ? "Pausado" : "En vivo"}
          </span>
        </div>

        <div 
          className="relative bg-zinc-900/90 border border-cyan-500/30 rounded-xl p-6 md:p-8 shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {shows.length > 0 && currentShow && (
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* CAJA DEL FLYER CON OBJECT-CONTAIN */}
              <div className="w-full lg:w-64 h-80 flex-shrink-0 rounded-lg overflow-hidden border border-cyan-500/40 relative shadow-lg bg-zinc-950 flex items-center justify-center group">
                <img 
                  src={currentShow.flyer} 
                  alt={`Flyer ${currentShow.venue}`} 
                  className="w-full h-full object-contain p-1 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-2 left-2 bg-zinc-950/90 px-2 py-1 rounded text-[10px] font-mono text-cyan-400 flex items-center gap-1 border border-cyan-500/40 z-10">
                  <ImageIcon size={12} /> Flyer Oficial
                </div>
                {currentShow.soldOut && (
                  <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xs flex items-center justify-center z-20">
                    <span className="bg-red-600 text-white font-black px-3 py-1 rounded text-xs uppercase tracking-widest shadow-lg">
                      Agotado
                    </span>
                  </div>
                )}
              </div>

              {/* DETALLES Y BOTÓN WHATSAPP */}
              <div className="flex flex-col justify-between flex-grow w-full space-y-6">
                <div className="space-y-3">
                  <div className="inline-block bg-zinc-950 border border-cyan-500/50 px-4 py-1.5 rounded text-cyan-400 font-mono font-bold text-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                    {currentShow.date}
                  </div>
                  <h3 className="text-3xl font-black uppercase text-white tracking-wide">
                    {currentShow.venue}
                  </h3>
                  <p className="text-lg text-zinc-300 font-light">{currentShow.city}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400 font-mono space-y-1">
                    <p>• Puertas: 21:00 hs</p>
                    <p>• Show apto para mayores de 18 años</p>
                  </div>

                  {currentShow.soldOut ? (
                    <button 
                      disabled 
                      className="w-full sm:w-auto bg-zinc-800 text-zinc-500 font-bold px-8 py-3.5 rounded text-xs uppercase tracking-wider cursor-not-allowed"
                    >
                      Entradas Agotadas
                    </button>
                  ) : (
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black px-8 py-3.5 rounded-md uppercase text-xs tracking-wider transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105"
                    >
                      <Send size={16} /> Comprar Entradas (WhatsApp)
                    </a>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* CONTROLES DEL CARRUSEL */}
          {shows.length > 1 && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-zinc-800/80">
              <div className="flex gap-2">
                {shows.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="p-2 bg-zinc-800 hover:bg-cyan-950 text-white hover:text-cyan-400 rounded-lg border border-zinc-700 transition"
                  title="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 bg-zinc-800 hover:bg-cyan-950 text-white hover:text-cyan-400 rounded-lg border border-zinc-700 transition"
                  title="Siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}