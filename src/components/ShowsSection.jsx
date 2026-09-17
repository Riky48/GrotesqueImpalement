import React, { useState, useEffect } from 'react';
import { Calendar, Ticket, ChevronLeft, ChevronRight, Pause, Play, Image as ImageIcon } from 'lucide-react';

export default function ShowsSection({ shows }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <section id="shows" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      {/* ALINEACIÓN CON LAS OTRAS SECCIONES (max-w-6xl) */}
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
          {shows.length > 0 && (
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
              </div>

              {/* DETALLES Y BOTÓN */}
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

                  <a 
                    href={currentShow.ticketUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black px-8 py-3.5 rounded-md uppercase text-xs tracking-wider transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    <Ticket size={18} /> Comprar Entradas
                  </a>
                </div>
              </div>

            </div>
          )}

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
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 bg-zinc-800 hover:bg-cyan-950 text-white hover:text-cyan-400 rounded-lg border border-zinc-700 transition"
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