import React, { useState, useEffect } from 'react';
import { Ticket, Disc } from 'lucide-react';

import heroBgDesktop from '../assets/band-hero-bg.webp';
import heroBgMobile from '../assets/hero-mobile.webp';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className="relative min-h-[calc(100vh-80px)] mt-20 flex flex-col items-center justify-end md:justify-center bg-zinc-950 border-b border-cyan-900/40 overflow-hidden pb-10 md:pb-0 py-6 md:py-10">
      
      /* CAPA DE FOTOS DE FONDO */
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-out ${
          loaded ? 'opacity-60 md:opacity-50' : 'opacity-0'
        }`}
      >
        /* FOTO VERTICAL CELULAR: enfocada al centro/arriba para mostrar las caras */
        <img 
          src={heroBgMobile} 
          alt="Grotesque Impalement Mobile" 
          className="block md:hidden w-full h-full object-cover object-[center_20%] filter grayscale contrast-125 brightness-90"
        />

        /* FOTO HORIZONTAL ESCRITORIO */
        <img 
          src={heroBgDesktop} 
          alt="Grotesque Impalement Desktop" 
          className="hidden md:block w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90"
        />

        /* DEGRADADO OSCURO INFERIOR (Genera lectura perfecta para el logo abajo) */
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent md:via-zinc-950/40 md:to-zinc-950/70" />
      </div>

      /* AURA AZUL NEÓN */
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[300px] md:h-[400px] bg-cyan-500/20 blur-[140px] md:blur-[160px] rounded-full pointer-events-none z-0" />

      /* CONTENIDO (En mobile se apoya abajo para no tapar las caripelas) */
      <div className="max-w-5xl mx-auto text-center px-4 flex flex-col items-center justify-end md:justify-center z-10 w-full">
        
        /* LOGO */
        <div className="w-full flex justify-center items-center">
          <img 
            src="/logo.webp" 
            alt="Grotesque Impalement Logo" 
            className="w-[85%] max-w-[320px] md:max-w-4xl h-auto object-contain drop-shadow-[0_0_35px_rgba(6,182,212,0.7)]"
          />
        </div>

        /* SUBTÍTULO */
        <span className="-mt-3 md:-mt-14 text-cyan-400 font-extrabold uppercase tracking-[0.2em] text-[10px] md:text-sm bg-zinc-950/90 px-3.5 py-1.5 rounded border border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)] z-20">
          Death Metal — Olavarría, Argentina
        </span>

        /* DESCRIPCIÓN */
        <p className="text-zinc-300 text-xs md:text-xl max-w-xl mx-auto font-normal leading-relaxed mt-3 px-2">
          Brutalidad, técnica y devastación. Escuchá el nuevo material o conseguí tus entradas.
        </p>

        /* BOTONES */
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 md:gap-4 mt-5 z-20 w-full sm:w-auto px-4 sm:px-0">
          <a 
            href="#shows" 
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black px-8 py-3 rounded-md uppercase text-xs md:text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            <Ticket size={18} className="text-zinc-950" />
            <span>Entradas en Vivo</span>
          </a>
          <a 
            href="#discography" 
            className="w-full sm:w-auto bg-zinc-900/90 hover:bg-zinc-800 text-cyan-400 font-bold px-8 py-3 rounded-md uppercase text-xs md:text-sm tracking-wider transition-all flex items-center justify-center gap-2 border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <Disc size={18} className="text-cyan-400" />
            <span>Ver Discografía</span>
          </a>
        </div>

      </div>
    </header>
  );
}