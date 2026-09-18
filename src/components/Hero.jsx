import React, { useState, useEffect } from 'react';
import { Ticket, Disc } from 'lucide-react';

// IMPORTAMOS AMBAS IMÁGENES DESDE ASSETS
import heroBgDesktop from '../assets/band-hero-bg.jpg';
import heroBgMobile from '../assets/hero-mobile.jpg';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className="relative min-h-[calc(100vh-80px)] mt-20 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/70 via-zinc-950 to-zinc-950 border-b border-cyan-900/40 overflow-hidden py-10">
      
      {/* CAPA DE FOTOS DE FONDO RESPONSIVAS */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-out ${
          loaded ? 'opacity-50' : 'opacity-0'
        }`}
      >
        {/* FOTO VERTICAL PARA CELULAR (se muestran los 3 integrantes) */}
        <img 
          src={heroBgMobile} 
          alt="Grotesque Impalement Mobile" 
          className="block md:hidden w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90"
        />

        {/* FOTO HORIZONTAL PARA PANTALLAS GRANDES / PC */}
        <img 
          src={heroBgDesktop} 
          alt="Grotesque Impalement Desktop" 
          className="hidden md:block w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90"
        />

        {/* DEGRADADO SUTIL PARA MANTENER LA LEGIBILIDAD DEL LOGO Y TEXTO */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70" />
      </div>

      {/* AURA AZUL NEÓN */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto text-center px-4 flex flex-col items-center justify-center z-10 w-full">
        
        {/* LOGO */}
        <div className="w-full flex justify-center items-center">
          <img 
            src="/logo.png" 
            alt="Grotesque Impalement Logo" 
            className="w-full max-w-3xl md:max-w-4xl h-auto object-contain drop-shadow-[0_0_50px_rgba(6,182,212,0.55)]"
          />
        </div>

        {/* SUBTÍTULO */}
        <span className="-mt-8 md:-mt-14 text-cyan-400 font-extrabold uppercase tracking-[0.2em] text-xs md:text-sm bg-zinc-950/90 px-4 py-1.5 rounded border border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)] z-20">
          Death Metal — Olavarría, Argentina
        </span>

        {/* DESCRIPCIÓN */}
        <p className="text-zinc-300 text-base md:text-xl max-w-xl mx-auto font-normal leading-relaxed mt-4">
          Brutalidad, técnica y devastación. Escuchá el nuevo material o conseguí tus entradas para las próximas fechas.
        </p>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 z-20">
          <a 
            href="#shows" 
            className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-black px-8 py-3.5 rounded-md uppercase text-xs md:text-sm tracking-wider transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105"
          >
            <Ticket size={18} className="text-zinc-950" />
            <span>Entradas en Vivo</span>
          </a>
          <a 
            href="#discography" 
            className="bg-zinc-900/90 hover:bg-zinc-800 text-cyan-400 font-bold px-8 py-3.5 rounded-md uppercase text-xs md:text-sm tracking-wider transition-all flex items-center gap-2 border border-cyan-500/60 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <Disc size={18} className="text-cyan-400" />
            <span>Ver Discografía</span>
          </a>
        </div>

      </div>
    </header>
  );
}