import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/90 border-b border-cyan-500/30 z-40 backdrop-blur-md shadow-[0_4px_20px_rgba(6,182,212,0.08)]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* EMBLEMA IZQUIERDO CON GLOW VERDE */}
        <a href="#" className="flex items-center group">
          <img 
            src="/emblema.png" 
            alt="Grotesque Impalement Emblem" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            onError={(e) => { e.currentTarget.src = "/logo.png"; }}
          />
        </a>

        {/* LINKS CENTRALES CON DETALLES EN cyan */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider">
          <a href="#bio" className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Bio / EPK</a>
          <a href="#discography" className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Discografía</a>
          <a href="#shows" className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Fechas & Entradas</a>
          <a href="#merch" className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Merch</a>
          <a href="#gallery" className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Galería</a>
        </div>

        {/* EMBLEMA DERECHO & BOTÓN HAMBURGUESA */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block group">
            <img 
              src="/emblema.png" 
              alt="Grotesque Impalement Emblem" 
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
              onError={(e) => { e.currentTarget.src = "/logo.png"; }}
            />
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-zinc-300 hover:text-cyan-400 p-1 border border-transparent hover:border-cyan-500/40 rounded transition"
          >
            {isMenuOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MENÚ DESPLEGABLE MOBILE CON BORDES VERDES */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-cyan-500/40 px-6 py-6 flex flex-col space-y-4 font-bold uppercase text-sm">
          <a href="#bio" onClick={() => setIsMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition">Bio / EPK</a>
          <a href="#discography" onClick={() => setIsMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition">Discografía</a>
          <a href="#shows" onClick={() => setIsMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition">Fechas & Entradas</a>
          <a href="#merch" onClick={() => setIsMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition">Merch</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition">Galería</a>
        </div>
      )}
    </nav>
  );
}